<template>
  <div class="container">
    <div class="info">
      <div class="title">
        基本信息
        <span>*</span>
      </div>
      <div class="tip">
        带
        <span>*</span>的为必填项
      </div>
    </div>
    <div class="adress pub"  @click="show = true">
      <p>小区</p>
      <span>星璇花园</span>
    </div>
    <div class="area pub"  @click="show = true">
      <p>建筑面积</p>
      <span>120平方</span>
    </div>
    <div class="house-v"  @click="show = true">
      <div class="pub">
        <p>房屋户型</p>
        <span>三室两厅两卫</span>
      </div>
      <div class="pub"  @click="show = true">
        <p>朝向</p>
        <span>南</span>
      </div>
      <div class="pub"  @click="show = true">
        <p>楼层</p>
        <span>10F</span>
      </div>
      <div class="pub"  @click="show = true">
        <p>电梯</p>
        <span>两梯四户</span>
      </div>
    </div>
    <div class="adv-amount"  @click="show = true">
      <div class="info">
        <div class="title">租金详情</div>
      </div>
      <div class="pub"  @click="show = true">
        <div class="price">月租金<span>*</span></div>
        <div class="amout">2500 <div>押一付三</div></div>
      </div>
      <!-- 悬着 -->
    <div class="check" @click="show = true">
      <div class="tips">租金包含费用（物业费等）</div>
      <div class="please-check">请选择</div>
    </div>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
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
  padding: 0.2rem 0.45rem 0.2rem 0.45rem;
  .info {
    display: flex;
    justify-content: space-between;
    span {
      color: red;
      font-size: 0.24rem;
      display: inline-block;
      margin: 0 0.05rem;
      margin-bottom: -0.1rem;
      position: relative;
    }
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
    .tip {
      font-size: 0.24rem;
      display: flex;
      align-items: center;
      color: #777;
    }
  }
  .pub {
    padding: 0.25rem 0;
    border-bottom: 1px solid #efefef;
    p {
      font-size: 0.24rem;
      color: #777;
    }
    span {
      font-size: 0.36rem;
      margin-top: 0.05rem;
      display: block;
    }
  }
  .adress,
  .area {
    text-align: center;
  }
  .house-v {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .pub {
      text-align: center;
    }
    .pub:nth-child(odd) {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 80%;
        background: #efefef;
        right: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .adv-amount{
    padding: .25rem 0;
    .pub{
       display: flex;
       align-items: center;
       flex-direction: column;
      text-align: center;
      >*{
        display: flex;
        align-items: center;
      }
      .price{
        font-size: .24rem;
        span{
          color: red;
          display: inline-block;
          margin-left: 0.05rem;
              margin-bottom: -0.1rem;
        }
      }
      .amout{
        font-size: .36rem;
        div{
          font-size: .2rem;
          border-radius: 1rem;
          border: 1px solid #c3ab87;
          background: #F9F6F3;
          color: #c3ab87;
          padding: 0 .1rem;
          margin-left: 0.1rem;
        }
      }
    }
    .check{
      padding: .25rem 0 0 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      .tips{
        font-size: .24rem;
      }
      .please-check{
        font-size: .36rem;
        color: #999;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>