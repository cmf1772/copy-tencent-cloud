<template>
  <div class="container">
    <div class="title">
      <div class="id">请选择身份</div>
      <div class="tip">我们会对每种身份设定合理的发帖权限</div>
    </div>
    <div class="list">
      <van-radio-group v-model="radio">
        <div  :class="radio== 1? 'item checked':'item'">
          <van-radio name="1" icon-size=".26rem" checked-color="#c3ab87">
            <template #default>
              <div class="center">
                <div class="h-title">个人房东</div>
                <div class="h-tip">房屋所有者，具有认证房本资质</div>
              </div>
            </template>
          </van-radio>
        </div>
        <div  :class="radio== 2? 'item checked':'item'">
          <van-radio name="2" icon-size=".26rem" checked-color="#c3ab87">
            <template #default>
              <div class="center">
                <div class="h-title">个人转租</div>
                <div class="h-tip">转让自己承租的房子</div>
              </div>
            </template>
          </van-radio>
        </div>
        <div  :class="radio== 3? 'item checked':'item'">
          <van-radio name="3" icon-size=".26rem" checked-color="#c3ab87">
            <template #default>
              <div class="center">
                <div class="h-title">职业房东</div>
                <div class="h-tip">管理多房源的个人</div>
              </div>
            </template>
          </van-radio>
        </div>
        <div :class="radio== 4? 'item checked':'item'">
          <van-radio name="4" icon-size=".26rem" checked-color="#c3ab87">
            <template #default>
              <div class="center">
                <div class="h-title">经纪人</div>
                <div class="h-tip">房产中介，拥有专业的展示空间</div>
              </div>
            </template>
          </van-radio>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem;
  margin-bottom: 0.4rem;
  .title {
    padding: 0.3rem 0;
    margin-bottom: 0.3rem;
    .id {
      font-size: 0.42rem;
      font-weight: bold;
    }
    .tip {
      font-size: 0.24rem;
      color: #777;
      margin-top: 0.05rem;
    }
  }
  .list {
    .item {
      .van-radio {
        border:1px solid transparent;
        border-radius: .03rem;
        padding: 0.3rem;
        transition: .3s all ease-in-out;
        box-shadow: 0 0 10px 1px #ddd;
        flex-direction: row-reverse;
        /deep/ .van-radio__label {
          margin-right: auto;
          .h-title {
            font-size: 0.3rem;
            margin-bottom: 0.1rem;
            font-weight: 400;
          }
          .h-tip {
            font-size: 0.22rem;
            color: #777;
          }
        }
      }
    }
    .checked{
      .van-radio{
        border:1px solid #c3ab87;
      }
    }
    .item:not(:last-child){
      margin-bottom: 0.3rem;
    }
  }
}
</style>