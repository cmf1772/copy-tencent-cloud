/**
 *    混入( MiXin )
 *    多个页面使用地图
 */

// 引入 高德地图
import AMap from "AMap";
// 搜索组件
import serach from "@/components/search/search";
export default {
  components: {
    serach,
  },
  data() {
    return {
      map: null,
      // 默认经纬度
      shopInfo: {
        lat: 39.90923,
        lng: 116.397428,
      },
      shopInfoCopy: {
        lat: 39.90923,
        lng: 116.397428,
      },
      //城市名 获取附近建筑
      cityName: null,
      // 附近建筑列表
      nearByList: [],
      radio: null,
      marker: null,
      autoComplete: null,
      markerIcon: require('@/assets/images/icon/serve/travel/marker.png'),
      meMarkerIcon: require('@/assets/images/icon/serve/travel/addres-t.png')
    };
  },
  watch: {
    showModal: function (newValue) {
      if (newValue) {
        this.init();
      }
    },
  },
  computed: {

  },
  // DOM 挂载之前
  created() {
    // 判断首页 当前位置缓存
    if (localStorage.getItem("_M_Adress_Location")) {
      let adress = JSON.parse(localStorage.getItem("_M_Adress_Location"));
      this.shopInfo.lat = adress.lat;
      this.shopInfo.lng = adress.lon;
      this.shopInfoCopy.lat = adress.lat;
      this.shopInfoCopy.lng = adress.lon;
    }
    //获取当前城市名
    this.cityName = localStorage.getItem("adressText").split("·")[0];
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 选择地点之后返回
    onClickRight() {
      if (this.radio === "" || this.radio === null) {
        this.$toast.fail("请选择地点");
        return;
      }
      localStorage.setItem("checkedLocation", JSON.stringify(this.nearByList[this.radio]))
      this.$router.go(-1)
    },
    // 初始化函数
    init() {
      // console.log(this.shopInfo);
      // 初始化地图
      this.createMap([this.shopInfo.lng, this.shopInfo.lat]);
      // 初始化自定义坐标
      this.initMarker();
      // 获取附近位置
      // 传入 当前经纬度  城市名称
      this.aMapSearchNearBy(
        [this.shopInfoCopy.lng, this.shopInfo.lat],
        this.cityName
      );
    },

    //创建地图
    createMap(arr) {
      this.map = new AMap.Map("container", {
        zooms: [4, 19], //设置地图级别范围
        zoom: 15, //初始层级
        // scrollWheel: true, //滚轮可以放大缩小
        center: arr, //中心点坐标
        resizeEnable: true
      });
      this.map.on("click", this.mapClick);
      this.map.on('dblclick', this.showInfoDbClick);
    },
    
    // 初始化 marker
    initMarker() {
      // 将 icon 传入 marker
      console.log(this.shopInfo);
      this.marker = new AMap.Marker({
        position: new AMap.LngLat(this.shopInfo.lng, this.shopInfo.lat),
        icon: new AMap.Icon({
          // 图标尺寸
          // 图标的取图地址
          image: this.markerIcon,
          // 图标所用图片大小
          imageSize: new AMap.Size(20, 40),
        }),
        offset: new AMap.Pixel(-13, -30)
      });
      this.map.add(this.marker)
      // 设置点标记的动画效果，此处为弹跳效果
      // this.marker.setAnimation('AMAP_ANIMATION_BOUNCE');

      // let position = this.map.getCenter();
      // let pixel = this.map.lngLatToContainer(position);
      // this.map.on("dragend", (e) => {
      //   // 手指拖动屏幕 执行函数
      //   this.mapTouchMove();
      // });
      // const beer = `<div class="add-marker" style="position: absolute; top:${
      //   pixel.y - 10
      // }px; left:${pixel.x - 10}px;">
      //   </div>`; // 这里的class样式是marker的图标
      // const body_element = document.getElementById("container");
      // body_element.insertAdjacentHTML("beforeend", beer);
    },

    //拖动地图 重新获取经纬度
    mapTouchMove() {
      this.radio = "";
      // 地图 view 中心经纬度 并赋值给变量
      let centerPosition = this.map.getCenter();
      this.shopInfo.lat = centerPosition.lat;
      this.shopInfo.lng = centerPosition.lng;
      // 获取附近位置
      this.aMapSearchNearBy(
        [this.shopInfo.lng, this.shopInfo.lat],
        this.cityName
      );
      // 每次重新定位之后的scrollTop 为 0
      this.scrollToTop();
    },


    // 子组件 搜索事件
    searchChange(searchValue) {
      // 使用高德地图插件
      AMap.plugin("AMap.Autocomplete", () => {
        if (!searchValue) {
          this.aMapSearchNearBy(
            [this.shopInfo.lng, this.shopInfo.lat],
            this.cityName
          );
        }
        this.radio = "";
        let searchOptions = {
          city: this.cityName, //城市名
          input: "complete",
        };
        // 参入设定选项
        this.autoComplete = new AMap.Autocomplete(searchOptions);
        // 监听搜索 searchValue = keyword
        this.autoComplete.search(searchValue, (status, result) => {
          if (result.info == "OK") {
            // 重新将提示列表 清空
            this.nearByList = [];
            //有经纬度才放入数组
            for (let item of result.tips) {
              if (item.location) {
                this.nearByList.push(item);
              }
            }
          }
        });
      });
      this.scrollToTop()
    },
    // 搜索框下面选中地区
    checkedLocal(item, index) {
      // 设置选中项
      this.radio = index;
      //重置经纬度
      this.shopInfo.lat = item.location.lat;
      this.shopInfo.lng = item.location.lng;
      // 重新加载地图
      this.createMap([this.shopInfo.lng, this.shopInfo.lat]);
      //重新监听搜索函数
      // this.aMapSearchLocal();
      this.map.remove(this.marker);
      // 重新加载Marker
      this.initMarker();

    },
    // 返回我的位置
    checkedMeAddress() {
      // 重置数据
      this.shopInfo.lat = this.shopInfoCopy.lat;
      this.shopInfo.lng = this.shopInfoCopy.lng;
      //重新定位
      this.createMap([this.shopInfoCopy.lng, this.shopInfoCopy.lat]);
      this.map.remove(this.marker);
      // 重新加载Marker
      this.initMarker();
      // 重新搜索周边
      this.mapTouchMove();
      //// 每次重新定位之后的scrollTop 为 0
      this.scrollToTop();
    },

  },
  mounted() {
    this.init();
    // console.log(this.GetDistance(30.500543, 114.333623, 30.554609, 114.343786));
  },
};