<template>
  <div class="container">
    <div class="tip">
      <div class="v">
        您已发布0套房源，还可以发布5套
        <van-icon name="cross" color="#c3ab87" size=".26rem" />
      </div>
    </div>
    <div class="success">
      <span>完成度 15%</span>
      <div class="progess"></div>
    </div>
    <div class="check-list">
      <div class="item"  @click="show = true">
        <div class="left">
          <div class="title">小区</div>
          <span class="value">星璇花园</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
      <div class="item"  @click="show = true">
        <div class="left">
          <div class="title">户型·朝向·楼层</div>
          <span class="i-tip">请选择</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
      <div class="item"  @click="show = true">
        <div class="left">
          <div class="title">装修·供暖·电梯</div>
          <span class="i-tip">请选择</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
      <div class="item"  @click="show = true">
        <div class="left">
          <div class="title">房屋类型·产权类型·产权年限</div>
          <span class="i-tip">请选择</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
      <div class="item"  @click="show = true">
        <div class="left">
          <div class="title">面积</div>
          <span class="i-tip">请选择</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
      <div class="item" @click="show = true">
        <div class="left">
          <div class="title">售价</div>
          <span class="i-tip">请选择</span>
        </div>
        <div class="arrow">
          <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
        </div>
      </div>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
    />
  </div>
</template>

<script>
export default {
  data(){
    return{
       show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }]
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.4rem 0.45rem;
  position: relative;
  .tip {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.1rem 0.45rem;
    right: 0;
    background: #f7f4ef;
    z-index: 1;
    font-size: 0.24rem;
    max-width: 750px;
    .v {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .success {
    margin: 0.6rem 0;
    padding: 0.1rem 0.3rem;
    box-shadow: 0 0 10px 1px #ddd;
    span {
      font-size: 0.24rem;
    }
    .progess {
      height: 5px;
      border-radius: 1rem;
      overflow: hidden;
      width: 100%;
      background: #eee;
      margin: 0.1rem 0 0.2rem 0;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 15%;
        background: #c3ab87;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
  .check-list{
    .item{
      border-bottom: 1px solid #efefef;
      display: flex;
      padding: .36rem 0;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        flex-direction: column;
        .title{
          font-size: .24rem;
          color: #777;
        }
        .i-tip{
          font-size: .36rem;
          color: #BCBCBC;
        }
        .value{
          font-size: .36rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>