<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="美食" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-f">
      <search></search>
    </div>

    <div class="container">
      <!-- 头部标题 -->
      <div class="pub-title title">
        <div class="sub-title">今日套餐推荐</div>
        <span>查看更多</span>
      </div>

      <!-- 精选好点商品 -->
      <div class="list">
        <div class="item" @click="shopKeeper">
          <div class="img">
            <img src="@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="add">
              <van-icon name="plus" size=".3rem" />
            </div>
          </div>
        </div>
        <div class="item" @click="shopKeeper">
          <div class="img">
             <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="add">
              <van-icon name="plus" size=".3rem" />
            </div>
          </div>
        </div>
      </div>

      <!-- 入口 -->
      <ul class="inavs">
        <li>
          <router-link to="/shop/special/coupon">
            <img src="@/assets/images/icon/shop/index/outfood/all.png" />
            <p>全部</p>
          </router-link>
        </li>
        <li>
          <router-link to="/shop/special/group">
            <img src="@/assets/images/icon/shop/index/outfood/jiaozi.png" />
            <p>饺子混沌</p>
          </router-link>
        </li>
        <li>
          <router-link to="/serve/recovery">
            <img src="@/assets/images/icon/shop/index/outfood/shaguo.png" />
            <p>香锅砂锅</p>
          </router-link>
        </li>
        <li>
          <router-link to="/broadcast">
            <img src="@/assets/images/icon/shop/index/outfood/jiancai.png" />
            <p>简餐</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <img src="@/assets/images/icon/shop/index/outfood/jiaogaifan.png" />
            <p>浇盖饭</p>
          </router-link>
        </li>
      </ul>
      <!-- 帅选 -->
      <div class="screen">
        <div>
          品类
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          附近
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          排序
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          筛选
          <i class="iconfont icon-down"></i>
        </div>
      </div>
      <div class="btn-l-s">
        <div>满减优惠</div>
        <div>会员红包</div>
        <div>减配送费</div>
        <div>30分钟内</div>
      </div>

      <!-- 下边list -->
      <div class="s-list">
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/p2466554335.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
              <div class="shop-tip fw">精选服务</div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/img1.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
              <div class="shop-tip xd">新店</div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/img2.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
              <div class="shop-tip jx">精选</div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/img4.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
              <div class="shop-tip pp">品牌</div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/p2466554335.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/16B1B38A454.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/16B1B384664.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
            <div class="s-item" @click="detailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
              </div>
              <div class="s-content">
                <div class="s-t">
                  <span>油脂双人火锅套餐</span>
                  <van-icon name="ellipsis" />
                </div>
                <div class="amount">
                  <div class="amount-l">
                    <div class="a-l-l">
                      <van-icon name="star" color="#C3AB87" size=".26rem" />
                      <span>4.9</span>
                    </div>
                    <span class="month-a">月瘦413</span>
                  </div>
                  <div class="amount-r">
                    <span>28分钟</span>
                    <span>2.3km</span>
                  </div>
                </div>
                <div class="a-price">
                  <div class="l-price">
                    <span>起送￥20</span>
                    <span>配送￥4</span>
                  </div>
                  <div class="m-e">美团专享</div>
                </div>
                <div class="ranking">
                  <span>万达官场中餐人气第二名</span>
                </div>
                <div class="s-foot">
                  <div class="f-b-l">
                    <div>50减18</div>
                    <div>108减38</div>
                    <div>200减50</div>
                  </div>
                  <van-icon name="arrow-down" size=".24rem" />
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: {
    search
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    detailed() {
      this.$router.push({
        path: "/shop/outfood/detailed"
      });
    },
    shopKeeper() {
      this.$router.push({
        path: "/shop/outfood/shopkeeper"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-f {
  padding: 0.1rem 0.45rem;
}

.container {
  padding: 0 0.45rem;
  .inavs {
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0.6rem 0;
    padding-top: 0.4rem;
    li {
      display: inline-block;
      text-align: center;
    }
    li img {
      height: 0.9rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
    }
  }
  .pub-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0.3rem 0;
    .sub-title {
      font-size: 0.42rem;
      font-weight: 600;
    }
    span {
      font-size: 0.24rem;
      color: #777;
    }
  }

  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.31rem;
    .item {
      display: flex;
      flex-direction: column;
      font-size: 0.2rem;
      padding-bottom: 0.3rem;
      img {
        width: 100%;
        height: 3.13rem;
        border-radius: 0.04rem;
      }
      .adress,
      .foot {
        display: flex;

        justify-content: space-between;
      }
      .adress {
        color: #777;
        padding: 0.08rem 0;
        .title {
          display: flex;
          align-items: center;
        }
        .van-icon {
          font-size: 0.24rem;
          margin-right: 0.06rem;
        }
      }
      .name {
        font-size: 0.3rem;
        font-weight: 400;
        margin-bottom: 0.15rem;
      }
      .foot {
        align-items: center;
        .now-p,
        .num {
          font-size: 0.22rem;
          color: #c3ab87;
        }
        .add {
          display: inherit;
        }
        .now-p {
          font-size: 0.34rem;
        }
        .old-p {
          font-size: 0.18rem;
          color: #777;
          margin-left: 0.06rem;
        }
      }
    }
  }
  .screen {
    margin: 0.2rem 0;
    font-size: 0.28rem;
    display: flex;
    justify-content: space-between;
    i {
      display: initial;
      font-size: 0.2rem;
    }
  }
  .btn-l-s {
    display: flex;
    justify-content: space-between;
    div {
      font-size: 0.26rem;
      color: #777;
      padding: 0.1rem 0.2rem;
      border-radius: 1rem;
      background: #f7f7f7;
    }
  }
   .s-list {
        .s-item {
          position: relative;
          margin: 0.6rem 0;
          display: flex;
          .m-e{
             background-image: url(../../../assets/images/icon/shop/index/me.png) !important;
             color: #c3ab87;
             font-size: .17rem;
             padding-left: 0.15rem;
          }
          .shop-tip {
            position: absolute;
            padding: 0.05rem 0.2rem;
            left: 0.2rem;
            height: 0.35rem;
            padding-top: 0;
            padding-bottom: 0.1rem;
            display: flex;
            align-items: center;
            transform: translate(0, -20%);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            font-size: 0.18rem;
            color: #fff;
            // background-image: url(../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .jx {
            background-image: url(../../../assets/images/icon/shop/index/xingxuan.png) !important;
          }
          .xd {
            background-image: url(../../../assets/images/icon/shop/index/xindian.png) !important;
          }
          .fw {
            background-image: url(../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .pp {
            background-image: url(../../../assets/images/icon/shop/index/pingpai.png) !important;
          }
          img {
            width: 2.26rem;
            height: 2.26rem;
          }
          .s-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-left: 0.31rem;
            .s-t {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 0.3rem;
              margin-bottom: 0.1rem;
            }
            .amount {
              display: flex;
              font-size: 0.2rem;
              align-items: center;
              margin-bottom: 0.1rem;
              justify-content: space-between;
              .amount-l {
                .month-a {
                  margin-left: 0.1rem;
                }
                display: flex;
                align-items: center;
                span {
                  margin-left: 0.05rem;
                }
              }
              .amount-r {
                color: #777;
                span {
                  margin-right: 0.1rem;
                }
              }
            }
            .a-price {
              display: flex;
              justify-content: space-between;
              font-size: 0.2rem;
              span {
                margin-right: 0.1rem;
                color: #777;
              }
            }
            .ranking {
              display: inherit;
              margin: 0.1rem 0;
              span {
                font-size: 0.2rem;
                padding: 0rem 0.1rem;
                border-radius: 1rem;
                color: #777;
                background: #f7f7f7;
                display: inline-block;
              }
            }
            .s-foot {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .f-b-l {
                display: flex;
                font-size: 0.2rem;
                div {
                  color: #c3ab87;
                  padding: 0.02rem 0.1rem;
                  border-radius: 1rem;

                  border: 1px solid #c3ab87;
                  margin-right: 0.1rem;
                }
              }
            }
          }
        }
        .s-item:first-child {
          margin-top: 0.4rem;
        }
      }
}
</style>