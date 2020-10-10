
<template>
  <!-- 动态首页 -->
  <div class="main">
    <div class="top">
      <van-nav-bar title="动态" left-arrow @click-left="onClickLeft">
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>


      <el-dropdown  @command="handleCommand">
            <img src="@/assets/images/icon/index/xiangji.png" alt="">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="redynamic">动态</el-dropdown-item>
              <el-dropdown-item command="rearticle">文章</el-dropdown-item>
              <el-dropdown-item>达人</el-dropdown-item>
              <el-dropdown-item>直播</el-dropdown-item>
              <el-dropdown-item>文章</el-dropdown-item>
              <el-dropdown-item>资料</el-dropdown-item>
              <el-dropdown-item>用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
    </div>

    <!-- nav导航 -->
    <div class="wrap">
      <div class="nav">
        <div class="adress">成都</div>
        <div class="center-nav">
          <ul>
            <li v-for="(item,index) in navList" :key="index" @click="changeActive(index,$event)">
              <span :class="index == active?'active':''">{{item.board_title}}</span>
            </li>
          </ul>
        </div>
        <div class="add"><van-icon name="plus" size=".32rem"/></div>
      </div>
    </div>

    <div class="content">
      <!-- 每一篇文章 -->
      <div class="item" v-for="(item,index) in navList[active].list" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">{{item.author}}</span>
              <span class="star-name">时尚博主</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">{{item.board_subject}}</div>
          <div class="star-view">
            <span class="star">#微博年度奖#</span><br/>
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style='`grid-template-columns: repeat(${1 < 2 ? 1:(1<5?2:3)},1fr);`'>
              <li :style="{'height':1 == 1?'6rem':'2rem'}">
                <img :src="item.cover"  />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">{{item.register_date}}</div>
          <ul>
            <li>
              <span><img src="@/assets/images/icon/fenxiang.png" alt=""> 4</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/speak.png" alt="">2</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/ding.png" alt=""> 4</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="item" v-for="(item,index) in 2" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
              <span class="star-name">时尚博主</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <span class="star">#微博年度奖#</span><br/>
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style='`grid-template-columns: repeat(${list.length < 2 ? 1:(list.length<5?2:3)},1fr);`'>
              <li v-for="(item,index) in list" :key="index">
                <img :src="item.src" :style="{'height':list.length == 1?'6rem':'2rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span><img src="@/assets/images/icon/fenxiang.png" alt=""> 4</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/speak.png" alt="">2</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/ding.png" alt=""> 4</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item" v-for="(item,index) in 2" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
              <span class="star-name">时尚博主</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <span class="star">#微博年度奖#</span><br/>
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style='`grid-template-columns: repeat(${list2.length < 2 ? 1:(list2.length<5?2:3)},1fr);`'>
              <li v-for="(item,index) in list2" :key="index">
                <img :src="item.src" :style="{'height':list2.length == 1?'6rem':'2rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span><img src="@/assets/images/icon/fenxiang.png" alt=""> 4</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/speak.png" alt="">1</span>
            </li>
            <li>
              <span><img src="@/assets/images/icon/ding.png" alt=""> 4</span>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "dynamic",
  data() {
    return {
      navList: ["榜单", "美食", "社会", "艺术", "汽车", "社会", "艺术"],
      list: [
        {
          src: require("@/assets/images/index/banner4.jpg")
        },
      ],
      list2: [
        {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B384664.jpg")
        },
         {
         src: require("@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/p2466554335.jpg")
        },
         {
         src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg")
        },
      ],
      option: {
        slidesPerView: 5,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true
      },
      value1: "",
      options: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      active:0
    };
  },
  created(){
    this.$api.index.getNewsList()
      .then(res => {
        console.log(res);
        this.navList = res
      })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    forward(){
      this.$router.push({
        name:'follow'
      })
    },
    handleCommand(name){
      this.$router.push({
        name
      })
    },
    changeActive(index,el){
      this.active = index;
    }
  }
};
</script>
<style lang="less" scoped>
/deep/ .el-popper[x-placement^=bottom] .popper__arrow::after{
  border-color:#000;
}
.top{
  position: relative;
  .el-dropdown{
    position: absolute;
    right: 0.45rem;
    top: 50%;
    z-index: 9999;
    transform: translate(0, -50%);
  }
  /deep/ img{
    height: 0.32rem;
  }
}
.wrap {
  padding:.2rem  0.45rem;
}
// 中间导航
.center-nav {
  flex: 1;
  overflow: scroll;

  ul {
    display: flex;
    min-width: 350px;
    padding: 0.2rem;
  }
  li {
    font-size: 0.34rem;
    line-height: 0.3rem;
    margin-right: .3rem;
    word-break: keep-all;
    color: #B5B5B5;
    .active {
      color:#000;
      position: relative;
      &::after{
        content:'';
        position: absolute;
        width: 60%;
        height: .06rem;
        background: #C3AB87;
        bottom: -.05rem;
        left: 50%;
        transform: translate(-50%,0);
      }
    }
  }
}

// 导航
.nav {
  overflow: hidden;
  max-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    .add{
        min-width: .6rem;
    text-align: center;
  }
  .adress {
    min-width: 20px;
    font-size: 0.28rem;
    font-weight: 400;
    padding: 0 0.2rem;
  }
}

// 每一篇
.content {
  padding: 0 .45rem;
  .star-view{
    font-size: .23rem;
    padding: 0 .2rem;
    padding-bottom: 0.2rem;
    p{
      line-height: .36rem;
      margin-bottom: 0.2rem;
      color: #777777;
    }
    .star{
      color: #C3AB87;
      margin: 0 0 .2rem 0;
      display: inline-block;
    }
  }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .7rem 0 0.1rem 0;
    .icon {
      width: .92rem;
      height: .92rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;
      .star {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .star-name {
          font-size: 0.24rem;
          margin-top: .05rem;
          margin-left: 0.22rem;
          color: #999;
        }
      }
      .name {
        font-size: 0.32rem;
        margin-left: 0.22rem;
        font-weight: 600;
      }
    }
    .follow {
      background-color: #f8f5f0;
      color: #c3ab87;
      font-size: 0.28rem;
      width: 1.37rem;
      height: 0.63rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
    }
  }
  .value {
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
  .photos {
    width: 100%;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      li {
        display: flex;
        align-content: center;
        justify-content: center;
        overflow: hidden;
        img {
          width: 100%;
          border-radius: 0.05rem;
          overflow: hidden;
          height: auto;
        }
      }
    }
  }
  .footer {
    display: flex;
    padding: 0.3rem 0;
    font-size: 0.26rem;
    color: #A1A4AF;
    .time {
      flex: 1;
      font-size: .24rem;
    }
    ul {
      width: 50%;
      display: flex;
      justify-content: space-around;
      li{margin-left: 0.2rem;}
      span{
        display: flex;
        align-items: baseline;

      }
      img{
        width: 0.3rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>