<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar
        title="新建收货地址"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="from">
      <van-form  ref="from" validate-first @failed="onFailed">
        <div class="set">
          <van-field v-model="value3" name="asyncValidator" label="收货地址" placeholder="点击选择收货地址" />
          <div class="check" @click="setAdress">
            <van-icon name="location-o" size="18" />请选择
          </div>
        </div>
        <van-field v-model="value1" name="pattern" label="门牌号" placeholder="例：10号楼12F1201室" />
        <van-field v-model="value2" name="validator" label="联系人" placeholder="请填写收货人姓名">
          <template #right-icon>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1" icon-size=".24rem" checked-color="#c3ab87">先生</van-radio>
              <van-radio name="2" icon-size=".20rem" checked-color="#c3ab87">女士</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field v-model="value4" name="asyncValidator" label="手机号" placeholder="请输入收件人手机号" />
        <van-cell title="标签">
          <template #default>
            <div class="btn-list">
              <div>家</div>
              <div>公司</div>
              <div>学校</div>
            </div>
          </template>
        </van-cell>
        <div style="margin-top: 1rem;">
          <van-button round block type="info" native-type="submit">保存</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      radio:'1'
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    onFailed() {},
    setAdress() {
      this.$router.push({
        path: "/mine/setting/info/myadress",
      });
    }
  },
  mounted(){
    console.log(this.$refs.from.$el.clientWidth);
    
  }
};
</script>
<style lang="less" scoped>
.from {
  /deep/  .van-field__right-icon .van-icon{
    font-size: .2rem;
  }
  /deep/ .van-field__right-icon{
    padding: .2rem 0;
  }
  padding: 0 0.45rem;
  /deep/ .van-cell__title {
    max-width: 1.2rem;
    -moz-text-align-last: justify;
    text-align-last: justify;
    text-align: justify;
    margin-right: 0.2rem;
  }
  /deep/ .btn-list {
    display: flex;
    div {
      width: 1rem;
      text-align: center;
      border-radius: 1rem;
      background: #f7f7f7;
      margin-right: 0.2rem;
      color: #000;
      .van-icon{
        font-size: .24rem;
      }
    }
  }
  /deep/ .van-field__body{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  }
.van-cell {
  padding: 0.36rem 0;
  font-size: .3rem;
  /deep/ input{
    font-size: .3rem;
  }
}
.van-button {
  width: 4.2rem;
  height: 0.87rem;
  border: none;
  margin:.8rem auto 0 auto;
  background: #c3ab87;
}
.set {
  display: flex;
  align-items: center;
  .check {
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    min-width: 1.57rem;
    height: 0.5rem;
    justify-content: center;
    background: #f7f7f7;
    color: #c3ab87;
    border: #c3ab87 1px solid;
    border-radius: 20px;
  }
}
</style>