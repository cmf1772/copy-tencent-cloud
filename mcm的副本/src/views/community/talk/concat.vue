<template>
  <div class="main">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-arrow title="朋友列表">
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>
      <el-dropdown  trigger="click">
        <span class="el-dropdown-link">
          <img src="@/assets/images/icon/index/add.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">假朋友</el-dropdown-item>
          <el-dropdown-item icon="el-icon-user">建群聊</el-dropdown-item>
          <el-dropdown-item icon="el-icon-user">面对面建群</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="serach-t">
      <search></search>
    </div>
    <div class="container">
      <van-index-bar>
        <van-index-anchor index="A" />
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙1</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙2</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙3</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙4</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙5</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙6</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙7</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">A正龙8</span>
            </div>
          </div>
        </div>
        <van-index-anchor index="B" />
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">B正龙</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">B正龙</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">B正龙</span>
            </div>
          </div>
        </div>
        <van-index-anchor index="C" />
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">C正龙</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">C正龙</span>
            </div>
          </div>
        </div>
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div class="star">
              <span class="name">C正龙</span>
            </div>
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.top{
  position: relative;
  .el-dropdown{
    position: absolute;
    right: 0.45rem;
    top: 50%;
    z-index: 9999;
    transform: translate(0, -50%);
    /deep/ img{
      height: 0.32rem;
    }
    .el-dropdown-menu{
      display: flex;
      align-items: center;
      /deep/ li{
        display: flex;
        align-items: center;
      }
    }
  }
}
.serach-t {
  padding: 0.2rem;
  margin-bottom: 0.2rem;
}
.container {
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem .45rem;
    .icon {
      width: 0.87rem;
      height: 0.87rem;
      border-radius: 50%;
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
      }
      .name {
        font-size: 0.32rem;
        margin-left: 0.3rem;
        font-weight: 600;
      }
    }
  }
}
</style>