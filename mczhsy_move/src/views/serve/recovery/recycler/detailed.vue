<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="回收员"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>

        <template #right>
          <img src="@/assets/images/icon/index/setting.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <van-cell title="姓名" :value="stateUserInfo.member_name" size="large" />
      <van-cell title="性别" :value="judgeSex(stateUserInfo.member_sex)" size="large" />
      <van-cell title="电话" :value="stateUserInfo.member_id" size="large" />
      <van-cell title="紧急联系人" :value="userInfo.link_name" size="large" />
      <van-cell title="紧急联系人电话" :value="userInfo.link_mobile?userInfo.link_mobile: '无'" size="large" />
      <van-cell title="详细地址" :value="userInfo.address" size="large" />
      <van-cell title="回收类别" value="东ad/东阿萨/懂啊" size="large" />
      <van-cell title="负责区域" :value="address" size="large" />
      <van-cell title="身份证号" :value="userInfo.id_card" size="large" />
      <van-cell title="身份认证" size="large">
        <template #default>
          <div class="imgs">
            <img :src="userInfo.card_front" />
            <img :src="userInfo.card_back" />
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:{},
      stateUserInfo:{},
      address:null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  },
  // 计算性别
  computed:{ 
    judgeSex(){
      return (sex) => {
        if( sex == 1){
           return '男'
        }else{
           return '女'
        }
      }
    }
  },
  created(){
    console.log(11);

    this.address = localStorage.getItem("_M_Recycler_Area");
    // 登录状态
    if(!this.$store.state.isLogin){
      this.$toast.fail("请先登录");
      this.$router.replace({
        path:'/login'
      })
      return;
    }
    this.stateUserInfo = this.$store.state.userInfo
    console.log(this.stateUserInfo);
    this.$api.serve.recovery.getRecyclerInfo({
      uid : this.$store.state.user.user_id
    })
    .then( res => {
      this.userInfo = res[0]
      console.log(this.userInfo);
    })
    .catch( err => {
      console.log(err);
    })
  }
};
</script>

<style lang="less" scoped>
.container {
  .van-cell {
    padding: 0.35rem 0.45rem;
  }

  /deep/ .van-cell__title {
    max-width: 1.2rem;
    text-align-last: justify;
    text-align: justify;
    span {
      font-size: 0.3rem;
      color: #666;
    }
  }
  .van-cell:nth-child(5) {
    .van-cell__title {
      text-align-last: left;
      text-align: left;
    }
  }
  /deep/ .van-cell__value {
    text-align: left;
    color: #000;
    padding-left: 0.4rem;
  }
  .imgs {
    padding: 0.1rem 0.2rem;
    border: 1px solid #ccc;
    img {
      margin: 0.1rem 0;
      width: 100%;
      max-height: 200px;
    }
  }
}
</style>