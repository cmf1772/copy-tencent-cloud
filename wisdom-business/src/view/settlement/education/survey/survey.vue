<template>
  <div class="survey flex">
    <div class="left">
      <div class="flex">
        <div class="c_box"
             style="flex: 1">
          <div class="flexJC">
            <p class="text">有赞商家 <span class="minText">不打烊 <i class="el-icon-s-shop"></i></span></p>
            <p class="text s blueColor">更多经营建议</p>
          </div>
          <div class="bg_color flex">
            <div style="width: 50%"
                 class="">
              <span class="text mr">商家案例</span> <span class="minText">8年发展32个校区、月销售额破百万</span>
            </div>
            <div style="width: 50%"
                 class="">
              <span class="text mr">智慧教育</span> <span class="minText">打通微博小店，助力切入亿级流量池</span>
            </div>
            <div style="width: 50%"
                 class="mt">
              <span class="text mr">有赞头条</span> <span class="minText">拾伍课堂借力有赞教育释放运营成本</span>
            </div>
            <div style="width: 50%"
                 class="mt">
              <span class="text mr">有赞说</span> <span class="minText">1天亏1万的扭转，他家憋啥大招了？</span>
            </div>
            <div style="width: 50%"
                 class="mt mb">
              <span class="text mr">教育课程</span> <span class="minText">给校长们上一节“没听过的”电商课</span>
            </div>
            <div style="width: 50%"
                 class="mt mb">
              <span class="text mr">产品动态</span> <span class="minText">学员裂变分享攒学费功能上线</span>
            </div>
          </div>
        </div>
        <div class="c_box"
             style="width: 300px; margin-left: 20px">
          <div class="flexJC">
            <p class="text">推广<span class="minText">不打烊</span></p>
            <p class="text s blueColor">更多推广</p>
          </div>
          <div class="conent_box flexJC s"
               style="padding: 20px 10px">
            <p class="text">微信直播用爱逛</p>
            <p class="minText">火热招商中 <i class="el-icon-arrow-right"></i></p>
          </div>
          <div class="flexJC">
            <div class="conent_box s minText"
                 style="padding: 20px 10px; width:140px;text-align:center">
              我要去学习
            </div>
            <div class="conent_box s minText"
                 style="padding: 20px 10px; width:140px;text-align:center">
              我要上推广
            </div>
          </div>
        </div>
      </div>
      <div class="c_box">
        <div class="flexJC">
          <p class="text">实时概况<span class="minText"
                  style="margin-left: 10px">更新时间：2020-11-17 10:46:45 <i class="el-icon-view s"></i></span></p>
          <p class="text blueColor">编辑</p>
        </div>
        <div class="flexJC">
          <div class="flex mt"
               style="width: 50%">
            <div style="width: 50%">
              <p class="minText">支付订单数</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
            <div style="width: 50%">
              <p class="minText">支付金额(元)</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0.00</p>
              <p class="minText">昨日：0.00</p>
            </div>
            <div style="width: 50%"
                 class="mt">
              <p class="minText">新增预约数</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
            <div style="width: 50%"
                 class="mt">
              <p class="minText">新增线索数</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
          </div>
          <div class="flex mt"
               style="width: 50%">
            <div style="width: 50%">
              <p class="minText">报名学员数</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
            <div style="width: 50%">
              <p class="minText">试听人次</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0.00</p>
              <p class="minText">昨日：0.00</p>
            </div>
            <div style="width: 50%"
                 class="mt">
              <p class="minText">应到人次</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
            <div style="width: 50%"
                 class="mt">
              <p class="minText">课时消耗数</p>
              <p class="text"
                 style="font-size: 20px; margin: 5px 0px;">0</p>
              <p class="minText">昨日：0</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div style="flex: 1"
             class="c_box flexColumn">
          <div class="flexJC">
            <p class="text">常用功能</p>
            <p class="text blueColor">编辑</p>
          </div>
          <div class="flex"
               style="flex: 1">
            <div style="width: 33%; height: 50px"
                 v-for="i in 9"
                 :key="i"
                 class="flexCC mt s">
              <i class="el-icon-headset mr boxs"></i>
              <p class="text">我的线索</p>
            </div>
          </div>
        </div>
        <div class="c_box flexColumn"
             style="width: 55%; margin-left: 20px">
          <div class="flexJC">
            <p class="text">智能助手</p>
            <p class="text blueColor">更多</p>
          </div>
          <div style="flex: 1">
            <div class="flexJC"
                 v-for="i in 5"
                 style="line-height: 40px"
                 :key="i">
              <p class="text"><span class="minText blueColor mr">课程</span>1门课程未创建对应线下课</p>
              <span class="text blueColor s">立即创建</span>
            </div>

          </div>
        </div>
      </div>

      <div class="c_box">
        <p class="text">经营建议</p>
        <div class="flexJC mt">
          <div class="item  s flexC">
            <p>视频直播</p>
            <span>打通线上线下教学场景</span>
          </div>
          <div class="item  s flexC"
               style="background-color: #0177d4;">
            <p>转介绍</p>
            <span>老带新，实现学员翻倍增长</span>
          </div>
          <div class="item  s flexC"
               style="background-color: #4c54bc;">
            <p>家校圈</p>
            <span>家校联通，促进口碑传播</span>
          </div>
          <div class="item  s flexC"
               style="background-color: #c53d1c;">
            <p>多人拼团</p>
            <span>裂变式营销玩法</span>
          </div>
        </div>
      </div>

      <div class="c_box">
        <p class="text">学习交流</p>
        <div class="flex mt">
          <div style="width:33%"
               v-for="i in 6"
               :key="i"
               class="flex mt">
            <i class="el-icon-files boxs"
               style="width:40px; height:40px; font-size: 20px; line-height: 40px"></i>
            <div style="margin-left: 5px">
              <p class="text">商家社区</p>
              <p class="minText"
                 style="margin-top: 2px; ">百万商家互通互助</p>
            </div>
          </div>
        </div>
      </div>

      <div class="c_box">
        <p class="text">更多服务</p>
        <div class="flexJC mt">
          <div style="width:70px;text-align: center"
               v-for="i in 9"
               :key="i"
               class="mt">
            <i class="el-icon-files boxs"
               style="width:30px; height:30px; font-size: 20px; line-height: 30px; margin: 0 auto"></i>
            <div style="margin-top: 5px">
              <p class="text">零售</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="c_box flexCC">
        <img src="@/assets/img/wx.jpg"
             style="width: 40px; margin-right: 10px"
             alt="">
        <div>
          <p class="text"
             style="font-size: 18px">在线客服</p>
          <p class="minText">有赞客服为你排忧解难</p>
        </div>
      </div>
      <div class="c_box flexCC">
        <img src="@/assets/img/wx.jpg"
             style="width: 40px; margin-right: 10px"
             alt="">
        <div>
          <p class="text"
             style="font-size: 18px">桌面在线客服</p>
          <p class="minText">即时应答客户在线咨询</p>
        </div>
      </div>
      <div class="c_box flexCC">
        <img src="@/assets/img/wx.jpg"
             style="width: 40px; margin-right: 10px"
             alt="">
        <div>
          <p class="text"
             style="font-size: 18px">移动客户端</p>
          <p class="minText">使用手机、Pad管理店铺</p>
        </div>
      </div>
      <div class="c_box flexCC">
        <img src="@/assets/img/wx.jpg"
             style="width: 40px; margin-right: 10px"
             alt="">
        <div>
          <p class="text"
             style="font-size: 18px">商家小程序</p>
          <p class="minText">老师高效处理上课日程</p>
        </div>
      </div>

      <div class="c_box">
        <div class="title flexJC">
          <p class="text">产品动态</p>
          <p class="minText">更多</p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 8"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss>9/23</p>
          </li>
        </ul>
      </div>

      <div class="c_box">
        <div class="title flexJC">
          <p class="text">学习中心</p>
          <p class="minText">更多</p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 2"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss>9/23</p>
          </li>
        </ul>
      </div>

      <div class="c_box">
        <div class="title flexJC">
          <p class="text">规则中心</p>
          <p class="minText">更多</p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 3"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss>9/23</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'survey'
}
</script>

<style lang="scss" scoped>
.survey {
  overflow: auto;
}
.boxs {
  display: block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: coral;
  color: #fff;
  border-radius: 3px;
}
.left {
  flex: 1;
}
.right {
  width: 250px;
  height: 100%;
  margin-left: 20px;
}
.item {
  width: 246px;
  height: 120px;
  background-color: #22a266;
  border-radius: 4px;
  > p {
    color: #fff;
    font-size: 20px;
  }

  > span {
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
  }
}
</style>