<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="小店设置" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="fn-list">
        <ul>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img1.png" />
                  <span class="custom-title">小店名称</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img2.png" />
                  <span class="custom-title">商品分类</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img3.png" />
                  <span class="custom-title">小店简介</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img4.png" />
                  <span class="custom-title">店招图片</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img5.png" />
                  <span class="custom-title">自动回复</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img6.png" />
                  <span class="custom-title">语音电话</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link >
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/shop/img7.png" />
                  <span class="custom-title">认证信息</span>
                </div>
              </template>
            </van-cell>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.container{
  padding: 0 .45rem;
  .fn-list {
    padding: 0.2rem 0;
  .van-cell {
    padding: 0.36rem 0;
    font-size: .3rem;
  }
  li {
    .item {
      display: flex;
      align-items: center;
      img {
        width: 0.5rem;
        margin-right: 0.25rem;
      }
      // .custom-title {
      //   margin-left: 0.1rem;
      // }
    }
  }
}
}
</style>