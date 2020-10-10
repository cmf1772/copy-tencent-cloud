<template>
  <div class="main">
    <van-popup v-model="showPopup"
               closeable
               position="top left"
               @close="hidePopup"
               :style="{ height: 'auto',borderBox:'box-sizing' }">
      <div class="content">
        <div class="menu">
          <div class="set-menu">
            <!-- 区域 -->
            <div class="area">
              <div class="title">
                <div :class="adressCheckIndex < 4 ? adressCheckIndex == 3?'indexnow ':'active':''"
                     @click="changeTitle(3)">
                  <span>{{provinceText}}</span>
                </div>
                <div :class="adressCheckIndex < 3 ? adressCheckIndex == 2?'indexnow ':'active':''"
                     @click="changeTitle(2)">
                  <span>{{cityText}}</span>
                </div>
                <div :class="adressCheckIndex < 2 ? adressCheckIndex == 1?'indexnow ':'active':''"
                     @click="changeTitle(1)">
                  <span>{{countyText}}</span>
                </div>
                <div :class="adressCheckIndex < 1 ? adressCheckIndex == 0?'indexnow ':'active':''"
                     @click="changeTitle(0)">
                  <span>{{countryText}}</span>
                </div>
              </div>
              <div class="area-list">
                <div class="province"
                     v-if="adressCheckIndex == 3">
                  <div @click="checkedProvince(item,index)"
                       :class="index == checkedProvinceIndex ? 'active':''"
                       v-for="(item,index) in province"
                       :key="index">{{item.name}}</div>
                </div>
                <div class="city"
                     v-if="adressCheckIndex == 2">
                  <div @click="checkedCity(item,index)"
                       :class="index == checkedCityIndex ? 'active':''"
                       v-for="(item,index) in city"
                       :key="index">{{item.name}}</div>
                </div>
                <div class="county"
                     v-if="adressCheckIndex == 1">
                  <div @click="checkedCounty(null,null)">全城</div>
                  <div @click="checkedCounty(item,index)"
                       :class="index == checkedCountyIndex ? 'active':''"
                       v-for="(item,index) in county"
                       :key="index">{{item.name}}</div>
                </div>
                <div class="country"
                     v-if="adressCheckIndex < 1">
                  <div @click="checkedCountry(null,null)">全区</div>
                  <div @click="checkedCountry(item,index)"
                       :class="index == checkedCountryIndex ? 'active':''"
                       v-for="(item,index) in country"
                       :key="index">{{item | filterEmpty}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    show: false
  },
  data () {
    return {
      // 存放 省 市 区 镇 数据
      province: [],
      city: [],
      county: [],
      country: [],
      //选中下标
      checkedProvinceIndex: null,
      checkedCityIndex: null,
      checkedCountyIndex: null,
      checkedCountryIndex: null,
      //展示文字
      provinceText: "请选择省",
      cityText: "请选择市",
      countyText: "请选择区/县",
      countryText: "请选择乡镇",
      adressCheckIndex: 3,
      //将 父组件传入的 布尔值保存
      showPopup: false
    };
  },
  watch: {
    // 监听父组件 show 的值
    show (val) {
      // 设置当前的显示弹出框的布尔值
      this.showPopup = val;
      //如果为真 请求 地区数据
      if (val) {
        this.init();
      }
    }
  },

  // 过滤器
  filters: {
    //过滤空元素
    filterEmpty (item) {
      console.log(item);
      // 参数是对象就 使用name
      if (typeof item == "object") {
        return item.name;
        // 否则将空值返回回去
      } else {
        return item;
      }
    }
  },
  methods: {
    // 初始化函数
    init () {
      // 获取数据
      this.getData();
    },
    hidePopup () {
      // 弹出层隐藏
      // 向父组件发送事件
      // 重置数据 keep-alive
      // 使用 event loop 防止突然跳回
      this.$emit("showAddress", false);
      let timer = setTimeout(() => {
        //清空保存数据的数组
        this.province = [];
        this.city = [];
        this.county = [];
        this.country = [];
        //选中下标
        this.checkedProvinceIndex = null;
        this.checkedCityIndex = null;
        this.checkedCountyIndex = null;
        this.checkedCountryIndex = null;
        //展示文字
        this.provinceText = "请选择省";
        this.cityText = "请选择市";
        this.countyText = "请选择区/县";
        this.countryText = "请选择乡镇";
        this.adressCheckIndex = 3;
        //清除定时器
        clearTimeout(timer);
      }, 500);
    },
    // 获取数据
    getData () {
      this.$api.index
        .getAdressLocalList({
          pid: 0
        })
        .then(res => {
          this.province = res;
        });
    },

    // 改变title 时需要把后边的adresslist 清空
    changeTitle (index) {
      // 当没选中父级不能选择子级
      if (index <= this.adressCheckIndex) return;
      //重置省份
      if (index == 3) {
        this.city = [];
        this.county = [];
        this.checkedCityIndex = null;
        this.checkedCountyIndex = null;
        this.adressCheckIndex = 3;
        this.cityText = "请选择市";
        this.countyText = "请选择区/县";

        //重置城市
      } else if (index == 2) {
        this.county = [];
        this.adressCheckIndex = 2;
        // 选中项为空
        this.checkedCountyIndex = null;
        this.countyText = "请选择区/县";

        //重置区县
      } else {
        this.adressCheckIndex = 1;
      }

      // 重置乡镇
      this.country = [];
      this.checkedCountryIndex = null;
      this.countryText = "请选择乡镇";
    },

    // 省份选中
    checkedProvince (item, index) {
      this.$emit('returnAddress', 'province', item)
      // 清空数组防止重复添加
      this.city = [];
      this.county = [];
      this.country = [];
      this.provinceText = item.name;
      // 选中项为空
      this.checkedCityIndex = null;
      this.checkedCountyIndex = null;
      this.checkedCountryIndex = null;
      // 设置当前选中项
      this.checkedProvinceIndex = index;
      this.adressCheckIndex = 2;
      //请求子级数据
      this.$api.index
        .getAdressLocalList({
          pid: item.id
        })
        .then(res => {
          this.city = res;
        });
    },

    // //城市选中
    checkedCity (item, index) {
      this.$emit('returnAddress', 'city', item)
      // 清空数组防止重复添加
      this.county = [];
      this.country = [];
      this.cityText = item.name;
      // 设置当前选中项
      this.checkedCityIndex = index;
      this.adressCheckIndex = 1;
      // 选中项为空
      this.checkedCountyIndex = null;
      this.checkedCountryIndex = null;
      //请求子级数据
      this.$api.index
        .getAdressLocalList({
          pid: item.id
        })
        .then(res => {
          this.county = res;
        });
      //设置城市名 方便之后选择区域使用
      localStorage.setItem("m_city_id", item.id);
    },

    // 区县选中
    checkedCounty (item, index) {
      this.$emit('returnAddress', 'area', item)
      //判断是否选择的全区
      if (item == null && index == null) {
        let adressText = this.city[this.checkedCityIndex].name + "·全城";

        // 选择全区 不继续向下进行
        localStorage.setItem("adressText", adressText);
        this.showPopup = false;
        // this.setCookie(item.bianma);
        this.changeAdressVal(adressText);
        return;
      }
      // 清空数组防止重复添加
      this.country = [];

      // 设置当前选中项
      this.checkedCountyIndex = index;
      this.adressCheckIndex = 0;
      this.countyText = item.name;
      // 选中项为空
      this.checkedCountryIndex = null;

      //设置当前选中城市
      localStorage.setItem(
        "checkedIndexForAdress",
        this.checkedProvinceIndex +
        "" +
        this.checkedCityIndex +
        "" +
        this.checkedCountyIndex
      );

      //请求子级数据
      this.$api.index
        .getCountryLocalList({
          area_id: item.id,
          city: this.cityText,
          area: item.name
        })
        .then(res => {
          console.log(res);
          this.country = res["全区"];
        });
    },

    //乡镇选中
    checkedCountry (item, index) {
      let adressText = "";
      if (item == null && index == null) {
        adressText =
          this.city[this.checkedCityIndex].name +
          "·" +
          this.county[this.checkedCountyIndex].name;
        this.setCookie(this.county[this.checkedCountyIndex].bianma);
        this.countryText = "全区";
      } else {
        adressText =
          this.city[this.checkedCityIndex].name +
          "·" +
          item.name.replace("街道", "").replace("办事处", "");
        this.countryText = item.name;
      }
      this.adressCheckIndex = -1;
      this.checkedCountryIndex = index;
      localStorage.setItem("adressText", adressText);
      this.showPopup = false;
      this.changeAdressVal(adressText);
    },
    changeAdressVal (val) {
      // 地区改变
      this.$emit("changeAdressVal", val);
    },
    forwardAdress (index) {
      this.active = index;
    },
    setCookie (value) {
      // 设置接到cookie
      let days = 7;
      let exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie =
        "bianma=" + escape(value) + ";expires=" + exp.toGMTString();
    }
  }
};
</script>

<style scoped lang="less">
.area {
  font-size: 0.28rem;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.45rem;
    div {
      position: relative;
    }
    span {
      font-size: 0.28rem;
      max-width: 1.65rem;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .active {
      color: #c3ab87;
    }
    .indexnow {
      span {
        &::after {
          content: "";
          position: absolute;
          width: 0.5rem;
          height: 0.05rem;
          background: #c3ab87;
          bottom: -0.1rem;
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
    }
  }
  .area-list {
    display: flex;
    justify-content: space-between;

    > div {
      width: 25%;
      max-height: 50vh;
      min-height: 50vh;
      overflow: scroll;
      flex: 1;
      text-align: left;
      .active {
        color: #c3ab87;
        // border-left: #c3ab87 0.09rem solid;
      }
    }
    > div div {
      padding: 0.3rem 0;
      position: relative;
      box-sizing: border-box;
      padding-right: 0.2rem;
      padding-left: 0.45rem;
    }
  }
}
.search-menu {
  display: flex;
  align-items: center;
  .van-icon {
    padding: 0 0.05rem;
  }
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 49px;
  border-radius: 25px;
  background: #f7f7f7;
}
.search-box {
  flex: 1;
}
.van-search {
  /deep/ .action {
    img {
      width: 0.3rem;
    }
  }
}
.adress {
  min-width: 50px;
  text-align: center;
}
.adress:empty {
  min-width: 0;
  padding-right: 0;
}
.adress {
  font-size: 0.28rem;
  padding-right: 0.2rem;
  position: relative;
  &::after {
    content: "";
    height: 60%;
    background: #eaeaea;
    width: 1px;
    position: absolute;
    right: -0rem;
    top: 50%;
    transform: translate(0, -50%);
  }
}

.content {
  margin-top: 40px;
}
.menu {
  .van-cell {
    padding: 0.3rem 0.45rem;
  }
  .van-sidebar-item {
    padding-left: 0.36rem;

    border-left: 0.09rem solid transparent;
  }
  .van-tree-select__nav .van-sidebar-item--select {
    border-color: #c3ab87;
    background-color: #f7f7f7;

    border-color: #c3ab87;
  }

  .van-tree-select__item {
    font-weight: inherit;
  }
  .van-tree-select__content {
    background: #f7f7f7;
  }
  .van-tree-select__nav {
    background: #fff;
    a {
      background-color: #fff;
    }
  }
  .menu-title {
    margin-top: 0.2rem;
    padding: 0 0.45rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.28rem;
    color: #ccc;
    .active {
      color: #000;
    }
  }
}
.set-menu {
  padding: 0.2rem 0 0 0;
  .van-cell__value {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>