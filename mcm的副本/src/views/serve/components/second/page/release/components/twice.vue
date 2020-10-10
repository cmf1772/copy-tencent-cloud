<template>
  <div class="container">
    <div class="success">
      <span>完成度 50%</span>
      <div class="progess"></div>
    </div>

    <div class="upload">
      <div class="left">
        <van-uploader :after-read="afterRead" />
      </div>
      <div class="right">
        <div class="center">
          <p>上传照片</p>
          <span>更好的照片能帮助你更快促进交易</span>
        </div>
        <van-icon name="arrow" size=".32rem" color="#D0D0D0" />
      </div>
    </div>

    <div class="check-list">
      <div class="item">
        <div class="title">房源标题</div>
        <van-field v-model="value" placeholder="请输入" />
      </div>
      <div class="item area">
        <div class="title">核心卖点</div>
        <van-field v-model="value1" type="textarea" rows="6" placeholder="请输入房子亮点(30字以上)" />
      </div>
      <div class="item star">
        <div class="title">房屋特点</div>
        <div class="star-list">
          <div :class="haveThisItemId(0)?'active':''" @click="changeActiveItem(0)">南北通透</div>
          <div :class="haveThisItemId(1)?'active':''" @click="changeActiveItem(1)">户型方正</div>
          <div :class="haveThisItemId(2)?'active':''" @click="changeActiveItem(2)">满五唯一</div>
          <div :class="haveThisItemId(3)?'active':''" @click="changeActiveItem(3)">满两年</div>
          <div :class="haveThisItemId(4)?'active':''" @click="changeActiveItem(4)">近地铁</div>
          <div :class="haveThisItemId(5)?'active':''" @click="changeActiveItem(5)">近学区</div>
          <div :class="haveThisItemId(6)?'active':''" @click="changeActiveItem(6)">随时看房</div>
          <div :class="haveThisItemId(7)?'active':''" @click="changeActiveItem(7)">不限购</div>
        </div>
      </div>
      <div class="item user">
        <div class="name">
          <div class="title">称呼</div>
          <van-field v-model="value2" placeholder="请输入" />
        </div>
        <div class="sex">
          <van-radio-group v-model="value3" direction="horizontal">
            <van-radio name="1" icon-size=".26rem" checked-color="#c3ab87">先生</van-radio>
            <van-radio name="2" icon-size=".26rem" checked-color="#c3ab87">女士</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="item">
        <div class="title">手机号</div>
        <van-field v-model="value4" placeholder="请输入" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
      value4: "",
      value3: "1",
      checkedArrItem:[]
    };
  },
  computed:{
    haveThisItemId(){
      return function(id){
        return this.checkedArrItem.includes(id)
      }
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    changeActiveItem(id){
      let index = this.checkedArrItem.findIndex( item =>{
        return item == id;
      })
      if(index > -1 ){
        this.checkedArrItem.splice( index, 1)
      }else{
        this.checkedArrItem.push( id)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  /deep/ input {
    font-size: 0.24rem;
  }
  padding: 0 0.45rem 0.4rem 0.45rem;
  .check-list {
    .title {
      font-size: 0.24rem;
      color: #777;
    }
    .user {
      display: flex;
      align-items: center;
      .name {
        flex: 1;
        padding-right: 0.2rem;
      }
      /deep/ .van-radio__label {
        font-size: 0.3rem;
      }
    }
    .item {
      padding-bottom: 0.6rem;
      .van-cell {
        padding: 0.15rem 0;
        /deep/ .van-field__control {
          font-size: 0.36rem;
        }
      }
    }
    .area {
      /deep/ textarea {
        border: 1px solid #efefef;
        padding: 0.1rem 0.2rem;
      }
      /deep/ .van-field__control {
        font-size: 0.3rem !important;
      }
    }
    .star {
      .star-list {
        padding: 0.2rem 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.2rem;
        div {
          height: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 1rem;
          background: #f7f7f7;
          font-size: 0.24rem;
          border: 1px solid transparent;
        }
        .active {
          border: 1px solid #c3ab87;
          color: #c3ab87;
          background: #f9f6f3;
        }
      }
    }
  }
  .upload {
    padding-bottom: 0.3rem;
    display: flex;
    .left {
      .van-uploader {
        /deep/ .van-uploader__upload {
          border-radius: 1rem;
          width: 2.16rem;
          height: 2.16rem;
          background: #f7f7f7;
        }
      }
    }
    .right {
      font-size: 0.24rem;
      display: flex;
      padding-left: 0.2rem;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      p {
        font-size: 0.36rem;
      }
      span {
        font-size: 0.24rem;
        color: #999;
        display: inline-block;
        margin-top: 0.1rem;
      }
    }
  }
  .success {
    margin: 0.4rem 0;
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
        width: 50%;
        background: #c3ab87;
        height: 100%;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>