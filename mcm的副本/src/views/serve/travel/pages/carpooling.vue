<template>
  <div class="wrapper">
    <div class="map">
      <div class="map-view" id="container"></div>
      <div class="map-footer">
        <div class="map-footer-header">
          <div class="m-f-h-left">
            <img src="@/assets/images/icon/serve/travel/security.png" alt />
            <span>安全中心</span>
          </div>
          <div class="m-f-h-right" @click="checkedMeAddress">
            <img src="@/assets/images/icon/serve/recovery/checkedme.png" alt />
          </div>
        </div>
        <div class="map-footer-tip">
          <img src="@/assets/images/icon/serve/travel/laba.png" alt />
          <span>上下班坐拼车 天天省钱 勾选“接受拼车”拼成6折起</span>
          <div>点击详情</div>
        </div>
        <div class="map-footer-content">
          <div class="m-f-c-btn-top">
            <div class="active">现在</div>
            <div>预约</div>
            <div>接送机</div>
          </div>
          <div class="m-f-c-now-address">
            <div class="address-tip"></div>
            <div class="m-f-c-center">
              <p>电子科技-公交站</p>
              <span>"电子科技-公交站"附近最佳的上车点</span>
            </div>
          </div>
          <div class="m-f-c-form">
            <div class="m-f-c-from-left">
              <div class="from-tip"></div>
              <div class="m-f-c-from-center">您要去哪儿</div>
              <div class="from-tip-text">
                去：狮子山-地铁站
                <van-icon name="cross" color="#fff" size=".32rem" />
              </div>
            </div>
            <div class="spaek">
              <img src="@/assets/images/icon/serve/travel/mai.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapMixin from "@/mixins/mapMixin.js";
export default {
  mixins: [mapMixin],
  data() {
    return {
      markerIcon: require("@/assets/images/icon/serve/travel/addres-t.png"),
      markerIconAddress: require("@/assets/images/icon/serve/travel/marker.png"),
      markerUser: null,
      markerAddress: null,
    };
  },
  methods: {
    aMapSearchNearBy() {},
    scrollToTop() {},
    // 初始化函数
    init() {
      // console.log(this.shopInfo);
      // 初始化地图
      this.createMap([this.shopInfo.lng, this.shopInfo.lat]);
      // 初始化自定义坐标
      // this.initMarker();
      this.initMarkerByMe();
      // 获取附近位置
      // 传入 当前经纬度  城市名称
      this.aMapSearchNearBy(
        [this.shopInfoCopy.lng, this.shopInfo.lat],
        this.cityName
      );
    },
    // 初始化 marker
    initMarkerByMe() {
      // 将 icon 传入 marker
      console.log(this.shopInfo);
      this.markerUser = new AMap.Marker({
        position: new AMap.LngLat(this.shopInfoCopy.lng, this.shopInfoCopy.lat),
        icon: new AMap.Icon({
          // 图标尺寸
          // 图标的取图地址
          image: this.markerIcon,
          // 图标所用图片大小
          imageSize: new AMap.Size(20, 40),
        }),
        offset: new AMap.Pixel(-13, -30),
      });
      this.map.add(this.markerUser);
    },
    // 初始化 marker
    initMarker() {
      // 将 icon 传入 marker
      console.log(this.shopInfo);
      this.markerAddress = new AMap.Marker({
        position: new AMap.LngLat(this.shopInfo.lng, this.shopInfo.lat),
        icon: new AMap.Icon({
          // 图标尺寸
          // 图标的取图地址
          image: this.markerIconAddress,
          // 图标所用图片大小
          imageSize: new AMap.Size(20, 60),
        }),
        offset: new AMap.Pixel(-13, -30),
      });
      this.map.add(this.markerAddress);
    },
    mapClick(e) {
      // console.log(e);
      this.shopInfo.lat = e.lnglat.lat;
      this.shopInfo.lng = e.lnglat.lng;
      if (this.markerAddress != null) {
        this.map.remove(this.markerAddress);
      }
      // 重新加载Marker
      this.initMarker();

      this.mapTouchMove();
    },
    // 返回我的位置
    checkedMeAddress() {
      // 重置数据
      this.shopInfo.lat = this.shopInfoCopy.lat;
      this.shopInfo.lng = this.shopInfoCopy.lng;
      //重新定位
      this.init();
      this.map.remove(this.markerAddress);
    },
    showInfoDbClick(e) {
      console.log(1,e);
      if (this.markerAddress != null) {
        this.map.remove(this.markerAddress);
      }
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  height: calc(100vh - 2.471rem);
  position: relative;
  background: skyblue;
  .map {
    position: absolute;
    top: 0;
    bottom: 0.2rem;
    left: 0;
    right: 0;
    .map-footer {
      position: absolute;
      left: 0.2rem;
      right: 0.2rem;
      bottom: 0;
      .map-footer-content {
        background: #fff;
        border-radius: 0.04rem;
        padding: 0.3rem;
        padding-bottom: 0.1rem;
        .m-f-c-form {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .m-f-c-from-left {
            display: flex;
            align-items: center;
            .from-tip {
              width: 0.16rem;
              min-width: 0.16rem;
              margin-right: 0.2rem;
              height: 0.16rem;
              border-radius: 100%;
              background: #6e707c;
            }
          }
          img {
            width: 0.27rem;
          }
          .m-f-c-from-center {
            font-size: 0.27rem;
            color: #777;
          }
          .from-tip-text {
            margin-left: 0.2rem;
            width: 2.98rem;
            height: 0.77rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.24rem;
            background: url(../../../../assets/images/icon/serve/travel/dialog.png);
            background-size: 100% 100%;
            box-sizing: border-box;
            padding: 0 0.1rem 0 0.3rem;
            color: #fff;
          }
        }
        .m-f-c-now-address {
          margin: 0.2rem 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          p {
            font-size: 0.27rem;
            display: block;
          }
          span {
            font-size: 0.24rem;
            display: block;
            color: #777;
          }
          .address-tip {
            width: 0.16rem;
            min-width: 0.16rem;
            margin-right: 0.2rem;
            height: 0.16rem;
            border-radius: 100%;
            background: #c3ab87;
          }
        }
        .m-f-c-btn-top {
          display: flex;
          justify-content: flex-start;
          margin-left: 0.8rem;
          div {
            padding: 0.1rem 0.17rem;
            font-size: 0.24rem;
            border-radius: 1rem;
            color: #777;
            margin: 0 0.15rem;
          }
          .active {
            border: 1px solid;
            color: #c3ab87;
            border-color: #c3ab87;
          }
        }
      }
      .map-footer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          width: 0.66rem;
          height: 0.66rem;
        }
        .m-f-h-left {
          width: 2.14rem;
          height: 0.77rem;
          display: flex;
          align-items: center;
          color: #777;
          background: #f5f2ec;
          margin-left: 0.1rem;
          border-radius: 0.14rem;
          span {
            font-size: 0.27rem;
            margin-left: 0.2rem;
          }
          img {
            margin-left: -0.1rem;
          }
        }
        .m-f-h-right {
        }
      }
      .map-footer-tip {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem 0;
        font-size: 0.24rem;
        box-sizing: border-box;
        padding: 0.2rem;
        background: #fff;
        border-radius: 0.04rem;
        span {
          margin: 0 0.27rem;
        }
        img {
          width: 0.66rem;
          height: 0.66rem;
        }
        div {
          width: 1.3rem;
          min-width: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          height: 0.57rem;
          border: 1px solid #c3ab87;
          color: #c3ab87;
        }
      }
    }
  }
  #container {
    height: calc(100vh - 2.471rem);
    /deep/ .amap-copyright,
    /deep/ .amap-logo {
      display: none !important;
    }
    /deep/ .add-marker {
      width: 0.35rem !important;
      height: 0.43rem !important;
      z-index: 9;
      background: url(../../../../assets/images/icon/serve/travel/addres-t.png);
      background-size: 100% 100%;
    }

    /deep/ .amap-markers .amap-marker:last-child .amap-icon {
      width: 0.4rem !important;
      height: 0.72rem !important;
      img {
        width: 0.4rem !important;
        height: 0.72rem !important;
      }
    }
    /deep/ .amap-markers .amap-marker:first-child .amap-icon {
      width: 0.4rem !important;
      height: 0.48rem !important;
      overflow: visible !important;
      img {
        width: 0.4rem !important;
        height: 0.48rem !important;
        z-index: 9;
      }
    }
    /deep/ .amap-markers .amap-marker:first-child .amap-icon {
      &::after {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        content: "";
        position: absolute;
        z-index: -2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(212, 214, 194, 0.363);
      }
    }
    
  }
}
</style>