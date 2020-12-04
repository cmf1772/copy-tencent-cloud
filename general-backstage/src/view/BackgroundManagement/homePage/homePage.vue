<template>
  <div class="pageHome">
    <div class="title">
      <span class="hovertext"> <i class="el-icon-message-solid"
           style="color:#00a4ff"></i> 消息提示：您有（<span style="color: #f30">3</span>）条新消息</span>
    </div>
    <div class="hyzx-card-col">
      <div class="hyzx-card-1">
        <div class="img">
          <el-image>
            <div slot="error"
                 class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <div class="mess">
          <ul>
            <li>
              <strong style="font-size: 16px">您好，谁谁谁</strong>
              {{LocationProvince}} - {{LocationCity}}
            </li>
            <li>积分购买商家信用：<strong style="color:#f30">0</strong> 买家信用：<strong style="color:#f30">0</strong></li>
            <li>商铺类型：<strong style="color:#f30">销售型</strong> </li>
            <li>商铺等级：旗舰商铺 特权：
              <el-tooltip class="item"
                          style="color: #409eff;cursor: pointer;"
                          effect="dark"
                          placement="top-start">
                <div slot="content">可上传商品数量：10000个<br />图片空间：5000M <br />可使用模板：10000个 <br /> 可添加页面数量：22个</div>
                <span>详情</span>
              </el-tooltip>
            </li>
            <li>到期时间：<strong style="color:#f30">2016-11-10</strong> 商铺到期不续费，将自动降级至免费商铺</li>
          </ul>
        </div>
      </div>

      <div class="hyzx-card-3">
        <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">交易提醒：</p>
        <ul>
          <li class="hovertext">等待买家付款(13)</li>
          <li class="hovertext">等待您发货 <span style="color:#f30">（4）</span></li>
          <li class="hovertext">退款中的商品 <span style="color:#f30">（4）</span></li>
          <li class="hovertext">等待您评价 <span style="color:#f30">（4）</span></li>
        </ul>
      </div>

      <div class="hyzx-card-2">
        <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">商品提醒：</p>
        <ul>
          <span>商品管理：</span>
          <li class="hovertext">等待买家付款(13)</li>
          <li class="hovertext">等待您发货 </li>
          <li class="hovertext">等待您发货 </li>
          <li class="hovertext">退款中的商品 </li>
          <li class="hovertext">等待您评价 </li>
        </ul>
        <ul>
          <span>广告推荐：</span>
          <li class="hovertext">等待买家付款(13)</li>
          <li class="hovertext">等待您发货 </li>
          <li class="hovertext">等待您发货 </li>
        </ul>
        <ul>
          <span>商品留言：</span>
          <li class="hovertext">等待买家付款(13)</li>
          <li class="hovertext">等待您发货 </li>
          <li class="hovertext">等待您发货 </li>
          <li class="hovertext">退款中的商品 </li>
          <li class="hovertext">等待您评价12312312 </li>
        </ul>
      </div>

    </div>

    <div class="console-card-col2">
      <div>
        <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">认证专区：</p>
        <div class="b-c-con">
          <div class="img">
            <i class="el-icon-s-home"></i>
          </div>
          <ul>
            <li>认证等级：旗舰商铺</li>
            <li>
              <span>商家的服务态度：</span>
              <el-rate v-model="value"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
              </el-rate>
            </li>
            <li>
              <span>商家发货的速度：</span>
              <el-rate v-model="value"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
              </el-rate>
            </li>
            <li>
              <span>商品与描述相符：</span>
              <el-rate v-model="value"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="{value}">
              </el-rate>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">店铺升级：</p>
        <div style="margin-top: 20px;">
          您当前店铺为：普通店铺，<span class="hovertext"
                style="color: #409eff">点此升级</span>
        </div>
        <div style="margin-top: 20px">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            马上申请
          </el-button>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            积分购买
          </el-button>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            商铺续费
          </el-button>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            我的商铺
          </el-button>
        </div>
      </div>
    </div>

    <div class="banner">
      <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">您可能还需要以下产品开始：</p>
    </div>
    <div class="swiper-banner">
      <!-- :autoplay="false" -->
      <el-carousel height="220px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <div class="swiper-banner-item">
            <i class="el-icon-odometer">快云SSL</i>
            <p>HTTPS保障您的网站数据安全！<span style="color: #409eff"
                    class="hovertext">详情</span></p>
            <span style="color: #409eff"
                  class="hovertext">立即选购> </span>
          </div>
          <div class="swiper-banner-item">
            <i class="el-icon-odometer">快云SSL</i>
            <p>HTTPS保障您的网站数据安全！<span style="color: #409eff"
                    class="hovertext">详情</span></p>
            <span style="color: #409eff"
                  class="hovertext">立即选购> </span>
          </div>
          <div class="swiper-banner-item">
            <i class="el-icon-odometer">快云SSL</i>
            <p>HTTPS保障您的网站数据安全！<span style="color: #409eff"
                    class="hovertext">详情</span></p>
            <span style="color: #409eff"
                  class="hovertext">立即选购> </span>
          </div>
          <div class="swiper-banner-item">
            <i class="el-icon-odometer">快云SSL</i>
            <p>HTTPS保障您的网站数据安全！<span style="color: #409eff"
                    class="hovertext">详情</span></p>
            <span style="color: #409eff"
                  class="hovertext">立即选购> </span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home page',
  data () {
    return {
      LocationProvince: "正在定位所在省",    //给渲染层定义一个初始值
      LocationCity: "正在定位所在市",    //给渲染层定义一个初始值
      value: '3.3'
    }
  },
  methods: {
    city () {    //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this
      geolocation.getCurrentPosition(function getinfo (position) {
        let city = position.address.city;             //获取城市信息
        let province = position.address.province;     //获取省份信息
        _this.LocationProvince = province
        _this.LocationCity = city
      }, function (e) {
        _this.LocationCity = "定位失败"
      }, { provider: 'baidu' });
    },

    getInfo () {
      this.$api.getMusicList().then(res => {
        console.log(res)
      }).catch(res => {
        console.log(res)
      })
    }
  },

  mounted () {
    this.city()
    this.getInfo()
  }
}
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.pageHome {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: 30px;
    margin-top: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
  }
  .swiper-banner {
    width: 100%;
    height: 230px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .el-carousel__item {
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 20px;
      .swiper-banner-item {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 23%;
        // align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 20px;
        > i {
          height: 25px;
          line-height: 30px;
          font-size: 17px;
          color: #333;
        }

        > p {
          height: 100px;
          position: relative;
          box-sizing: border-box;
          padding-top: 22px;
          padding-bottom: 22px;
        }
      }
      .swiper-banner-item:hover {
        background: #eee;
      }
    }
  }

  .hyzx-card-col {
    width: 100%;
    height: 231px;
    display: flex;
    justify-content: space-between;
    > div {
      width: 32.5%;
      border-radius: 10px;
      background-color: #fff;
      height: 231px;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      font-size: 10px;
    }
    .hyzx-card-3 {
      display: flex;
      flex-direction: column;
      font-size: 12px;

      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        li {
          margin-right: 10px;
          line-height: 35px;
        }
      }
    }
    .hyzx-card-1 {
      .img {
        width: 50px;
        margin-right: 20px;
        > img {
          width: 50px;
        }
        .el-image {
          font-size: 50px;
        }
      }
      .mess {
        flex: 1;
        > ul {
          width: 100%;
          li {
            line-height: 35px;
          }
        }
      }
    }
    .hyzx-card-2 {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        line-height: 30px;
        li {
          margin-right: 10px;
          color: #333;
          text-decoration: none;
        }
        > span {
          margin-right: 15px;
          color: #8f9297;
          font-weight: bold;
        }
      }
    }
  }

  .console-card-col2 {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: #fff;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    > div {
      flex: 1;
    }
    .b-c-con {
      display: flex;
      margin-top: 10px;
      height: 130px;
      align-items: center;

      .img {
        width: 130px;
        height: 98px;
        > i {
          font-size: 100px;
        }
      }
      > ul {
        width: 100%;
        margin-left: 10px;
        > li {
          line-height: 30px;
          display: flex;
        }
      }
    }
  }

  .title {
    width: 100%;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
