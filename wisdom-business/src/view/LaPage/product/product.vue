<template>
  <div class="product">
    <div class="swiper">
      <div class="swiper-item"
           @mouseover="mouseOver"
           @mouseleave="mouseLeave"
           v-for="(item, index) in swiperJson"
           :key="index"
           v-if="indexFlag === index">
        <p>{{item.title}}</p>
        <span>{{item.content}}</span>
        <div>{{item.button}}</div>
      </div>
      <ul class="swiper-banner">
        <li v-for="(item, index) in swiperJson"
            @click="changeSwiper(index)"
            class="swiper-button"
            :style="{'background': index === indexFlag ? '#409eff' : '#fff'}"
            :key="index">
        </li>
      </ul>
      <div class="s_right">
        <div>
          <p>技术沙龙</p>
          <span>报名参加技术沙龙</span>
        </div>
        <div>
          <p>技术沙龙</p>
          <span>报名参加技术沙龙</span>
        </div>
        <div>
          <p>技术沙龙</p>
          <span>报名参加技术沙龙</span>
        </div>
      </div>
    </div>

    <div class="content-title">
      <div class="contentItem"
           v-for="(item, index) in contentJson"
           :key="index">
        <i class="el-icon-s-data"
           style="color: skyblue"></i>
        <div>
          <span>{{item.name}}</span>
          <p>{{item.contentName}}</p>
        </div>
      </div>
    </div>

    <div style=" margin-top: 90px;
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 46px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: center;
    -webkit-font-smoothing: antialiased;">
      性能强大、安全、稳定的云产品
    </div>
    <!-- 
    <div class="tab">
      <el-tabs v-model="activeName">
        <el-tab-pane name="first">
          <span slot="label">
            <span class="span-box">
              <i class="el-icon-dish-1 ico-pre"></i>
              用户管理
            </span>
          </span>
        </el-tab-pane>
        <el-tab-pane label="配置管理"
                     name="second">
        </el-tab-pane>
        <el-tab-pane label="角色管理"
                     name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿"
                     name="fourth"></el-tab-pane>
      </el-tabs>
    </div> -->

    <div class="tab-content">
      <div class="tab-content-item">
        <p>云服务器材</p>
        <span>安全稳定，高弹性的计算服务</span>
      </div>
      <div class="tab-content-item">
        <p>腾讯会议</p>
        <span>“云+端+AI”云视频会议解决方案</span>
      </div>
      <div class="tab-content-item">
        <p>云点播</p>
        <span>一站式媒体转码分发平台</span>
      </div>
      <div class="tab-content-item">
        <p>域名注册</p>
        <span>专业域名服务，安全、省心、可信赖</span>
      </div>
      <div class="tab-content-item">
        <p>即时通信 IM</p>
        <span>承载支撑亿级 QQ 用户的通信服务</span>
      </div>
      <div class="tab-content-item">
        <p>GPU 云服务器</p>
        <span>专业智能高效的语音处理服务</span>
      </div>
      <div class="tab-content-item">
        <p>云硬盘</p>
        <span>专业智能高效的语音处理服务</span>
      </div>
    </div>

    <div class="experience">
      <p>免费领取云服务器、数据库等款产品的体验套餐，腾讯云为您提供无忧的上云体验机会</p>
      <div>
        免费体验
      </div>
    </div>

    <div class="column-swiper">
      <div class="right-swiper">
        <div class="top-swiper">
          <div :class="rightIndex == index ? 'right-item right-item-hover' : 'right-item'"
               @mouseover="mouseHover(index)"
               v-for="(item, index) in rightSwiper"
               :key="index">{{item.name}}</div>
        </div>
        <div class="bottom-swiper">
          全部解决方案 <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="contentSwiper">
        <div class="itemSwiper"
             v-for="(item, index) in rightSwiperJson"
             v-if="index === rightIndex"
             :key="index">
          <title>{{item.title}}</title>
          <p>{{item.titleSpan}}</p>
          <span>{{item.content}}</span>
          <div>{{item.button}}</div>
        </div>
      </div>
      <div class="rno-clip-mod">
      </div>
    </div>

    <div style=" margin-top: 90px;
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 46px;
    color: rgb(0, 0, 0);
    font-weight: 400;
    text-align: center;
    -webkit-font-smoothing: antialiased;">
      性能强大、安全、稳定的云产品
      <p style="    margin-top: 10px;
    font-size: 16px;
    line-height: 26px;
    color: #666;
    -webkit-font-smoothing: antialiased;">围绕中小企业初创、发展、成长周期，精选行业优质服务商，提供一站式经营服务</p>
    </div>
    <!-- 
    <div class="tab">
      <el-tabs v-model="activeName">
        <el-tab-pane name="first">
          <span slot="label">
            <span class="span-box">
              <p>初创期</p>
              <span>高效省心创立公司</span>
            </span>
          </span>
        </el-tab-pane>
        <el-tab-pane label="配置管理"
                     name="second">
        </el-tab-pane>
        <el-tab-pane label="角色管理"
                     name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿"
                     name="fourth"></el-tab-pane>
      </el-tabs>
    </div> -->

    <div class="tab-type">
      <div class="tab-type-l">
        <p>初创期</p>
        <div>
          专家1v1咨询与服务，为您提供定制化解决方案，助力新手高效完成公司创立第一步。
        </div>
      </div>
      <div class="tab-type-r">
        <div class="tab-item">
          <div class="top-tab">
            <p>新手创业锦囊 </p>
            <div>
              <div>专业顾问1v1</div>
            </div>
          </div>
          <div class="content"> 助力新手0基础创业，让企业快速起步。含创业核名1次、创业咨询1次、初创企业资料包1套。 </div>
          <p>¥1</p>
        </div>
        <div class="tab-item">
          <div class="top-tab">
            <p>新手创业锦囊 </p>
            <div>
              <div>专业顾问1v1</div>
            </div>
          </div>
          <div class="content"> 助力新手0基础创业，让企业快速起步。含创业核名1次、创业咨询1次、初创企业资料包1套。 </div>
          <p>¥1</p>
        </div>
        <div class="tab-item">
          <div class="top-tab">
            <p>新手创业锦囊 </p>
            <div>
              <div>专业顾问1v1</div>
            </div>
          </div>
          <div class="content"> 助力新手0基础创业，让企业快速起步。含创业核名1次、创业咨询1次、初创企业资料包1套。 </div>
          <p>¥1</p>
        </div>
        <div class="tab-item">
          <div class="top-tab">
            <p>新手创业锦囊 </p>
            <div>
              <div>专业顾问1v1</div>
              <div>专业顾问</div>
            </div>
          </div>
          <div class="content"> 助力新手0基础创业，让企业快速起步。含创业核名1次、创业咨询1次、初创企业资料包1套。 </div>
          <p>¥1 <del>¥12</del></p>
        </div>
      </div>
    </div>

    <div style=" margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 46px;
    font-weight: 200;
    text-align: center;
    -webkit-font-smoothing: antialiased;">
      腾讯云与云市场众多优秀第三方服务供应商合作，<br>
      为您提供 <span style="margin-left: 4px;
    margin-right: 4px;
    color: #00A4FF;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    vertical-align: -2px;
    font-family: DINNextLTPro-MediumCond,'DIN Alternate';">50+</span>
      品类，超过
      <span style="margin-left: 4px;
    margin-right: 4px;
    color: #00A4FF;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    font-weight: 600;
    vertical-align: -2px;
    font-family: DINNextLTPro-MediumCond,'DIN Alternate';">6.7K+</span>
      商品，以更多的选择满足不同的业务需求
    </div>
    <div class="iconContent">
      <div class="top-icon">
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/e0d02d6cfa8b46c4bab9bdb6db0252a5.svg"
               alt="">
          <p>小程序</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/f6a2caf590c18c5d04306260c5185273.svg"
               alt="">
          <p>基础软件</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/4f90e9e60812bbc8ed75ce3e12cdccf3.svg"
               alt="">
          <p>专家服务</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/4f90e9e60812bbc8ed75ce3e12cdccf3.svg"
               alt="">
          <p>小程序</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/ffdef33c968329749533cbd2221f7f51.svg"
               alt="">
          <p>api</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/e0d02d6cfa8b46c4bab9bdb6db0252a5.svg"
               alt="">
          <p>专家服务</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/5e60c656bca78f795dfc506cdb4d0f5f.svg"
               alt="">
          <p>安全</p>
        </div>
      </div>
      <div class="bottom-icon">
        <span>查看云市场所有服务 </span> <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="rno-2-section">
      <div style=" margin-top: 10px;
          margin-bottom: 20px;
          font-size: 32px;
          line-height: 46px;
          color: rgb(0, 0, 0);
          font-weight: 400;
          text-align: center;
          -webkit-font-smoothing: antialiased;">
        打造云计算技术生态
      </div>
      <div class="rno-item">
        <div class="itemList">
          <div>
            <p>腾讯云大学</p>
            <div>腾讯云旗下面向云生态用户的一站式学习成长平台。提供多样化，体系化的线上、线下学习资源。 </div>
            <ul>
              <li>大咖分享</li>
              <li>学习路径</li>
              <li>开发者实验室</li>
            </ul>
          </div>
          <p> 前往腾讯云大学 <i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="itemList">
          <div>
            <p>腾讯云大学</p>
            <div>腾讯云旗下面向云生态用户的一站式学习成长平台。提供多样化，体系化的线上、线下学习资源。 </div>
            <ul>
              <li>大咖分享</li>
              <li>学习路径</li>
              <li>开发者实验室</li>
              <li>学习路径</li>
            </ul>
          </div>
          <p> 前往腾讯云大学 <i class="el-icon-arrow-right"></i></p>
        </div>

        <div class="itemList">
          <div>
            <p>腾讯云大学</p>
            <div> TVP，即腾讯云最具价值专家（Tencent Cloud Valuable Professional），是腾讯云授予云计算领域技术专家的一个奖项。TVP 计划致力打造与行业技术专家的交流平台，构建云计算技术生态，实现“用科技影响世界”的美好愿景。 </div>
          </div>
          <p> 前往腾讯云大学 <i class="el-icon-arrow-right"></i></p>
        </div>
      </div>
    </div>
    <div style=" margin-top: 50px;
      margin-bottom: 20px;
      font-size: 32px;
      line-height: 46px;
      color: rgb(0, 0, 0);
      font-weight: 400;
      text-align: center;
    -webkit-font-smoothing: antialiased;">
      助力各行业客户成功上云的案例
    </div>
    <div class="tab">
      <!-- @tab-click="handleClick" -->
      <!-- <el-tabs v-model="activeName">
        <el-tab-pane name="first">
          <span slot="label">
            <span class="span-box">
              大公司
            </span>
          </span>
          <div class="contentBox">
            <div> <img src="https://main.qcloudimg.com/raw/f3153850bdcc1132a59c3d6be68be8b4.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/9dc4aba20c6572a61e161da7c2588940.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/6619e53bfdbd90e0dcda4fe7271f51c7.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/bc1f8be0e5724c021c16d90c30592698.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/d318dd367798d9b8add1ba9dfb0a3abe.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/08e9963de7c0424493b6f3eeb55560f9.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/c7966a84c67fd07af0d87214d7284ec7.jpg"
                   alt=""></div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label">
            <span class="span-box">
              初创公司
            </span>
          </span>
          <div class="contentBox">
            <div> <img src="https://main.qcloudimg.com/raw/ade96b2de1bf02b5aa56981b81f97081.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/4899518a111a0e5025a9dadd9f1bfca5.jpg"
                   alt=""></div>
            <div> <img src="https://main.qcloudimg.com/raw/4a7ed1fb8ac61689810889c789d74304.jpg"
                   alt=""></div>
            <div> <img src="https://main.qcloudimg.com/raw/6d900357e5aa0adbb17c6d91cb9723ad.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/70e9f0c890eeeed5248791111715459c.jpg"
                   alt=""></div>
            <div> <img src="https://main.qcloudimg.com/raw/b032f107268edbd3dff5e36b718ec079.jpg"
                   alt=""></div>
            <div><img src="https://main.qcloudimg.com/raw/cee4140ac1d4475034fbc7404db1e319.jpg"
                   alt=""></div>
            <div> <img src="https://main.qcloudimg.com/raw/1f1ad3d23c40fce5fe5a011269a90661.jpg"
                   alt=""></div>
            <div> <img src="https://main.qcloudimg.com/raw/885d8aeec058c5534b4dfb9c945eaf8c.jpg"
                   alt=""></div>

          </div>
        </el-tab-pane>
      </el-tabs> -->
      <div style="color: #00a4ff;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        margin-top: 12px;
            text-align: center;">
        <span>
          查看所有客户案例
        </span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>

    <div class="map"
         :style="{'height': mapHeight}">
      <img ref="img"
           src="../../assets/img/Wechat.png"
           alt="">
      <p>腾讯云全球基础设施</p>
      <span>开放 27 个地理区域，运营 54 个可用区，为更多企业提供强有力的技术支持，助力业务飞速拓展</span>
      <div class="mapButton">
        <div class="buttonF">了解全球基础设施</div>
        <div style="color: #00a4ff;
        text-decoration: none;
        font-size: 14px;
        cursor: pointer;
        margin-top: 12px;
            text-align: center;">
          <span>
            查看所有客户案例
          </span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="bottomTitle"
           :style="{'top': mapHeights}">
        <div class="bottomPage">
          <div class="ont">
            专家服务 <i class="el-icon-arrow-right"></i>
            <div> 为客户提供咨询、规划、检测、运维和交付等全生命周期定制化安全整体解决方案 </div>
          </div>
          <div>
            合规性 <i class="el-icon-arrow-right"></i>
            <div> 腾讯云具备充分的安全合规能力，满足众多的标准要求，并已通过系列合规认证 </div>
          </div>
        </div>
      </div>
    </div>

    <div style=" margin-top: 140px;
    margin-bottom: 20px;
        text-align: center;
    font-size: 30px;
    color: #333;
    font-weight: 400;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;">
      可靠，安全，合规的云服务
      <p style="    margin-top: 10px;
    font-size: 16px;
    line-height: 26px;
    color: #999;
    -webkit-font-smoothing: antialiased;">获得众多合规认证</p>
    </div>

    <div class="rno-section-bd">
      <div class="top-icon">
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/e0d02d6cfa8b46c4bab9bdb6db0252a5.svg"
               alt="">
          <p>小程序</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/f6a2caf590c18c5d04306260c5185273.svg"
               alt="">
          <p>基础软件</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/4f90e9e60812bbc8ed75ce3e12cdccf3.svg"
               alt="">
          <p>专家服务</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/4f90e9e60812bbc8ed75ce3e12cdccf3.svg"
               alt="">
          <p>小程序</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/ffdef33c968329749533cbd2221f7f51.svg"
               alt="">
          <p>api</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/e0d02d6cfa8b46c4bab9bdb6db0252a5.svg"
               alt="">
          <p>专家服务</p>
        </div>
        <div class="incon-item">
          <img src="https://main.qcloudimg.com/raw/5e60c656bca78f795dfc506cdb4d0f5f.svg"
               alt="">
          <p>安全</p>
        </div>
        <div class="incon-item">
          <i class="el-icon-more"
             style="font-size: 50px;color: #7d848e"></i>
          <p>更多</p>
        </div>
      </div>
    </div>

    <div class="rno-action-panel-bg-mobile">
      <span>开始体验免费套餐</span>
      <p>立即 注册 领取40+款产品的免费体验套餐，更有 入门中心 提供简明指导教程，伴您快速上云</p>
      <div>免费体检</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      mapHeight: 'auto',
      mapHeights: 'auto',
      swiperJson: [{
        title: '生态研发模式',
        content: '通过独立研发、开源社区、应用商店等多种方式',
        button: '立即选购'
      }, {
        title: '一站服务体系',
        content: '云计算、云存储、云主机、云数据、云大脑、行业解决方案、前后端生态平台等全景产品矩阵，满足产业一站式运营服务。',
        button: '了解情况'
      }, {
        title: '项目共建共享',
        content: '美城智慧企业',
        button: '立即选购'
      }, {
        title: '云市场',
        content: '美城智慧企业',
        button: '了解情况'
      }, {
        title: '产业互联',
        content: '美城智慧企业产业互联平台，是基于美城智慧企业技术能力和产业创新而推出的产业互联一站式服务平台，',
        button: '了解情况'
      }, {
        title: '人工智能',
        content: '美城智慧企业作为产业互联的中枢平台，承载了产业云端数据交互中台的功能，是美城互联智慧生态的技术中台、',
        button: '了解情况'
      }, {
        title: '金融科技',
        content: '赋能中小企业，通过建立基于产业互联的数字化信用、杠杆、风险控制产业金融服务体系，利用数字技术解决中小企业的融资需求。',
        button: '了解情况'
      }],
      rightSwiper: [{
        name: '游戏'
      }, {
        name: '视频'
      }, {
        name: '金融'
      }, {
        name: '网站'
      }, {
        name: '电商'
      }, {
        name: '教育'
      }, {
        name: '小程序·云开发'
      }],
      rightSwiperJson: [{
        title: '游戏',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
        content: '通过独立研发、开源社区、应用商店等多种方式',
        button: '立即选购'
      }, {
        title: '视频',
        content: '腾讯云为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，让您的游戏更稳定、更安全、更好玩。云计算、云存储、云主机、云数据、云大脑、行业解决方案、前后端生态平台等全景产品矩阵，满足产业一站式运营服务。',
        button: '了解情况',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }, {
        title: '金融',
        content: '美城智慧企业',
        button: '立即选购',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }, {
        title: '网站',
        content: '美城智慧企业',
        button: '了解情况',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }, {
        title: '电商',
        content: '美城智慧企业产业互联平台，是基于美城智慧企业技术能力和产业创新而推出的产业互联一站式服务平台，',
        button: '了解情况',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }, {
        title: '教育',
        content: '美城智慧企业作为产业互联的中枢平台，承载了产业云端数据交互中台的功能，是美城互联智慧生态的技术中台、',
        button: '了解情况',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }, {
        title: '小程序·云开发',
        content: '赋能中小企业，通过建立基于产业互联的数字化信用、杠杆、风险控制产业金融服务体系，利用数字技术解决中小企业的融资需求。',
        button: '了解情况',
        titleSpan: '提供游戏从研发到运营全链路解决方案',
      }],
      contentJson: [{
        name: '新手入门',
        contentName: '仅需要几步'
      }, {
        name: 'main 非常怕',
        contentName: '50+昌平'
      }, {
        name: '产品秒杀',
        contentName: '秒杀价格'
      }, {
        name: '域名优惠',
        contentName: '.con优惠20远'
      }],
      indexFlag: 0,
      time: null,
      activeName: 'first',
      rightIndex: 0
    }
  },

  methods: {
    mouseOver () {
      if (this.time) {
        window.clearTimeout(this.time)
      }
    },

    mouseLeave () {
      this.autoSwiper()
    },

    changeSwiper (index) {
      this.indexFlag = index
      window.clearTimeout(this.time)
      this.autoSwiper()
    },

    mouseHover (index) {
      this.rightIndex = index
    },

    autoSwiper () {
      this.time = setInterval(() => {
        if (this.indexFlag > this.swiperJson.length - 2) {
          this.indexFlag = 0
        } else {
          this.indexFlag++
        }
      }, 1000);
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.mapHeight = this.$refs.img.clientWidth / 2.57 + 'px'
      this.mapHeights = this.$refs.img.clientWidth / 2.57 - 40 + 'px'
    })
    this.autoSwiper()
  }
}
</script>

<style lang="scss">
.span-box {
  font-size: 16px;
  text-align: center;
  > p {
    line-height: 28px;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
  }

  > span {
    font-weight: 200;
  }
}

.contentBox {
  width: 100%;
  min-height: 200px;
  > div {
    width: 179px;
    height: 68px;
    float: left;
    margin-right: 20px;

    > img {
      width: 100%;
      height: auto;
    }
  }
}

.product {
  box-sizing: border-box;

  .rno-action-panel-bg-mobile {
    background-color: rgb(0, 137, 255);
    width: 100%;
    height: 263px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 32px;
      line-height: 46px;
      font-weight: 400;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    > p {
      margin-top: 8px;
      font-size: 16px;
      line-height: 26px;
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    > div {
      transition: all 0.2s linear;
      cursor: pointer;
      width: 160px;
      height: 44px;
      color: #fff;
      border: solid 1px #fff;
      line-height: 42px;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      border-color: rgba(255, 255, 255, 0.6);
      text-align: center;
      margin-top: 20px;
    }
    > div:hover {
      background: #fff;
      color: rgb(0, 137, 255);
    }
  }

  .map {
    width: 100%;
    height: auto;
    margin-top: 50px;
    position: relative;
    .bottomTitle {
      width: 100%;
      height: 122px;
      position: absolute;
      left: 0;
      box-sizing: border-box;
      padding: 0 200px;

      .bottomPage {
        display: flex;
        background-color: #fff;
        padding: 26px 36px;
        cursor: pointer;

        border-radius: 2px;
        border: 1px solid #e5e8ed;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
        > div:hover {
          color: #00a4ff;
        }
        .ont {
          border-right: solid 1px #e5e5e5;
        }
        > div {
          font-size: 18px;
          line-height: 28px;
          color: #333;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
          text-align: left;
          box-sizing: border-box;
          padding: 0 30px;

          > div {
            margin-top: 12px;
            font-size: 14px;
            line-height: 24px;
            color: #999;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            max-height: 48px;
            word-wrap: break-word;
          }
        }
      }
    }

    > img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .mapButton {
      width: 200px;
      position: absolute;
      left: 50%;
      bottom: 70px;
      margin-left: -100px;
      text-align: center;

      .buttonF {
        padding-left: 26px;
        padding-right: 26px;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        width: 142px;
        height: 40px;
        border: solid 1px #00a4ff;
        background: #00a4ff;
        border-radius: 2px;
        text-align: center;
        line-height: 40px;
        cursor: pointer !important;
        z-index: 999;
        color: #fff;
        margin-top: 20px;
      }
      .buttonF:hover {
        background: #0999e8;
        border: solid 1px #0999e8;
      }
    }
    // background-image: url("../../assets/img/Wechat.png");
    // background-size: 100% 100%;
    // background-repeat: no-repeat;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    padding-top: 50px;

    > p {
      font-size: 32px;
      line-height: 46px;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
    }

    > span {
      margin-top: 10px;
      font-size: 16px;
      line-height: 26px;
      -webkit-font-smoothing: antialiased;
    }
  }
  .rno-2-section {
    width: 100%;
    height: 475px;
    overflow: hidden;
    // background-image: url(img/recommend/home-developer-bg.png) top center
    //   no-repeat #f7f8fa;
    // background-image: url("https://main.qcloudimg.com/raw/4bde4e6f01b9ce0be45cdaab22a5a187.png");
    background: #f7fafb;
    background-size: cover;
    box-sizing: border-box;
    padding: 30px 200px 0;
    .rno-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .itemList {
        width: 379.66px;
        cursor: pointer;
        height: 279px;
        transition: all 0.5s linear;
        box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
        border: 1px solid #e5e8ed;
        box-sizing: border-box;
        border-radius: 2px;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        > div {
          padding: 32px 32px 0;
          min-height: 200px;
          border-bottom: 1px solid #e5e8ed;
          > p {
            font-size: 24px;
            -webkit-font-smoothing: antialiased;
          }
          > div {
            display: block;
            font-size: 14px;
            color: #666;
            line-height: 24px;
            margin-top: 16px;
          }
          > ul {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            font-size: 14px;
            line-height: 30px;
            li {
              width: 50%;
              color: #666;
            }
            li:before {
              content: "";
              width: 2px;
              height: 2px;
              background-color: #666;
              display: inline-block;
              vertical-align: 4px;
              margin-left: 2px;
              margin-right: 8px;
            }
          }
        }
        > p {
          color: #00a4ff;
          text-decoration: none;
          line-height: 40px;
          font-size: 13px;
          margin-left: 30px;
        }
      }
      .itemList:hover {
        box-shadow: 0 7px 10px rgba(3, 27, 78, 0.06);
      }
    }
  }

  .iconContent {
    width: 100%;
    height: 243px;
    box-sizing: border-box;
    padding: 0 200px;
    text-align: center;
    .top-icon {
      display: flex;
      justify-content: space-between;
      .incon-item {
        width: 128px;
        height: 126px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 20px;
        cursor: pointer;
        > img {
          width: 50px;
        }
        > p {
          font-size: 16px;
          color: #000;
          line-height: 26px;
          height: 26px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 14px;
          transition: all 0.2s linear;
          -webkit-font-smoothing: antialiased;
        }
      }
      .incon-item:hover {
        box-shadow: 0 7px 10px rgba(3, 18, 49, 0.06);
      }
    }
    .bottom-icon {
      color: #00a4ff;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      margin-top: 12px;
    }
  }

  .rno-section-bd {
    width: 100%;
    height: 243px;
    box-sizing: border-box;
    padding: 0 200px;
    text-align: center;
    .top-icon {
      display: flex;
      justify-content: space-between;
      .incon-item {
        width: 128px;
        height: 126px;
        text-align: center;
        box-sizing: border-box;
        padding-top: 20px;
        cursor: pointer;
        > img {
          width: 50px;
        }
        > p {
          font-size: 16px;
          color: #000;
          line-height: 26px;
          height: 26px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 14px;
          transition: all 0.2s linear;
          -webkit-font-smoothing: antialiased;
        }
      }
      .incon-item:hover {
        > p,
        > i {
          color: #00a4ff !important;
        }
      }
    }
  }

  .tab-type {
    width: 100%;
    height: 333px;
    display: flex;
    box-sizing: border-box;
    padding: 0 202px;

    .tab-type-r {
      cursor: pointer;
      // width: 890px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .tab-item {
        box-sizing: border-box;
        padding: 20px;
        vertical-align: top;
        font-size: 14px;
        text-align: left;
        margin-bottom: 12px;
        width: 47%;
        height: 160px;
        border: 1px solid #e5e8ed;
        box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
        .top-tab {
          display: flex;
          justify-content: space-between;
          > p {
            font-size: 18px;
            color: #000;
            line-height: 28px;
            width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
          }
          > div {
            display: flex;
            > div {
              background: #fff;
              border: 1px solid #e5e8ed;
              line-height: 20px;
              text-align: center;
              padding: 0 8px;
              font-size: 12px;
              color: #999;
              margin-left: 10px;
            }
          }
        }
        .content {
          font-size: 14px;
          color: #666;
          line-height: 24px;
          height: 48px;
          overflow: hidden;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          max-height: 48px;
          word-wrap: break-word;
          margin-top: 4px;
        }

        > p {
          color: #ff7800;
          font-size: 24px;
          line-height: 32px;
          height: 32px;
          -webkit-font-smoothing: antialiased;
          > del {
            color: #b0b0b0;
            font-size: 14px;
            line-height: 24px;
            margin-left: 4px;
          }
        }
      }
      .tab-item:hover {
        box-shadow: 0 7px 10px rgba(3, 27, 78, 0.06);
        .top-tab {
          > p {
            color: #00a4ff;
          }
        }
      }
    }

    .tab-type-l {
      width: 290px;
      min-width: 290px;
      height: 332px;
      background-color: #eee;
      background-size: cover;
      border: 1px solid #e5e8ed;
      box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
      background-image: url("https://main.qcloudimg.com/raw/4bde4e6f01b9ce0be45cdaab22a5a187.png");
      padding: 40px;
      text-align: center;
      box-sizing: border-box;
      > p {
        font-size: 24px;
        line-height: 32px;
        color: #333;
        height: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-font-smoothing: antialiased;
        text-align: left;
      }

      > div {
        margin-top: 10px;
        font-size: 14px;
        line-height: 24px;
        color: #666;
        text-align: left;
      }
    }
  }

  .swiper {
    width: 100%;
    height: 390px;
    background: #191e2c;
    position: relative;
    z-index: 1;
    background-image: url("https://main.qcloudimg.com/raw/6cf2d1788b69eea176d95979f67f1d3b.jpg");
    background-position: center top;
    background-size: cover;
    overflow: hidden;
    .swiper-item {
      width: 100%;
      height: 100%;
      color: #fff;
      box-sizing: border-box;
      padding-top: 70px;
      padding-left: 200px;
      > span {
        display: inline-block;
        line-height: 28px;
        font-size: 16px;
        color: #f5f7fa;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 56px;
        word-wrap: break-word;
        -webkit-font-smoothing: antialiased;
        max-width: 480px;
      }
      > p {
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 18px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-height: 56px;
        word-wrap: break-word;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
      }
      > div {
        width: 142px;
        height: 40px;
        border: solid 1px #fff;
        border-radius: 2px;
        text-align: center;
        line-height: 40px;
        cursor: pointer !important;
        z-index: 999;
        margin-top: 20px;
      }
      > div:hover {
        background: #fff;
        color: #000;
      }
    }

    .swiper-banner {
      display: flex;
      width: 100%;
      position: absolute;
      left: 200px;
      bottom: 80px;
      .swiper-button {
        cursor: pointer;
        height: 3px;
        width: 30px;
        border-radius: 2px;
        margin: 0 5px;
      }
    }
    .s_right {
      width: 280px;
      height: 273px;
      position: absolute;
      right: 200px;
      top: 50%;
      margin-top: -156.5px;
      > div {
        width: 100%;
        height: 83px;
        margin-bottom: 10px;
        box-sizing: border-box;
        display: block;
        padding: 16px 0 16px 20px;
        text-decoration: none;
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        > p {
          box-sizing: border-box;
          max-width: 62px;
          border: 1px solid #04c8dc;
          padding: 0 6px;
          font-size: 12px;
          line-height: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #04c8dc;
        }
        > p:hover {
          background: #04c8dc;
          color: #000;
        }
        > span {
          margin-top: 4px;
          font-size: 16px;
          line-height: 26px;
          color: rgba(255, 255, 255, 0.8);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 26px;
          word-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }
      }
    }
  }

  .content-title {
    width: 100%;
    height: 92px;
    position: absolute;
    top: 420px;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 0 160px;
    .contentItem {
      width: 279px;
      height: 92px;
      border: solid 1px #ccc;
      background: #fff;
      border-radius: 3px;
      box-sizing: border-box;
      align-items: center;
      padding-left: 20px;
      display: flex;
      align-items: center;
      > i {
        font-size: 48px;
        margin-right: 20px;
      }
      > div {
        width: 150px;
        > span {
          position: relative;
          margin-bottom: 2px;
          font-size: 18px;
          line-height: 28px;
          color: #333;
          height: 26px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-font-smoothing: antialiased;
          font-weight: 400;
          transition: all 0.2s linear;
        }
        > p {
          font-size: 14px;
          line-height: 24px;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 400;
        }
      }
    }
    .contentItem:hover {
      cursor: pointer;
      box-shadow: 0px 0px 5px #ccc;
      > div {
        > span {
          color: #409eff;
        }
      }
    }
  }

  .tab {
    width: 100%;
    box-sizing: border-box;
    padding: 0 200px;
  }

  .tab-content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 200px;
    .tab-content-item {
      border-radius: 2px;
      width: 27%;
      cursor: pointer;
      height: 90px;
      padding-top: 20px;
      box-sizing: border-box;
      padding-left: 10px;
      display: inline-block;
      vertical-align: top;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid transparent;
      transition: all 0.2s linear;
      > p {
        color: #000;
        font-size: 14px;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
      }

      > span {
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        -webkit-font-smoothing: antialiased;
      }
    }

    .tab-content-item:hover {
      box-shadow: 0px 0px 5px #ccc;
    }
  }

  .experience {
    width: 100%;
    height: 121px;
    display: flex;
    margin-top: 10px;
    align-items: center;
    background-color: #00a4ff;
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#006EFF, endColorstr=#00A4FF);
    background-image: linear-gradient(227deg, #00a4ff 0, #006eff 88%);
    background-size: auto 100%;
    min-height: 108px;
    text-align: center;
    margin: 10 auto 0;
    justify-content: center;
    > p {
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      color: #fff;
    }
    > div {
      cursor: pointer;
      width: 136px;
      height: 40px;
      border: solid 1px #fff;
      text-align: center;
      line-height: 40px;
      color: #fff;
      font-size: 12px;
      margin-left: 30px;
    }
  }

  .column-swiper {
    width: 100%;
    height: 611px;
    background-color: rgb(67, 76, 89);
    background-image: url(https://main.qcloudimg.com/raw/fba130b32300b8d2def167a0696ada2c.jpg);
    background-position: center top;
    background-size: cover;
    position: relative;
    box-sizing: border-box;
    padding: 100px 200px;
    .right-swiper {
      width: 221px;
      height: 396px;
      position: absolute;
      right: 300px;
      top: 50%;
      margin-top: -190px;
      .bottom-swiper {
        margin-top: 5px;
        color: #fff;
        cursor: pointer;
        width: 100%;
        height: 36px;
        line-height: 36px;
        box-sizing: border-box;
        padding-left: 20px;
        line-height: 36px;
      }
      .top-swiper {
        color: #fff;
        padding-bottom: 4px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        .right-item {
          cursor: pointer;
          width: 100%;
          height: 36px;
          line-height: 36px;
          box-sizing: border-box;
          padding-left: 20px;
          line-height: 36px;
          > i {
            margin-left: 10px;
            font-weight: 600;
          }
        }
        .right-item-hover {
          color: #00a4ff;
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }

    .contentSwiper {
      width: 100%;
      height: 100%;
      .itemSwiper {
        width: 800px;
        height: 100%;
        > title {
          color: #fff;
          font-size: 24px;
          line-height: 32px;
          height: 32px;
          margin-bottom: 8px;
          -webkit-font-smoothing: antialiased;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        > p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 24px;
          margin-bottom: 28px;
        }

        > span {
          font-size: 14px;
          color: #f5f7fa;
          line-height: 24px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        > div {
          width: 142px;
          height: 40px;
          border: solid 1px #00a4ff;
          background: #00a4ff;
          border-radius: 2px;
          text-align: center;
          line-height: 40px;
          cursor: pointer !important;
          z-index: 999;
          color: #fff;
          margin-top: 20px;
        }
        > div:hover {
          background: #0d9ae8;
        }
      }
    }
  }

  .rno-clip-mod {
    height: 100px;
  }

  .rno-clip-mod:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -60px;
    width: 100%;
    height: 100px;
    -webkit-clip-path: polygon(0 0, 70% 30%, 0 100%);
    clip-path: polygon(0 0, 70% 30%, 0 100%);
    background-color: #f5f7fa;
  }

  .rno-clip-mod:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -60px;
    width: 100%;
    height: 100px;
    -webkit-clip-path: polygon(100% 40%, 100% 80%, 35% 16%);
    clip-path: polygon(100% 40%, 100% 80%, 35% 16%);
    background-color: #dcdfe8;
  }
}
</style>
