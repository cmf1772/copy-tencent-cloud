
// import map from "@/utils/map.js";
import LocationAMap from "@/utils/amap.js";

export default {
  data() {
    return {
      adressText: "苏州·高新区",
      categoryList: [],
    };
  },
  mounted() {},
  activated() {
    // 获取缓存中是否有地址
    this.adressText = localStorage.getItem("_M_Address_Text")
      ? localStorage.getItem("_M_Address_Text")
      : "苏州·高新区";
  },
  created() {
    this.getCity();
  },
  watch: {
    adressText(newVal) {
      //城市变化 重新获取资讯数据
      // this.getCategoryList();
    }
  },
  methods: {

    //获取到城市
    getCity() {
      // 判断缓存中是否有值
      if (localStorage.getItem("_M_Address_Text")) {
        return;
      }
      LocationAMap.getPosition(res_data => {
        // console.log(res_data);
        if (res_data.status) {
          console.log(res_data.nowLocation);
          //设置传入的 地区文字
          this.adressText =
            res_data.nowLocation.city + "·" + res_data.nowLocation.township;
            localStorage.setItem("_M_Address_Text", this.adressText);
            localStorage.setItem("_M_Adress_Location",JSON.stringify(res_data.nowLocation))
          // 缓存中没有值的话 调用函数 将定位的省份 和 城市 传入
          this.setAddressCityPid(
            res_data.nowLocation.province,
            res_data.nowLocation.city
          );
        } else {
          console.log(res_data);
          // this.$toast.fail("定位失败，请打开定位并刷新页面");
        }
      });
    },

    // 设置缓存中城市的 pid
    setAddressCityPid(province, city) {
      let getData = false;
      let storageAddress = {}
      // 默认第 0 级
      let pid = 0;
      // this指针 作用域
      let _this = this;
      // 递归查找城市 id
      function getAddress(pid, name) {
        console.log(pid);
        _this.$api.index
          .getAdressLocalList({ pid })
          .then(res => {
            // 循环数据 与 定位数据相比较
            for (let item of res) {
              
              if (item.name == name) {

                if(pid == 0){
                  storageAddress.province = item
                }
                if (getData) {
                  // 用户不想选择大区域的时候 设置城市id 在缓存中
                  console.log(item);
                  storageAddress.city = item
                  localStorage.setItem("_M_City_Id", item.id);
                  localStorage.setItem("_M_Address_Data", JSON.stringify(storageAddress));
                  return;
                } else {
                  // 只请求两层 一层为省份 一层为城市
                  getData = true;
                  //只查到省份 没查找到城市
                  getAddress(item.id, city);
                }
              }
            }
          })
          .catch(err => {});
      }
      // 执行递归函数
      getAddress(pid, province);
    },
    
    // 子组件发射事件
    adressChange(value) {
      this.adressText = value;
    }
  }
};