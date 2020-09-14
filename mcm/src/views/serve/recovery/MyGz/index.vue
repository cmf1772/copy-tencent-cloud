<template>
  <div class="index"
       :style="{'height': heightL}">
    <div class="top">
      <van-nav-bar title="回收柜列表"
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
           :key="index">
        <div class="left">
          <van-icon name="location"
                    color='#cccccc'
                    style="font-size: 0.18rem; margin-right: 0.24rem;" />
          <div>
            <p>{{item.identification}}</p>
            <span>{{item.province + item.city + item.area + item.address}}</span>
          </div>
        </div>
        <div class="right">
          <div class="bottom"
               v-if="item.status === 2"
               @click="setting(item.id, item.identification)">
            设置
          </div>
          <p v-if="item.status !== 2">
            {{item.status === 1 ? '审核中' : '拒绝'}}
          </p>
        </div>
      </div>

    </div>
    <div class="bottoms">
      <div class="bottons"
           @click="add">
        新增回收柜
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      heightL: window.innerHeight + 'px',
      list: []
    }
  },

  methods: {
    getEquipment () {
      this.$api.serve.recovery.getEquipment({
        recover_id: 120
      })
        .then(res => {
          this.list = res
        })
    },

    onClickLeft () {
      this.$router.go(-1);
    },

    setting (id, identification) {
      this.$router.push('/serve/recovery/gzSetUp?id=' + id + '&identification=' + identification)
    },

    add () {
      this.$router.push('/serve/recovery/addMyGz')
    }
  },

  mounted () {
    this.getEquipment()
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }
}
.bottoms {
  padding: 0.2rem 0;
  .bottons {
    margin: 0 auto;
    width: 3.93rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    background: #c3ab87;
    line-height: 0.87rem;
    text-align: center;

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
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.35rem;
    border-bottom: solid 0.01rem #f1f1f1;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        font-size: 0.3rem;
        font-family: PingFang SC;
        color: #000000;
        line-height: 0.48rem;
        > span {
          color: #9c9c9c;
        }
      }
    }
    .right {
      .bottom {
        width: 0.84rem;
        height: 0.36rem;
        border: 1px solid #c4ac88;
        border-radius: 0.18rem;
        line-height: 0.36rem;
        text-align: center;

        font-size: 0.21rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #c4ac88;
      }
      > p {
        font-size: 0.21rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #030303;
      }
    }
  }
}
</style>