
<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar
        left-text="取消"
        right-text="确定"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
    </div>
    <div class="map">
      <div id="container"></div>
      <div class="checked" @click="checkedMeAddress">
        <img src="@/assets/images/icon/serve/recovery/checkedme.png" alt />
      </div>
    </div>
    <div class="nearby-list">
      <div class="search">
        <serach placeholdertext="搜索地点" :popup="false" @searchChange="searchChange"></serach>
      </div>
      <div class="nearby-list-res" v-if="nearByList.length">
        <div class="list-wrap">
          <div
            class="item"
            v-for="(item,index) in nearByList"
            :key="index"
            @click="checkedLocal(item, index)"
          >
            <div class="item-name">
              {{item.name}}
              <van-radio-group v-model="radio">
                <van-radio :name="index" checked-color="#c3ab87" icon-size=".3rem"></van-radio>
              </van-radio-group>
            </div>
            <div class="item-info">
              <span class="item-info-adress">{{item.address}}</span>
              <span
                class="distance"
              >{{GetDistance(shopInfoCopy.lat,shopInfoCopy.lng,item.location.lat,item.location.lng)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 地图混入
import mapMixin from "@/mixins/mapMixin.js";
export default {
  mixins: [mapMixin],
  computed: {
    GetDistance() {
      // 计算当前位置距离附近位置 距离
      // 参数 我的经纬度 附近位置经纬度
      return (lat1, lng1, lat2, lng2) => {
        // console.log(111);
        var radLat1 = (lat1 * Math.PI) / 180.0;
        var radLat2 = (lat2 * Math.PI) / 180.0;
        var a = radLat1 - radLat2;
        var b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
        var s =
          2 *
          Math.asin(
            Math.sqrt(
              Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) *
                  Math.cos(radLat2) *
                  Math.pow(Math.sin(b / 2), 2)
            )
          );
        s = s * 6378.137; // EARTH_RADIUS;
        s = parseInt((Math.round(s * 10000) / 10000) * 1000);
        if (s > 1000) {
          s = (s / 1000).toFixed(1);
          return s + "km";
        }
        return s + "m";
      };
    },
  },
  methods:{
    // 高德地图查询周边
    aMapSearchNearBy(centerPoint, city) {
      // 查询附近建筑 回调函数
      AMap.service(["AMap.PlaceSearch"], () => {
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 50, // 每次查询条数
          pageIndex: 1, //第几页
          city: city, //所在城市
        });
        // 参数一： 附近建筑类型 不填默认不过滤
        // 参数二： 当前坐标
        // 参数三： 参训范围
        // 参数四： 回调函数( 查询状态 ， 结果)
        placeSearch.searchNearBy("住宅", centerPoint, 1000, (status, result) => {
          if (result.info === "OK") {
            // var locationList = result.poiList.pois;
            this.nearByList = result.poiList.pois; // 生成地址列表html
            // console.log(locationList);
          } else {
            console.log("获取位置信息失败!");
          }
        });
      });
    },
    showInfoDbClick(){

    },
     // 每次重新定位之后的scrollTop 为 0
    scrollToTop: function() {
      this.$nextTick(() => {
        var container = document.querySelector(".main").querySelector(".nearby-list-res");
        container.scroll(0,0)
      });
    },
    mapClick(e) {
      // console.log(e);
      this.shopInfo.lat = e.lnglat.lat;
      this.shopInfo.lng = e.lnglat.lng;
      this.map.remove(this.marker);
      // 重新加载Marker
      this.initMarker();
      this.mapTouchMove();
      // 重新搜索周边
      this.mapTouchMove();
      //// 每次重新定位之后的scrollTop 为 0
      this.scrollToTop();
    }
  }
};
</script>

<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
    .van-nav-bar {
      /deep/ .van-nav-bar__left {
        i {
          color: #fff;
        }
        .van-nav-bar__text {
          font-size: 0.27rem;
          color: #fff;
        }
      }
      /deep/ .van-nav-bar__right {
        i {
          color: #fff;
        }
        .van-nav-bar__text {
          display: block;
          width: 1.15rem;
          height: 0.6rem;
          background: #c3ab87;
          color: #fff;
          line-height: 0.6rem;
          border-radius: 1rem;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
  }
}
.map {
  height: calc(100vh - 4.6rem);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .checked {
    position: absolute;
    right: 0.4rem;
    bottom: 0.8rem;
    width: 0.9rem;
    height: 0.9rem;
    z-index: 9;
    img {
      width: 100%;
      height: 100%;
    }
  }
  #container {
    height: calc(100vh - 4.6rem) !important;
    /deep/ .amap-logo {
      font-size: 0;
    }
    /deep/ .amap-markers .amap-marker:first .amap-icon {
      width: 0.4rem !important;
        height: 0.72rem !important;
      img {
        width: 0.4rem !important;
        height: 0.72rem !important;
      }
    }
  }
  /deep/ .add-marker {
    width: 0.62rem !important;
    height: 1.2rem !important;
    z-index: 9;
    background: url(../../../../assets/images/icon/serve/recovery/marker.png);
    background-size: 100% 100%;
  }
}
// 下边附近建筑
.nearby-list {
  height: 4.6rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding: 0.3rem 0;
  box-sizing: border-box;
  > .search {
    padding: 0 0.45rem 0.3rem 0.45rem;
    box-sizing: border-box;
  }
  .nearby-list-res {
    max-height: 3.25rem;
    box-sizing: border-box;
    overflow-y: scroll;
    padding-bottom: 0.15rem;
    .item {
      display: flex;
      flex-direction: column;
      padding: 0.1rem 0.45rem;
      box-sizing: border-box;
      .item-name {
        font-size: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item-info {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 0.27rem;
        color: #777;
        .item-info-adress {
          width: 70%;
        }
      }
    }
  }
}
</style>