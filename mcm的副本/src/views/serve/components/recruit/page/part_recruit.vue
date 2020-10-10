<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="我要招人"
        left-text
        left-arrow
        right-text="取消"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template></van-nav-bar>
    </div>

    <div class="container">
      <van-cell title="兼职类别" value="请选择兼职类别" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="招聘人数" value="3000-5000元" size="large">
        <template #default>
          <van-field v-model="value" placeholder="请填写1-999之间的数字" />
        </template>
        <template #right-icon>人</template>
      </van-cell>
      <van-cell title="兼职时效" size="large">
        <template #default>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1" checked-color="#c3ab87" icon-size=".26rem">短期</van-radio>
            <van-radio name="2" checked-color="#c3ab87" icon-size=".26rem">长期</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="兼职时段"  size="large">
        <template #default>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1" checked-color="#c3ab87" icon-size=".26rem">任意</van-radio>
            <van-radio name="2" checked-color="#c3ab87" icon-size=".26rem">选择</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="薪资水平" value="本科以上" size="large">
        <template #default>
          <van-field v-model="value" placeholder="请填写1-999之间的数字" />
        </template>
        <template #right-icon>元/天</template>
      </van-cell>
      <van-cell title="结薪方式" value="请选择结薪方式" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="工作区域" value="请选择工作区域" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="详细地址" value="请选择详细地址" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="工作内容" value="请输入工作内容" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="联系人" value="如：张晓华" size="large">
        <template #default>
          <van-field v-model="value" placeholder="请填写联系人" />
        </template>
      </van-cell>
      <van-cell title="联系电话" value="13338789876" size="large">
       <template #default>
          <van-field v-model="value" placeholder="请填写联系电话" />
        </template>
      </van-cell>
      <van-cell title="公司名称" value="苏州科技有限公司" size="large">
        <template #default>
          <van-field v-model="value" placeholder="请填写公司名称" />
        </template>
      </van-cell>
      <div class="btn">
        <van-button round type="info" color="#c3ab87">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { radio: "1", value: "" };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  >.van-cell {
    padding: 0.35rem 0.45rem !important;
  }
  .van-cell {
    .van-field {
      /deep/ .van-cell__value {
        padding: 0;
      }
      padding: 0;
    }
  }

  .van-radio-group /deep/ span {
    color: #999;
  }
  .van-cell{
    /deep/ .van-radio{
      .van-radio__label{
        color: #000;
      }
    }
  }
  /deep/ .van-cell__title {
    max-width: 1.2rem;
    text-align-last: justify;
    text-align: justify;
    span {
      font-size: 0.3rem;
      color: #777;
    }
  }
  /deep/ .van-cell__value {
    span {
      font-size: 0.3rem;
      color: #BCBCBC;
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
  .btn {
    display: flex;
    justify-content: center;
    padding: 0.4rem 0;
    .van-button {
      width: 3.93rem;
      height: 0.87rem;
    }
  }
}
</style>