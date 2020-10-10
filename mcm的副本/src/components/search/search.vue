<template>
  <div class="search">
    <van-popup v-model="show"
               closeable
               position="top left"
               :style="{ height: 'auto',borderBox:'box-sizing' }">
      <div class="content">
        <van-search v-model="value"
                    shape="round"
                    :placeholder="placeholdertext"
                    style="padding:.2rem;width:100%;background-color:transparent">
          <template v-slot:label>
            <div class="search-menu">
              <span>资讯</span>
              <van-icon name="arrow-down"
                        size=".2rem" />
            </div>
          </template>
          <template v-slot:left-icon>
            <div class="action">
              <img src="@/assets/images/icon/index/search.png"
                   alt />
            </div>
          </template>
        </van-search>

        <div class="menu">
          <div class="menu-title">
            <span :class="active==1?'active':''"
                  @click="forwardAdress(1)">分类</span>
            <span :class="active==2?'active':''"
                  @click="forwardAdress(2)">区域</span>
            <span :class="active==3?'active':''"
                  @click="forwardAdress(3)">排序</span>
            <span :class="active==4?'active':''"
                  @click="forwardAdress(4)">筛选</span>
          </div>
          <div class="set-menu">
            <!-- 分类 -->
            <van-cell-group v-if="active == 1">
              <van-cell title="美食">
                <template #default>
                  <van-icon name="arrow"
                            size=".26rem" />
                </template>
              </van-cell>
              <van-cell title="娱乐">
                <template #default>
                  <van-icon name="arrow"
                            size=".26rem" />
                </template>
              </van-cell>
              <van-cell title="时尚">
                <template #default>
                  <van-icon name="arrow"
                            size=".26rem" />
                </template>
              </van-cell>
              <van-cell title="服饰">
                <template #default>
                  <van-icon name="arrow"
                            size=".26rem" />
                </template>
              </van-cell>
              <van-cell title="美妆">
                <template #default>
                  <van-icon name="arrow"
                            size=".26rem" />
                </template>
              </van-cell>
            </van-cell-group>

            <!-- 区域 -->
            <div class="area"
                 v-if="active == 2">
              <div class="title">
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
                <div class="county"
                     v-if="adressCheckIndex == 1">
                  <div @click="checkedCounty(item,index)"
                       :class="index == checkedCountyIndex ? 'active':''"
                       v-for="(item,index) in county"
                       :key="index">{{item.name}}</div>
                </div>
                <div class="country"
                     v-if="adressCheckIndex < 1">
                  <div @click="checkedCountry(item,index)"
                       :class="index == checkedCountryIndex ? 'active':''"
                       v-for="(item,index) in country"
                       :key="index">{{item | filterEmpty}}</div>
                </div>
              </div>
            </div>

            <!-- 排序 -->
            <van-cell-group v-if="active == 3">
              <van-cell title="热点" />
              <van-cell title="榜单" />
              <van-cell title="红人" />
              <van-cell title="服饰" />
              <van-cell title="收藏" />
            </van-cell-group>

            <!-- 筛选 -->
            <van-cell-group v-if="active == 4">
              <van-cell title="搞笑" />
              <van-cell title="情感" />
              <van-cell title="电竞" />
              <van-cell title="美女" />
              <van-cell title="财经" />
              <van-cell title="科技" />
              <van-cell title="城市" />
              <van-cell title="更多" />
            </van-cell-group>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 默认搜索 -->
    <van-search shape="round"
                v-model="value"
                :placeholder="placeholdertext"
                @focus="showPopup"
                @input="searchFun"
                style="padding:0;width:100%;background-color:transparent">
      <template v-slot:label>
        <div class="adress"
             @click="changeAddressStatus">
          <slot name="left"></slot>
        </div>
      </template>
      <template v-slot:left-icon>
        <div class="action">
          <slot name="left-icon">
            <img src="@/assets/images/icon/index/search.png"
                 alt />
          </slot>
        </div>
      </template>
      <template v-slot:right-icon>
        <div class="action">
          <slot name="right"></slot>
        </div>
      </template>
    </van-search>
    <keep-alive>
      <popup :show="adressShow"
             @showAddress="showAddress"
             @changeAdressVal="changeAdressVal"></popup>
    </keep-alive>
  </div>
</template>

<script>
import popup from "@/components/adressPopup/popup"; //选择地区弹窗
export default {
  components: {
    popup,
  },
  props: {
    placeholdertext: {
      type: String,
      default: "请输入关键字",
    },
    popup: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      value: "",
      show: false,
      className: "my-class",
      active: 1,
      activeId: 1,
      activeIndex: 0,
      items: [
        {
          text: "工业区",
          id: 1,
          children: [
            { text: "工业区1", id: "1-1" },
            { text: "工业区2", id: "1-2" },
            { text: "工业区3", id: "1-3" },
            { text: "工业区4", id: "1-4" },
          ],
        },
        {
          text: "高新区",
          id: 2,
          children: [
            { text: "高新区1", id: "2-1" },
            { text: "高新区2", id: "2-2" },
            { text: "高新区3", id: "2-3" },
            { text: "高新区4", id: "2-4" },
          ],
        },
        {
          text: "五中区",
          id: 3,
          children: [
            { text: "五中区1", id: "3-1" },
            { text: "五中区2", id: "3-2" },
            { text: "五中区3", id: "3-3" },
            { text: "五中区4", id: "3-4" },
          ],
        },
        {
          text: "白城区",
          id: 4,
          children: [
            { text: "白城区1", id: "4-1" },
            { text: "白城区2", id: "4-2" },
            { text: "白城区3", id: "4-3" },
            { text: "白城区4", id: "4-4" },
          ],
        },
      ],
      adressShow: false,
      // 存放 省 市 区 镇 数据
      county: [],
      country: [],

      //选中下标
      checkedCountyIndex: null,
      checkedCountryIndex: null,

      //展示文字
      countyText: "请选择区/县",
      countryText: "请选择乡镇",
      adressCheckIndex: 1,
      pid: null,
    };
  },
  watch: {
    show: function (val) {
      if (!val) {
        let timer = setTimeout(() => {
          this.county = [];
          this.country = [];

          //选中下标
          this.checkedCountyIndex = null;
          this.checkedCountryIndex = null;

          //展示文字
          this.countyText = "请选择区/县";
          this.countryText = "请选择乡镇";
          this.adressCheckIndex = 1;
          clearTimeout(timer);
        }, 500);
      } else {
        this.judgeChenckedAddress(this.active);
      }
    },
  },
  filters: {
    filterEmpty (item) {
      console.log(typeof item);
      if (typeof item == "object") {
        return item.name;
      } else {
        return item;
      }
    },
  },
  methods: {
    init () {
      this.getData();
    },

    // 搜索事件
    searchFun () {
      this.$emit("searchChange", this.value);
    },

    //判断是否选择地区
    judgeChenckedAddress (index) {
      if (index == 2) {
        this.pid =
          localStorage.getItem("_M_City_Id") ||
            localStorage.getItem("_M_City_Id") != "undefined"
            ? localStorage.getItem("_M_City_Id")
            : null;
        this.cityText =
          localStorage.getItem("adressText") ||
            localStorage.getItem("adressText") != "undefined"
            ? localStorage.getItem("adressText").split("·")[0]
            : null;
        if (this.pid == null || this.cityText == null) {
          this.$toast.fail("请先选择当前城市");
          return false;
        }
        this.active = index;
        this.init();
        return true;
      } else {
        this.active = index;
      }
    },

    changeAddressStatus () {
      this.adressShow = true;
    },
    showAddress (bol) {
      this.adressShow = bol;
    },
    // 获取数据
    getData () {
      console.log(this.pid);
      this.$api.index
        .getAdressLocalList({
          pid: this.pid,
        })
        .then((res) => {
          this.county = res;
        });
    },

    // 改变title 时需要把后边的adresslist 清空
    changeTitle (index) {
      if (index <= this.adressCheckIndex) return;
      if (index == 1) {
        this.adressCheckIndex = 1;
        // 选中项为空
        this.checkedCountyIndex = null;
        this.countyText = "请选择区/县";
      }
      this.country = [];
      this.checkedCountryIndex = null;
      this.countryText = "请选择乡镇";
    },

    // 区县选中
    checkedCounty (item, index) {
      // 清空数组防止重复添加
      this.country = [];

      // 设置当前选中项
      this.checkedCountyIndex = index;
      this.adressCheckIndex = 0;
      this.countyText = item.name;
      // 选中项为空
      this.checkedCountryIndex = null;
      localStorage.setItem(
        "checkedIndexForAdress",
        this.checkedProvinceIndex +
        "" +
        this.checkedCityIndex +
        "" +
        this.checkedCountyIndex
      );
      this.$api.index
        .getCountryLocalList({
          area_id: item.id,
          city: this.cityText,
          area: item.name,
        })
        .then((res) => {
          console.log(res);
          this.country = res["全区"];
        });
    },

    //乡镇选中
    checkedCountry (item, index) {
      this.show = false;
      this.adressCheckIndex = -1;
      this.checkedCountryIndex = index;
      this.countryText = item.name;
      let adressText =
        this.city[this.checkedCityIndex].name +
        "·" +
        this.county[this.checkedCountyIndex].name;
      localStorage.setItem("_M_Address_Text", adressText);

      // 设置接到cookie
      let days = 7;
      let exp = new Date();
      exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie =
        "bianma=" + escape(item.bianma) + ";expires=" + exp.toGMTString();
      this.changeAddressStatus(this.adressText);
    },
    changeAdressVal (val) {
      // 地区改变
      this.$emit("adressChange", val);
    },
    forwardAdress (index) {
      this.judgeChenckedAddress(index);
    },
    onNavClick (data) {
      console.log(data);
    },
    //
    showPopup () {
      if (this.popup) {
        this.show = true;
      }
    },
  },
};
</script>

<style scoped lang="less">
.area {
  font-size: 0.28rem;
  .title {
    display: flex;
    justify-content: flex-start;

    padding: 0.2rem 0.45rem;
    div {
      position: relative;
      margin-right: 0.6rem;
    }
    span {
      font-size: 0.28rem;
      max-width: 1.65rem;
      // display: -webkit-box;
      // overflow: hidden;
      // -webkit-line-clamp: 1;
      // -webkit-box-orient: vertical;
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

.van-search {
  /deep/ .van-search__content--round {
    height: 0.72rem;
    align-items: center;
  }
  /deep/ .van-field__body {
    /deep/ input {
      font-size: 0.28rem;
    }
  }
  /deep/ .van-search__content {
    background: #f7f7f7;
  }
  /deep/ .van-field__left-icon {
    .van-icon {
      font-size: 0.33rem;
    }
  }
  .van-cell {
    align-items: center;
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