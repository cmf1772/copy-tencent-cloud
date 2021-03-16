<template>
  <div class="viewPage">
    <div class="block">
      <el-carousel height="100%">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner">
      <div class="banner-c">
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
      </div>
    </div>
    <div class="market-place-section">
      <div class="module-section-hd">
        <span class="text-gradient">0元</span>
        <span>・免费体验</span>
      </div>
      <div class="mp__tryout">
        <div class="tab">
          <!-- @tab-click="handleClick" -->
          <el-tabs v-model="activeName">
            <el-tab-pane label="小程序"
                         name="first">
            </el-tab-pane>
            <el-tab-pane label="网站建设"
                         name="second">
            </el-tab-pane>
            <el-tab-pane label="企业应用"
                         name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth"></el-tab-pane>
          </el-tabs>
        </div>
        <ul class="mp__tryout-list">
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
        </ul>
        <p> <i class="el-icon-refresh"></i> 换一换</p>
      </div>
    </div>

    <div class="section">
      <div class="s_all">
        <div class="tit">
          <span class="text-gradient">人气</span>
          <span>・畅销榜</span>
        </div>
        <div class="mp__carousel">
          <div class="mp_tit">
            小程序
          </div>
          <div class="mp__seller-list">
            <div class="mp__seller-list-left">
              <div class="mp_img">
                <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                     alt="">
              </div>
              <div class="mp__seller-classify-hd">
                <span>人气分类</span>
                <p>查看更多 <i class="el-icon-arrow-right"></i></p>
              </div>
              <div class="mp__seller-classify-list">
                <ul>
                  <li>电商零售</li>
                  <li>零售</li>
                  <li>游戏</li>
                  <li>生活太难</li>
                  <li>定制开发</li>
                </ul>
              </div>
            </div>
            <div class="mp__seller-list-right">
              <ul>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ban"
         style="widgh100%;height:122px; box-sizing:border-box;padding:0 200px; margin:30px 0px">
      <div style="width: 100%; height: 100%; background:#1ea8f0"></div>
    </div>

    <div class="mp__seller">
      <div class="mp__seller-group">
        <div class="fn-s-group-item">
          <p class="hoverColor">镜像服务</p>
          <div class="all">
            <div class="fn-left">
              <div class="mp__seller-list-left">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="mp__seller-list-left">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="left-bottom">
                <div class="top">
                  <span>人气分类</span>
                  <p class="hoverColor">查看跟多 <i class="el-icon-arrow-right"></i></p>
                </div>
                <ul class="bottom">
                  <li>电商零售</li>
                  <li>零售</li>
                  <li>游戏</li>
                  <li>生活太难</li>
                  <li>定制开发</li>
                </ul>
              </div>
            </div>
            <div class="fn-right">
              <div class="mp__seller-list-right">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="mp__seller-list-right">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fn-s-group-item">
          <p class="hoverColor">专家服务</p>
          <div class="all">
            <div class="fn-left">
              <div class="mp__seller-list-left">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="mp__seller-list-left">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="left-bottom">
                <div class="top">
                  <span>人气分类</span>
                  <p class="hoverColor">查看跟多 <i class="el-icon-arrow-right"></i></p>
                </div>
                <ul class="bottom">
                  <li>电商零售</li>
                  <li>零售</li>
                  <li>游戏</li>
                  <li>生活太难</li>
                  <li>定制开发</li>
                </ul>
              </div>
            </div>
            <div class="fn-right">
              <div class="mp__seller-list-right">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
              <div class="mp__seller-list-right">
                <div class="img">
                  <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                       alt="">
                </div>
                <div class="list-right">
                  <p class="hoverColor">PHP全能运行环境</p>
                  <span>预安装Apache+PHP+MySQL+vsFTPd，支持PHP多版本切换</span>
                  <div>
                    <p><span>¥</span>0</p>
                    <span>300人在用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ban"
         style="widgh100%;height:122px; box-sizing:border-box;padding:0 200px; margin-top:60px; margin-bottom: 30px">
      <div style="width: 100%; height: 100%; background:#f98661"></div>
    </div>

    <div class="market-place-sectionTwo">
      <div class="market-place-section-content">
        <div class="module-section-hd">
          <div class="left">
            <span>一站式</span>
            <p>・解决方案</p>
          </div>
          <div class="right">
            <i class="el-icon-arrow-left"
               style="margin-right: 5px"></i><span style="margin-right: 5px">1/1</span><i style="margin-right: 5px"
               class="el-icon-arrow-right"></i>
          </div>
        </div>

        <div class="mp__product-list">
          <div class="mp__product-list-item">
            <p class="mp__solution-item-title">电商零售全渠道建站</p>
            <p class="mp__solution-item-desc">电商零售全渠道覆盖：PC品牌商城/微信商城/手机商城/小程序商城，域名购买，网站备案一站式服务。</p>
            <p class="mp__solution-item-text">打包购买 <span>￥3842</span> <span style="    color: #8B8B8B; margin-left: 5px;text-decoration: line-through;font-size: 18px;">￥3842</span> </p>
            <div class="button">立即购买</div>
          </div>

          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
        </div>

        <div class="mp__product-list">
          <div class="mp__product-list-item">
            <p class="mp__solution-item-title">电商零售全渠道建站</p>
            <p class="mp__solution-item-desc">电商零售全渠道覆盖：PC品牌商城/微信商城/手机商城/小程序商城，域名购买，网站备案一站式服务。</p>
            <p class="mp__solution-item-text">打包购买 <span>￥3842</span> <span style="    color: #8B8B8B; margin-left: 5px;text-decoration: line-through;font-size: 18px;">￥3842</span> </p>
            <div class="button">立即购买</div>
          </div>

          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
          <div class="mp__product-list-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="product-card-bd hoverColor">商城网站Saas服务解决方案</p>
            <div class="product-card-text">
              <p><span>￥</span> 3188</p>
              <span>免费试用</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="market-place-sectionThree">
      <div class="market-place-section-content">
        <div class="module-section-hd">
          <span class="text-gradient">荐</span>
          <span>・为您推荐</span>
        </div>
        <div class="module-section-se">
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
          <div class="se-item">
            <div class="img">
              <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p class="o">H5响应式网站【建站+推广】</p>
            <p class="t">
              <span><i style="font-size: 14px !important;">¥</i>100</span>
              <span style="    color: #8B8B8B;
    text-decoration: line-through;font-size: 14px !important;">¥99</span>
            </p>
            <p class="f"><span>46</span>人在用</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'viewPage',
  data () {
    return {
      activeName: 'first',
    }
  }
}
</script>

<style lang="scss" scoped>
.market-place-sectionThree {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 200px;
  .market-place-section-content {
    width: 100%;
    .module-section-hd {
      width: 100%;
      height: 90px;
      // margin: 20px 0;
      line-height: 90px;
      font-size: 30px;
      color: #383838;
      .text-gradient {
        font-size: 30px;
        color: #f2a056;
        font-weight: 700;
        background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
        -webkit-background-clip: text;
      }
    }
    .module-section-se {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .se-item {
        width: 19%;
        border: solid 1px #efefef;
        margin-bottom: 10px;
        .img {
          width: 100%;
          overflow: hidden;

          > img {
            transition: all 0.25s;
            width: 100%;
            height: 100%;
          }

          > :hover {
            background: red;
            transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }
        .o {
          box-sizing: border-box;
          padding: 0 10px;
          line-height: 20px;
          height: 20px;
          display: block;
          font-size: 14px;
          color: #000;
          transition: color 0.15s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          margin-top: 5px;
          -webkit-box-sizing: border-box;
        }
        .t {
          box-sizing: border-box;
          padding: 0 10px;
          font-size: 22px;
          color: #f43f2d;
          margin-top: 5px;
          letter-spacing: -1px;
          display: inline-block;
          font-family: DINNextLTPro;
        }
        .f {
          box-sizing: border-box;
          padding: 0 10px;
          font-size: 12px;
          color: #4a4a4a;
          line-height: 12px;
          min-height: 12px;
          margin-top: 3px;
          text-align: right;
          box-sizing: border-box;
          padding: 10px;
          > span {
            color: #e14d42;
          }
        }
      }
    }
  }
}

.market-place-sectionTwo {
  width: 100%;
  height: 670px;
  box-sizing: border-box;
  padding: 0 200px;
  background-color: #f4f5f9;
  .market-place-section-content {
    width: 100%;
    height: 100%;
    .mp__product {
      width: 100%;
      height: 264px;
      display: flex;
    }
    .mp__product-list {
      width: 100%;
      height: auto;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;

      .mp__product-list-item {
        width: 19%;
        .img {
          width: 100%;
          height: 145px;
          overflow: hidden;

          > img {
            transition: all 0.25s;
            width: 100%;
            height: 100%;
          }

          > :hover {
            background: red;
            transform: scale(1.2);
            -ms-transform: scale(1.2);
          }
        }

        .product-card-text {
          width: 100%;
          display: flex;
          justify-content: space-between;
          > p {
            font-size: 22px;
            color: #f43f2d;
            margin-right: 5px;
            letter-spacing: -1px;
            display: inline-block;
            font-family: DINNextLTPro;
            > span {
              font-size: 14px !important;
            }
          }
          > span {
            margin-top: 8px;
            display: inline-block;
            border-width: 1px;
            border-radius: 3px;
            border-style: solid;
            box-sizing: border-box;
            padding: 0 6px;
            font-size: 12px;
            height: 18px;
            line-height: 16px;
            color: #f09816;
            border-color: #f09816;
          }
        }

        .product-card-bd {
          line-height: 20px;
          height: 20px;
          display: block;
          font-size: 14px;
          color: #000;
          transition: color 0.15s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          margin: 20px 0;
        }

        .mp__solution-item-title {
          font-size: 20px;
          color: #000;
          line-height: 34px;
        }
        .mp__solution-item-desc {
          line-height: 20px;
          color: #888;
          font-size: 12px;
          margin-top: 20px;
          height: 80px;
          overflow: hidden;
        }
        .mp__solution-item-text {
          line-height: 30px;
          font-size: 14px;
          color: #444;
          > span {
            font-size: 22px;
            color: #f43f2d;
            margin-left: 5px;
            letter-spacing: -1px;
            font-family: DINNextLTPro;
            display: inline-block;
          }
        }

        .button {
          background-color: #00a4ff;
          height: 30px;
          line-height: 30px;
          display: inline-block;
          box-sizing: border-box;
          padding: 0 34px;
          color: #fff;
          font-size: 12px;
          margin-top: 27px;
          transition: background 0.25s;
          cursor: pointer;
        }
      }
    }

    .module-section-hd {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 30px 0;
      .left {
        display: flex;
        > span {
          color: #f2a056;
          font-weight: 700;
          background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          font-size: 30px;
        }

        > p {
          font-size: 30px;
          color: #383838;
        }
      }

      .right {
        display: inline-block;
        font-size: 16px;
        color: #7f7f7f;
        vertical-align: bottom;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
}

.mp__seller {
  width: 100%;
  height: 466px;
  box-sizing: border-box;
  padding: 0 200px;
  .mp__seller-group {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .fn-s-group-item {
      width: 49.5%;
      > p {
        display: inline-block;
        height: 36px;
        line-height: 36px;
        font-size: 22px;
        color: #444;
        transition: color 0.25s;
      }
      .all {
        width: 100%;
        height: 100%;
        display: flex;
        .fn-left {
          width: 69%;
          height: 100%;
          margin-right: 1%;
          .mp__seller-list-left {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            height: 158px;
            background-color: #f7f8fa;
            transition: all 0.25s;
            display: flex;
            margin-bottom: 10px;
            .img {
              width: 40%;
              overflow: hidden;
              height: 100%;
              > img {
                transition: all 0.25s;
                width: 100%;
                height: 100%;
              }

              > :hover {
                background: red;
                transform: scale(1.2);
                -ms-transform: scale(1.2);
              }
            }
            .list-right {
              width: 59%;
              height: 100%;
              margin-left: 1%;
              > p {
                line-height: 20px;
                height: 20px;
                display: block;
                font-size: 14px;
                color: #000;
                transition: color 0.15s;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              > span {
                display: block;
                margin-top: 4px;
                overflow: hidden;
                overflow: hidden;
                color: #7f7f7f;
                height: 16px;
                line-height: 16px;
                white-space: nowrap;
                font-size: 12px;
                text-overflow: ellipsis;
                margin-bottom: 70px;
              }

              > div {
                width: 100%;
                display: flex;
                justify-content: space-between;

                > span {
                  color: #7f7f7f;
                  font-size: 12px;
                }

                > p {
                  font-size: 22px;
                  color: #f43f2d;
                  margin-right: 5px;
                  letter-spacing: -1px;
                  display: inline-block;
                  font-family: DINNextLTPro;
                  > span {
                    font-size: 14px !important;
                  }
                }
              }
            }
          }

          .left-bottom {
            background-color: #f7f8fa;
            width: 100%;
            height: 130px;
            .top {
              width: 100%;
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
              > p {
                vertical-align: middle;
                display: inline-block;
                height: 24px;
                line-height: 24px;
                font-size: 12px;
                color: #696969;
                float: right;
                padding-right: 12px;
              }

              > span {
                vertical-align: middle;
                display: inline-block;
                height: 24px;
                line-height: 24px;
                font-size: 16px;
                color: #4a4a4a;
                font-weight: 700;
              }
            }
            .bottom {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              > li {
                color: #2ac4d5;
                height: 20px;
                line-height: 18px;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid #2ac4d5;
                font-size: 12px;
                cursor: pointer;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                margin: 10px 10px 5px 0;
              }
            }
          }
        }

        .fn-right {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          > :last-child {
            height: 49% !important;
            margin-top: 1% !important;
          }
          .mp__seller-list-right {
            background-color: #f7f8fa;
            flex: 1;
            box-sizing: border-box;
            padding: 10px;
            .img {
              width: 100%;
              height: 94px;
              overflow: hidden;
              > img {
                margin-left: 5%;
                width: 60%;
                transition: all 0.25s;
              }

              > :hover {
                background: red;
                transform: scale(1.2);
                -ms-transform: scale(1.2);
              }
            }

            .list-right {
              width: 100%;
              height: 100%;
              > p {
                line-height: 20px;
                height: 20px;
                display: block;
                font-size: 14px;
                color: #000;
                transition: color 0.15s;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              > span {
                display: block;
                margin-top: 4px;
                overflow: hidden;
                overflow: hidden;
                color: #7f7f7f;
                height: 16px;
                line-height: 16px;
                white-space: nowrap;
                font-size: 12px;
                text-overflow: ellipsis;
                margin-bottom: 40px;
              }

              > div {
                width: 100%;
                display: flex;
                justify-content: space-between;

                > span {
                  color: #7f7f7f;
                  font-size: 12px;
                }

                > p {
                  font-size: 22px;
                  color: #f43f2d;
                  margin-right: 5px;
                  letter-spacing: -1px;
                  display: inline-block;
                  font-family: DINNextLTPro;
                  > span {
                    font-size: 14px !important;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.block {
  width: 100%;
  height: 314px;
}

.viewPage {
  // width: 1250px;
}

.section {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 200px;
  .s_all {
    width: 100%;
    .tit {
      font-size: 30px;
      color: #383838;
      margin: 30px 0px;

      > :first-child {
        color: #f2a056;
        font-weight: 700;
        background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }
    .mp__carousel {
      width: 100%;
      .mp_tit {
        margin-bottom: 10px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        font-size: 22px;
        color: #444;
        transition: color 0.25s;
      }
      .mp__seller-list {
        display: flex;
        height: 410px;
        .mp__seller-list-left {
          width: 390px;
          height: 100%;
          background: #f7f8fa;
          .mp_img {
            width: 100%;
            height: 260px;
            overflow: hidden;
            box-sizing: border-box;
            > img {
              width: 100%;
              height: 100%;
              transition: all 0.6s;
              -ms-transition: all 0.8s;
              cursor: pointer;
            }
            > :hover {
              background: red;
              transform: scale(1.2);
              -ms-transform: scale(1.2);
            }
          }
          .mp__seller-classify-hd {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 0 20px;
            box-sizing: border-box;
            > span {
              vertical-align: middle;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              font-size: 16px;
              color: #4a4a4a;
              font-weight: 700;
            }
            > p {
              vertical-align: middle;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              font-size: 12px;
              color: #696969;
              padding-right: 12px;
              cursor: pointer;
            }
          }
          .mp__seller-classify-list {
            width: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            > ul {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              > li {
                color: #39cd74;
                height: 20px;
                line-height: 18px;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid #39cd74;
                font-size: 12px;
                cursor: pointer;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                margin: 10px 10px 5px 0;
              }
            }
          }
        }
        .mp__seller-list-right {
          flex: 1;
          margin-left: 20px;
          > ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            // margin-top: 10px;
            > :first-child {
              margin-top: 0;
            }

            > :nth-child(2) {
              margin-top: 0;
            }

            > li {
              width: 49%;
              height: 130px;
              box-sizing: border-box;
              padding: 10px;
              height: 130px;
              background-color: #f7f8fa;
              transition: all 0.25s;
              display: flex;
              margin-top: 10px;
              .mp_r_img {
                width: 163px;
                height: 109px;
                overflow: hidden;
                transition: all 0.25s;
                > img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.6s;
                  -ms-transition: all 0.8s;
                  cursor: pointer;
                }
                > :hover {
                  background: red;
                  transform: scale(1.2);
                  -ms-transform: scale(1.2);
                }
              }
              .map_list {
                box-sizing: border-box;
                padding: 10px 20px;
                > p {
                  margin-top: 4px;
                  overflow: hidden;
                  overflow: hidden;
                  color: #7f7f7f;
                  height: 16px;
                  line-height: 16px;
                  white-space: nowrap;
                  font-size: 12px;
                  text-overflow: ellipsis;
                }
                .map_t {
                  width: 100%;
                  display: flex;
                  span {
                    display: inline-block;
                    border-width: 1px;
                    border-radius: 2px;
                    border-style: solid;
                    box-sizing: border-box;
                    padding: 0 6px;
                    font-size: 12px;
                    height: 18px;
                    line-height: 16px;
                    color: #f09816;
                    border-color: #f09816;
                    margin: 10px 10px 10px 0;
                  }
                  :last-child {
                    color: #f7756c;
                    border-color: #f7756c;
                  }
                }
                .map_b {
                  display: flex;
                  justify-content: space-between;
                  color: #7f7f7f;
                  font-size: 12px;
                  line-height: 30px;
                  > :first-child {
                    font-size: 22px;
                    color: #f43f2d;
                    margin-right: 5px;
                    display: inline-block;
                    font-family: DINNextLTPro;
                    > span {
                      font-size: 14px !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.market-place-section {
  width: 100%;
  height: 788px;
  background-color: #f4f5f9;
  box-sizing: border-box;
  padding: 0 200px;
  .module-section-hd {
    width: 100%;
    height: 90px;
    // margin: 20px 0;
    line-height: 90px;
    font-size: 30px;
    color: #383838;
    .text-gradient {
      font-size: 30px;
      color: #f2a056;
      font-weight: 700;
      background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
      -webkit-background-clip: text;
    }
  }
  .mp__tryout {
    width: 100%;
    height: 666px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    > p {
      cursor: pointer;
      border-radius: 17px;
      transition: all 0.25s;
      box-sizing: border-box;
      color: #00a4ff;
      font-size: 12px;
      background-repeat: no-repeat;
      background-position: 24px center;
      width: 100%;
      text-align: center;
    }
  }
  .mp__tryout-list {
    width: 100%;
    height: 570px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      // width: 216px;
      width: 17%;
      height: 250px;
      border: solid 1px #eee;
      .product-card-hd {
        width: 100%;
        height: 144px;
        overflow: hidden;
        transition: all 0.25s;
        > img {
          width: 100%;
          height: 100%;
          transition: all 0.6s;
          -ms-transition: all 0.8s;
          cursor: pointer;
        }
        > :hover {
          background: red;
          transform: scale(1.2);
          -ms-transform: scale(1.2);
        }
      }

      > p {
        line-height: 20px;
        height: 20px;
        display: block;
        font-size: 14px;
        color: #000;
        transition: color 0.15s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 10px;
      }

      .product-card-text {
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: space-between;
        .text-tag-warning {
          margin-top: 8px;
          display: inline-block;
          border-width: 1px;
          border-radius: 3px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 6px;
          font-size: 12px;
          height: 18px;
          line-height: 16px;
          color: #f09816;
          border-color: #f09816;
        }
        .hot-tips {
          color: #7f7f7f;
          font-size: 12px;
        }
      }
      .product-card-tryout {
        display: flex;
        > p {
          flex: 1;
        }
        > :first-child {
          display: block;
          height: 28px;
          width: 94px;
          border: 1px solid #f36d4b;
          text-align: center;
          font-size: 24px;
          font-family: DINNextLTPro;
          line-height: 28px;
          color: #f36d4b;
          cursor: default;
        }
        > :last-child {
          float: left;
          height: 30px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          line-height: 30px;
          width: 130px;
          background-color: #f36d4b;
          cursor: pointer;
          transition: background 0.25s;
        }
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 100%;
  // line-height: 150px;
  margin: 0;
}

.el-carousel {
  height: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 2) {
  background-color: skyblue;
}

.banner {
  width: 100%;
  height: 146px;
  box-sizing: border-box;
  padding: 0 200px;
  .banner-c {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > :nth-child(2) {
      background: #f29037 !important  ;
    }
    > :nth-child(3) {
      background: #37aac7 !important  ;
    }
    > :nth-child(4) {
      background: #9163f1 !important  ;
    }
    .item {
      width: 280px;
      height: 108px;
      background: #5782ff;
      box-sizing: border-box;
      padding: 26px 0 26px 20px;
      > p {
        font-size: 22px;
        color: #fff;
        line-height: 34px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
      }
      > span {
        margin-top: 4px;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
      }
    }
  }
}
</style>
