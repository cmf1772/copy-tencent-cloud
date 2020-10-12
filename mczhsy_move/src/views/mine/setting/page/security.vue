<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="安全中心" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <van-cell-group>
        <div class="title">账号</div>
        <van-cell title="指纹支付" label value="修改" is-link>
          <template #label>
            <div class="value">
              安全等级：
              <span>中</span>
            </div>
          </template>
        </van-cell>
        <van-cell title="账号绑定管理" is-link value="绑定/解绑" />
        <van-cell title="修改手机号码" is-link value="1333****785" />
      </van-cell-group>
      <van-cell-group>
        <div class="title">
          账号
          <div class="value">
            风险等级：
            <span>中</span>
          </div>
        </div>
        <van-cell title="最近登录记录" is-link />
        <van-cell title="账号相关答疑" is-link />
        <van-cell title="注销账号" is-link  value="注销后无法恢复，请谨慎操作"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: false,
      checked2: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    myFn(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .van-cell-group{
    margin-bottom: 0.5rem;
  }
  .title {
    display: flex;
    font-size: 0.27rem;
    padding: 0.2rem .45rem;
    border-bottom: 1px solid #efefef;
    justify-content: space-between;
    font-weight: bold;
    .value {
      font-size: 0.2rem;
      font-weight: 400;
      display: flex;
      align-items: center;
      span {
        color: #c3ab87;
      }
    }
  }
}
.van-cell:not(:last-child)::after,.van-cell-group::after  {
  border: none;
}
.van-cell {
  padding: 0.36rem 0.45rem;
  font-size: .3rem;
  /deep/ .value {
    font-size: .21rem;
    span {
      color: #c3ab87;
    }
  }
  /deep/ .van-cell__value {
    flex: none;
    min-width: 0.6rem;
  }
}
</style>