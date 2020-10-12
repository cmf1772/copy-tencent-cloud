<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="实名认证中心" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="card-info list">
      <div class="title">证件信息</div>
      <van-cell title="姓名" value="默默大师" size="large" />
      <van-cell title="性别" value="男" size="large" is-link/>
      <van-cell title="国籍" value="中国" size="large" />
      <van-cell title="证件类型" value="居民身份证" size="large" />
      <van-cell title="证件号码" value="320520199312056598" size="large"/>
      <van-cell title="证件有效期" value="待完善" size="large" is-link/>
      <van-cell title="身份证照" value="已上传" size="large"/>
    </div>
    <div class="other-info list">
       <div class="title">其他信息</div>
      <van-cell title="职业类别" value="企业工作人员" size="large" is-link/>
      <van-cell title="地址" value="中国大陆   江苏   苏州" size="large" is-link/>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="less" scoped>
.list{
  padding: .2rem .45rem;
  .title{
    font-size: .27rem;
    padding-bottom: 0.2rem;
    font-weight: bold;
    border-bottom: 1px solid #efefef;
  }
  .van-cell {
    padding: 0.35rem 0rem;
    font-size: .3rem;
  }
  
  /deep/ .van-cell__title {
    max-width: 1.2rem;
    text-align-last: justify;
    text-align: justify;
    span {
      font-size: 0.3rem;
      font-weight: 400;
    }
  }
  /deep/ .van-cell__value{
    span{
      color: #777;
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
    color: #333;
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
 .other-info{
    margin-top: .6rem;
  }
</style>