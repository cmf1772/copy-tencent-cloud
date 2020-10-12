<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="个人信息" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
           
        </template>
      </van-nav-bar>
    </div>

    <div class="container" v-if="user">
      <van-cell title="头像" is-link>
        <template #default>
          <div class="right">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
        </template>
      </van-cell>
      <van-cell title="名字" is-link>
        <template #default>
          <div class="right">
            <span>{{user.member_name | filterEmpty}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="微信号" is-link>
        <template #default>
          <div class="right">
            <span>wxid_bayernmunich</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="我的二维码" is-link>
        <template #default>
          <div class="right">
            <van-icon name="qr" size=".38rem" />
          </div>
        </template>
      </van-cell>
      
      
      <van-cell title="性别" is-link>
        <template #default>
          <div class="right">
            <span>{{ user.member_sex | filterSex}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="QQ" is-link>
        <template #default>
          <div class="right">
            <span>{{user.qq | filterEmpty}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="EMAIL" is-link>
        <template #default>
          <div class="right">
            <span>{{user.member_email | filterEmpty}}</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="地区" is-link>
        <template #default>
          <div class="right">
            <span>{{user.province | filterEmpty}}-{{user.city | filterEmpty}}-{{user.county | filterEmpty}}</span>
          </div>
        </template>
      </van-cell>
       <van-cell title="个性签名" is-link>
        <template #default>
          <div class="right">
            <span>每天都是坏心情~</span>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="container" v-else>
      <van-cell title="头像" is-link>
        <template #default>
          <div class="right">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
        </template>
      </van-cell>
      <van-cell title="名字" is-link>
        <template #default>
          <div class="right">
            <span>默默大师</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="微信号" is-link>
        <template #default>
          <div class="right">
            <span>wxid_bayernmunich</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="我的二维码" is-link>
        <template #default>
          <div class="right">
            <van-icon name="qr" size=".38rem" />
          </div>
        </template>
      </van-cell>
      
      <van-cell title="名字" is-link>
        <template #default>
          <div class="right">
            <span>默默大师</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="性别" is-link>
        <template #default>
          <div class="right">
            <span>女</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="地区" is-link>
        <template #default>
          <div class="right">
            <span>苏州市高新区花园公寓12-02-31</span>
          </div>
        </template>
      </van-cell>
       <van-cell title="个性签名" is-link>
        <template #default>
          <div class="right">
            <span>每天都是坏心情~</span>
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
      user:null
    };
  },
  activated(){
    // 获取用户信息
    this.user = localStorage.getItem('_M_User_Info') == 'undefined'? false:JSON.parse(localStorage.getItem('_M_User_Info'))
    console.log(this.user);
  },
  filters:{
    filterSex(sexId){
      if(sexId == 0){
        return '女'
      }else{
        return '男'
      }
    },
    filterEmpty(val){
      if(val){
        return val
      }else{
        return '无';
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .van-cell {
    padding: .36rem 0;
    align-items: center;
    /deep/ .van-cell__title{
      flex: none;
      font-size: .3rem;
      color: #777;
    }
    /deep/ .van-cell__value{
      flex: 1;
      font-size: .3rem;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    img {
      height: 1.21rem;
      width: 1.21rem;
      border-radius: 1rem;
    }
    span {
      font-size: 0.3rem;
      color: #000;
    }
    .van-icon{
      font-weight: 600;
    }
  }
}
</style>