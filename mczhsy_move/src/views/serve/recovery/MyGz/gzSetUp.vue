<template>
  <div class="geSetUp"
       :style="{'height': height}">
    <div class="top">
      <van-nav-bar title="回收柜设置"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <div class="itemList"
           v-for="(item, index) in list"
           :key="index"
           @click="goSet(item.id)">
        <div class="left">
          <img src="@/assets/images/serve/list.png"
               alt="">
          <p>{{item.name}}</p>
        </div>
        <div class="right">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <div class="botton">
      <div class="bottom"
           @click="add">
        新增分类
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'geSetUp',

  data () {
    return {
      height: window.innerHeight + 'px',
      list: []
    };
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    getEquipmentCate () {
      this.$api.serve.recovery.getEquipmentCate({
        identification: this.$route.query.identification,
      })
        .then(res => {
          this.list = res
        })
    },

    goSet (id) {
      this.$router.push('/serve/recovery/setTing?id=' + this.$route.query.id + '&flId=' + id + '&identification=' + this.$route.query.identification)
    },

    add () {
      this.$router.push('/serve/recovery/setTing?id=' + this.$route.query.id + '&identification=' + this.$route.query.identification)
    }
  },

  mounted () {
    this.getEquipmentCate()
  }
}
</script>

<style lang="scss" scoped>
.geSetUp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }
}
.botton {
  width: 100%;
  height: 1.07rem;
  .bottom {
    margin: 0 auto;
    width: 4.2rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    background: #c4ac88;
    text-align: center;
    line-height: 0.87rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.45rem;
  .itemList {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.3rem;
    .left {
      display: flex;
      align-items: center;
      > img {
        width: 1.14rem;
        margin-right: 0.4rem;
      }
      > p {
        font-size: 0.31rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
    .right {
      color: #d0d0d0;
      font-size: 0.27rem;
    }
  }
}
</style>