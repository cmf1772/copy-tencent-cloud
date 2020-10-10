<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="创建圈子"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="add-icon">
        <div class="icon">
          <img src="@/assets/images/magazine/photo.png" alt="">
          <span>添加</span>
        </div>
      </div>
      <div class="icon-tip">一张好的头像是吸引大家的开始哦~~</div>
      <div class="input">
        <van-field v-model="value" input-align="right" label="圈子名称"  placeholder="请输入15字以内" />
        <van-field v-model="value" input-align="right"  label="圈子简介"  placeholder="请输入200字以内" />
        <van-cell title="直播分类" value="内容" >
          <template #default>
            <div class="select">财商
              <van-icon name="arrow" size=".32rem"/>
            </div>
          </template>
        </van-cell>
      </div>
      <div class="tip">
        <van-icon name="info-o" size=".26rem" color="#c3ab87" />仅可修改一次，修改后请按照该类目运营圈子
      </div>
    </div>
    <div class="btn">
      <van-button round type="info" color="#c3ab87">完成</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {value:'',value2:'',checked:true,radio:'0'};
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container{
  padding: 0 .45rem;
  .add-icon{
    margin-top: 0.3rem;
    display: flex;
    justify-content: center;
    .icon{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // padding: .5rem;
      height: 2.16rem;
      width: 2.16rem;
      background: #f7f7f7;
      border-radius: 50%;
      span{
        font-size: .26rem;
        margin-top: 0.05rem;
        color: #BCBCBC;
      }
    }
  }
  .icon-tip{
    text-align: center;
    font-size: .28rem;
    margin-top: 0.48rem;
    color: #9C9C9C;
  }
  .input{
    padding: .3rem 0 .2rem 0;
    .van-cell{
      padding: .36rem 0;
      font-size: .3rem;
    }
    .select{
      display: flex;
      align-items: center;
      color: #333;
      margin-left: auto;
      justify-content: flex-end;
      i{
        margin-left: .1rem;
      }
    }
  }
  .tip{
    display: flex;
    align-items: center;
    font-size: .2rem;
    padding: .2rem 0;
    color: #C3AB87;
  }
  
}
.btn{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .van-button{
      width: 4.2rem;
      height: 0.87rem;
    }
  }
</style>