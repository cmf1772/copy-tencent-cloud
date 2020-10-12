<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="中国统一节日元宵节的起因由来是怎样的？"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <div class="right-menu-top">
            <img src="@/assets/images/icon/index/search.png" alt="">
            <img src="@/assets/images/icon/index/more.png" alt="">
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="item">
        <div class="author">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
          <span class="star">时尚达人</span>
        </div>
        <div class="center">
          <span>节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排</span>
        </div>
        <div class="footer">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />2
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
          <div class="time">22分钟前</div>
        </div>
      </div>
      <div class="item">
        <div class="img-lists" :style="`grid-template-columns: repeat(${1 < 3 ? 1:3},1fr);`">
          <img src="@/assets/images/index/banner1.jpg" alt  style="height:2.62rem"/>
        </div>
        <div class="author">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
          <span class="star">时尚达人</span>
        </div>
        <div class="center">
          <span>节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排</span>
        </div>
        <div class="footer">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />2
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
          <div class="time">22分钟前</div>
        </div>
      </div>
      <div class="item">
        <div class="author">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
          <span class="star">时尚达人</span>
        </div>
        <div class="center">
          <span>节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排</span>
        </div>
        <div class="footer">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />2
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
          <div class="time">22分钟前</div>
        </div>
      </div>
      <div class="item">
        <div class="img-lists" :style="`grid-template-columns: repeat(${3 < 3 ? 3:3},1fr);`">
          <img src="@/assets/images/index/banner1.jpg" alt   style="height:1.48rem"/>
          <img src="@/assets/images/index/banner2.jpg" alt  style="height:1.48rem" />
          <img src="@/assets/images/index/banner4.jpg" alt   style="height:1.48rem"/>
        </div>
        <div class="author">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
          <span class="star">时尚达人</span>
        </div>
        <div class="center">
          <span>节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排</span>
        </div>
        <div class="footer">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />2
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
          <div class="time">22分钟前</div>
        </div>
      </div>
      <div class="item">
        <div class="img-lists" :style="`grid-template-columns: repeat(${2 < 3 ? 2:3},1fr);`">
          <img src="@/assets/images/index/banner1.jpg" alt style="height:1.9rem" />
          <img src="@/assets/images/index/banner3.jpg" alt  style="height:1.9rem"/>
        </div>

        <div class="author">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
          <span class="star">时尚达人</span>
        </div>
        <div class="center">
          <span>节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排</span>
        </div>
        <div class="footer">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />2
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
          <div class="time">22分钟前</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        require("@/assets/images/index/banner1.jpg"),
        require("@/assets/images/index/banner2.jpg"),
        require("@/assets/images/index/banner3.jpg")
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>
<style lang="less" scoped>
.main {
  /deep/ .right-menu-top {
    display: flex;
    align-items: center;
    img{
      height: 0.3rem;
      margin-left: 0.7rem;
    }
  }
}
.container {
  padding: 0 0.45rem;
  & .item:not(:last-child) {
    border-bottom: 1px solid #f7f7f7;
  }
  .item {
    .img-lists {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.1rem;
      margin: 0.1rem 0;
      margin-bottom: 0.34rem;
      img {
        width: 100%;
        height: 1.48rem;
        border-radius: 3px;
      }
    }
    padding: 0.4rem 0;
    .author {
      display: flex;
      align-items: center;
      .icon {
        display: inline-flex;
      }
      .name {
        font-weight: 600;
        color: #000;
        &::after {
          position: absolute;
          height: 70%;
          width: 1px;
          content: "";
          display: block;
          background: #9c9c9c;
          right: -0.1rem;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
      span {
        font-size: 0.24rem;
        position: relative;
        color: #9c9c9c;
        margin-left: 0.2rem;
      }
      img {
        width: 0.41rem;
        height: 0.41rem;
        border-radius: 30px;
      }
    }
    .center {
      margin: 0.2rem 0 0 0;
      span {
        font-size: 0.28rem;
        line-height: 0.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 3; //显示的行
      }
    }
      .footer {
    display: flex;
    padding: 0.3rem 0;
    font-size: 0.26rem;
    color: #999;
    justify-content: space-between;
    .time {
      flex: 1;
      font-size: 0.24rem;
      text-align: right;
    }
    ul {
      width: 50%;
      display: flex;
      li {
        margin-right: 0.4rem;
      }
      span{
        display: flex;
        align-items: baseline;

      }
      img{
        width: 0.25rem;
        margin-right: 0.1rem;
      }
    }
  }
  }
}
</style>