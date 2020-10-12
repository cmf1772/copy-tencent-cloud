<template>
  <div class="list">
    <div class="top">
      <van-nav-bar title="提交回收订单"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <van-checkbox-group v-model="result"
                          ref="checkboxGroup">
        <van-swipe-cell v-for="(item, index) in list"
                        :key="index">
          <div class="itemCon">
            <van-checkbox :name="item"
                          @click="changeItem"
                          checked-color="#C4AC88"
                          style="margin-right: 0.25rem"
                          ref="checkboxes" />
            <div class="left">
              <img :src="item.img.split('__')[0]"
                   alt="">
            </div>
            <div class="center">
              <p>类 型：{{item.p_cate_name}}</p>
              <p>规 格：{{item.cate_name}}</p>
              <p>预约保证金：{{item.predict_money}} 环保金</p>
              <p>预约时间：{{item.subscribe_time}}</p>
            </div>
            <div class="right">
              × 1
            </div>
          </div>
          <template #right>
            <van-button square
                        @click="deleteItem(item.order_id)"
                        style="height: 100%"
                        text="删除"
                        type="danger"
                        class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <div class="footer">
      <van-checkbox v-model="radio"
                    checked-color="#C4AC88"
                    @click="checkboxGroup">全选</van-checkbox>
      <div class="bottom bottoms"
           @click="setDate">
        立即预约
      </div>
    </div>
    <van-overlay :show="show">
      <van-loading type="spinner"
                   class="wrapper"
                   color="#1989fa" />
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'list',

  data () {
    return {
      result: [],
      radio: false,
      list: [],
      show: false
    }
  },

  mounted () {
    this.getList()
  },

  methods: {
    getList () {
      this.show = true
      this.$api.serve.recovery.getSubscribeOrderT({
        uid: 120,
        status: 2,
        page: 1,
        per_page: 100000000
      }).then(res => {
        this.show = false
        this.list = res.rows
      })
    },

    onClickLeft () {
      this.$router.go(-1);
    },
    //立即预约
    setDate () {
      if (!this.judgeData(this.result.length, '请选择预约的类型')) return;
      let id = ''
      this.result.forEach((item, index) => { id += item.order_id + (index + 1 === this.result.length ? '' : ',') })
      this.show = true
      this.$api.serve.recovery.modSubscribeOrder({
        status: 3,
        ids: id
      }).then(res => {
        // this.$toast.fail('预约成功')
        // this.getList()
        this.$router.push('/serve/recycling/reSuccess')
      })
    },

    checkboxGroup (event) {
      // this.radio = !this.radio
      this.$refs.checkboxGroup.toggleAll(this.radio);
    },

    changeItem () {
      this.radio = this.result.length === this.list.length ? true : false
    },

    deleteItem (id) {
      this.$dialog.confirm({
        title: '',
        message: '确认删除？',
      })
        .then(() => {
          // on confirm
          this.show = true
          this.$api.serve.recovery.modSubscribeOrder({
            status: 1,
            ids: id + ''
          }).then(res => {
            this.$toast.fail('删除成功')
            this.getList()
          })
        })
        .catch(() => {
          this.show = false
        });
    },

    // 判断数据
    judgeData (condition, message) {
      if (!condition) {
        this.$toast.fail(message)
        return false;
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.list {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex: 1;
    overflow: auto;
    :last-child {
      margin-bottom: 0.2rem;
    }
  }
}

.itemCon {
  width: 6.7rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 1.72rem;
  margin-top: 0.28rem;
  border-bottom: solid 1px #f1f1f1;
  padding-bottom: 0.4rem;
  .left {
    width: 2rem;
    > img {
      width: 1.72rem;
      height: 1.72rem;
    }
  }
  .center {
    flex: 1;
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      margin-bottom: 0.1rem;
    }
  }
  .right {
    font-size: 0.27rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
  }
}

.footer {
  width: 100%;
  height: 1.25rem;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.4rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;

  .bottom {
    width: 1.23rem;
    height: 0.53rem;
    border-radius: 0.27rem;
    line-height: 0.53rem;
    background: #c3ab87;
    text-align: center;
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }

  .bottoms {
    width: 2.1rem;
    height: 0.87rem;
    line-height: 0.87rem;
    border-radius: 0.44rem;
  }
}
</style>