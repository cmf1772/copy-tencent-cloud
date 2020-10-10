<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow title="外卖" right-text="按钮" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <div class="right-menu-top">
            <van-icon name="location-o" color="#C3AB87" size=".26rem" />
            <span>科技大厦</span>
            <i class="iconfont icon-down"></i>
          </div>
        </template>
      </van-nav-bar>
    </div>

    <div class="search-o">
      <search></search>
    </div>
    <div class="banner-o">
      <swipers :list="banner.bannerList"></swipers>
    </div>

    <div class="container">
      <div class="fn">
        <!-- 功能入口 -->
        <ul class="inavs t1">
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/meishi.png" />
              <p>美食</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/yinniao.png" />
              <p>甜点饮品</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/chaoshi.png" />
              <p>超市便利</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/shuiguo.png" />
              <p>蔬菜水果</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/icon/shop/index/outfood/yao.png" />
              <p>送药上门</p>
            </router-link>
          </li>
        </ul>
        <!-- 功能入口 -->
        <ul class="inavs t2">
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/xiawucha.png" />
              <p>下午茶</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/pisa.png" />
              <p>披萨汉堡</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/mianbao.png" />
              <p>面包蛋糕</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/huoguo.png" />
              <p>火锅香锅</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/icon/shop/index/outfood/baozaifan.png" />
              <p>煲仔饭</p>
            </router-link>
          </li>
        </ul>
        <!-- 功能入口 -->
        <ul class="inavs t3">
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/chuancai.png" />
              <p>川湘菜</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/peisong.png" />
              <p>减没配送费</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/jintie.png" />
              <p>津贴联盟</p>
            </router-link>
          </li>
          <li>
            <router-link to="/shop/outfood/channel">
              <img src="@/assets/images/icon/shop/index/outfood/meituan.png" />
              <p>美团专送</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/icon/shop/index/outfood/feilei.png" />
              <p>全部分类</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="list">
        <div class="item">
          <div class="pub-title title">
            <div class="sub-title">精选好店</div>
            <span>查看更多</span>
          </div>
          <div class="c-list">
            <div class="c-item">
              <div class="img imgs">
                <img src="@/assets/images/magazine/index/food/16B1B38A454.jpg" />
                <img src="@/assets/images/shop/shopkeeper.png" class="absolute" alt />
              </div>
              <div class="name">麦当劳炸鸡店（科技城二区三区四区五区）</div>
              <div class="f">
                <div class="tips">近期163人好评</div>
              </div>
            </div>
            <div class="c-item">
              <div class="img imgs">
                <img src="@/assets/images/magazine/index/food/16B1B384664.jpg" />
                <img src="@/assets/images/shop/shopkeeper.png" class="absolute" alt />
              </div>
              <div class="name">麦当劳炸鸡店（科技城二区三区四区五区）</div>
              <div class="f">
                <div class="tips">近期163人好评</div>
              </div>
            </div>
            <div class="c-item">
              <div class="img imgs">
                <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
                <img src="@/assets/images/shop/shopkeeper.png" class="absolute" alt />
              </div>
              <div class="name">麦当劳炸鸡店（科技城二区三区四区五区）</div>
              <div class="f">
                <div class="btn-list">
                  <div>满30减5</div>
                  <div>满50减10</div>
                </div>
              </div>
            </div>
            <div class="c-item">
              <div class="img imgs">
                <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
                <img src="@/assets/images/shop/shopkeeper.png" class="absolute" alt />
              </div>
              <div class="name">麦当劳炸鸡店（科技城二区三区四区五区）</div>
              <div class="f">
                <div class="btn-list">
                  <div>满30减5</div>
                  <div>满50减10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item secends">
          <div class="pub-title title">
            <div class="sub-title">优惠专区</div>
            <span>查看更多</span>
          </div>
          <div class="c-list">
            <div class="c-item">
              <div class="img">
                <img
                  src="@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg"
                />
              </div>
              <div class="t-title">限时秒杀</div>
              <div class="t-content">
                <span>午餐9.9元气</span>
                <div class="t-time">
                  <span>10点场</span>
                  <div class="h">13</div>:
                  <div class="m">10</div>:
                  <div class="s">36</div>
                </div>
              </div>
            </div>
            <div class="c-item">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
              </div>
              <div class="t-title">限时秒杀</div>
              <div class="t-content">
                <span>午餐9.9元气</span>
                <div class="t-time">
                  <span>10点场</span>
                  <div class="h">13</div>:
                  <div class="m">10</div>:
                  <div class="s">36</div>
                </div>
              </div>
            </div>
          </div>
          <div class="t-list">
            <div class="c-item">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
              </div>
              <div class="t-title">限时秒杀</div>
              <div class="f">
                <span>超值推荐</span>
              </div>
            </div>
            <div class="c-item">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/img4.jpg" />
              </div>
              <div class="t-title">限时秒杀</div>
              <div class="f">
                <span>超值推荐</span>
              </div>
            </div>
            <div class="c-item">
              <div class="img">
                <img src="@/assets/images/magazine/index/food/img1.jpg" />
              </div>
              <div class="t-title">限时秒杀</div>
              <div class="f">
                <span>超值推荐</span>
              </div>
            </div>
          </div>

          <div class="shop-d">
            <div class="view-d">
              <div class="d-content">
                <div class="icon">
                  <img src="@/assets/images/shop/shopkeeper.png" />
                </div>
                <div class="name">
                  <span class="n">鹏程小帝国</span>
                  <div class="list-b">
                    <div>减2元配送费</div>
                    <div>15减3</div>
                    <div>28减10</div>
                    <div>50减20</div>
                  </div>
                </div>
              </div>
              <div class="foot-d">
                <div class="item-d">
                  <div class="img">
                    <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
                  </div>
                  <div class="name">油脂双人火锅逃禅好话版本</div>
                  <div class="price-d">
                    ￥
                    <span>199</span>起
                  </div>
                </div>
                <div class="item-d">
                  <div class="img">
                    <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
                  </div>
                  <div class="name">油脂双人火锅逃禅好话版本</div>
                  <div class="price-d">
                    ￥
                    <span>199</span>起
                  </div>
                </div>
                <div class="item-d">
                  <div class="img">
                    <img src="@/assets/images/magazine/index/food/p2466554335.jpg" />
                  </div>
                  <div class="name">油脂双人火锅逃禅好话版本</div>
                  <div class="price-d">
                    ￥
                    <span>199</span>起
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="item nearby">
          <div class="pub-title title">
            <div class="sub-title">附近商家</div>
          </div>

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
          <div class="s-list">
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
            <div class="s-item">
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
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: {
    search,
    swipers
  },
  data() {
    return {
      banner: {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          loop: true
        },
        bannerList: [
          require("@/assets/images/index/banner1.jpg"),
          require("@/assets/images/index/banner2.jpg"),
          require("@/assets/images/index/banner3.jpg"),
          require("@/assets/images/index/banner4.jpg")
        ]
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#top {
  /deep/ .right-menu-top {
    display: flex;
    align-items: center;
    span {
      color: #000;
      margin-left: 0.05rem;
    }
  }
}
.search-o {
  padding: 0.2rem;
}
.banner-o {
  padding: 0 0.45rem;
  margin-top: 0.4rem;
  margin-bottom: 0.5rem;
  .banner {
    padding: 0;
    /deep/ img {
      height: 3.73rem;
    }
  }
}
.container {
  /*首页栏目入口*/
  .inavs {
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0.45rem;
    li {
      display: inline-block;
      text-align: center;
    }
    li img {
      width: 0.45rem;
      height: 0.45rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
    }
  }
  .t1 {
    img {
      width: 1.2rem !important;
      height: 1.2rem !important;
    }
  }
  .t2,
  .t3 {
    li img {
      max-width: 0.45rem;
    }
  }
  .list {
    margin-top: 0.9rem;
    padding: 0 0.45rem;
    .c-item {
      .imgs {
        position: relative;
        margin-bottom: 0.3rem;
        .absolute {
          position: absolute;
          width: 0.7rem;
          right: 0.2rem;
          height: 0.7rem;
          bottom: -0.2rem;
        }
      }
    }
    .item {
      margin-bottom: 0.6rem;
      .pub-title {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .sub-title {
          font-size: 0.42rem;
          font-weight: 400;
        }
        span {
          font-size: 0.24rem;
          color: #777;
        }
      }
      .c-list {
        margin: 0.3rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.32rem;
        img {
          width: 100%;
          height: 3.13rem;
          border-radius: 0.03rem;
        }
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 0.27rem;
          margin: 0.1rem 0;
          margin-top: 0.16rem;
        }
        .tips {
          font-size: 0.24rem;
          color: #c3ab87;
        }
        .btn-list {
          display: flex;
          div {
            color: #777;
            font-size: 0.2rem;
            padding: 0.02rem 0.1rem;
            border-radius: 1rem;
            border: 1px solid #eee;
          }
        }
      }
    }
    .secends {
      margin-top: 1rem;
      .c-list {
        margin-bottom: 0.31rem;
      }
      .c-item {
        position: relative;
      }
      .fw {
        background: url(../../../assets/images/icon/shop/index/bgtop.png)
          no-repeat;
      }
      .t-title {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, 0);

        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        width: 1.6rem;
        height: 0.5rem;
        font-size: 0.27rem;
      }
      .t-content {
        bottom: 0.2rem;
        left: 50%;
        font-size: 0.27rem;
        transform: translate(-50%, 0);
        position: absolute;
        display: flex;
        width: 90%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0.1rem 0;
        background: rgba(255, 255, 255, 0.7);
        .t-time {
          display: flex;
          align-items: center;
          color: #c3ab87;
          div {
            background: #c3ab87;
            color: #fff;
            width: 0.37rem;
            height: 0.37rem;
            text-align: center;
            line-height: 0.37rem;
            margin: 0.03rem;
            font-size: 0.21rem;
            border-radius: 1rem;
          }
          span {
            margin-right: 0.1rem;
          }
        }
      }
      .t-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.31rem;
        img {
          width: 100%;
          height: 2rem;

          border-radius: 0.04rem;
        }
        .t-title {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
          background: url(../../../assets/images/icon/shop/index/bgtop.png)
            no-repeat;
          background-size: 100% 100%;
          width: 1.6rem;
          height: 0.5rem;
          color: #fff;
          width: 60%;
          text-align: center;
          font-size: 0.22rem;
        }
        .f {
          font-size: 0.24rem;
          padding: 0.1rem 0;
          text-align: center;
          color: #777;
        }
      }
      .shop-d {
        margin-top: 0.3rem;
        background: url("../../../assets/images/magazine/index/food/201892241933668.jpg");
        background-size: 100% auto;
        background-position: center center;
        padding-bottom: 0.2rem;
        border-radius: 0.05rem;
        height: 5.3rem;
        overflow: hidden;
        .view-d {
          background: #efefef;
          transform: translate(0, 1.5rem);
          padding-bottom: 0.2rem;
        }
        .d-content {
          transform: translate(0, -0.42rem);
          display: flex;
          margin: 0 0.2rem;
          img {
            width: 0.95rem;
            height: 0.95rem;
            border-radius: 0.04rem;
          }
          .name {
            margin-left: 0.2rem;
            display: flex;
            flex-direction: column;

            .n {
              font-size: 0.3rem;
              color: #fff;
              font-weight: 600;
            }
          }
          .list-b {
            margin-top: auto;
            display: flex;
            font-size: 0.18rem;
            align-items: center;
            div {
              padding: 0.05rem 0.1rem;
              border-radius: 1rem;
              background: #c3ab87;
              margin-right: 0.1rem;
              color: #fff;
            }
          }
        }
        .foot-d {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0.2rem;
          padding: 0 0.2rem;
          transform: translate(0, -0.2rem);
          img {
            width: 100%;
            height: 2rem;
            border-radius: 0.04rem;
          }
          .item-d {
            display: flex;
            flex-direction: column;
            .name {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              font-size: 0.24rem;
              margin: 0.1rem 0;
            }
            .price-d {
              font-size: 0.21rem;
              color: #c3ab87;
              span {
                font-size: 0.33rem;
              }
            }
          }
        }
      }
    }

    .nearby {
      margin-top: 1rem;
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
  }
}
</style>