<template>
  <div class="toExamine">
    <div class="bg">
      <img src="@/assets/images/serve/recovery/dd.jpg"
           alt="">
    </div>
    <van-nav-bar title=""
                 left-text
                 left-arrow
                 @click-left="onClickLeft">
      <template #left>
        <img src="@/assets/images/icon/index/arrow.png" />
      </template>
    </van-nav-bar>
    <div class="massage">
      {{status === 1 ? '审核中' : status === 2 ? '审核通过' : '审核失败'}}
      <p>
        {{status === 1 ? '' : status === 2 ? '我的主页' : '[原因] 身份证不清晰'}}
        <van-icon name="arrow"
                  v-if="status === 2 || status === 3" />
      </p>
    </div>

    <div class="content">
      <div class="itemList"
           v-for="(item, index) in dataAll"
           :key="index">
        <p>{{item.name}}</p>
        <span>{{item.content}}</span>
        <div class="img"
             v-if="item.name === '身份认证'">
          <img :src="item.card_front"
               alt="">
          <img :src="item.card_back"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toExamine',

  data () {
    return {
      status: null,
      dataAll: [{
        name: '姓 名',
        type: 'real_name',
        content: ''
      }, {
        name: '手 机',
        type: 'mobile',
        content: ''
      }, {
        name: '紧急联系人',
        type: 'link_name',
        content: ''
      }, {
        name: '紧急联系人电话',
        type: 'link_mobile',
        content: ''
      }, {
        name: '详细地址',
        type: 'address',
        content: ''
      }, {
        name: '回收类别',
        type: 'state',
        content: ''
      }, {
        name: '负责区域',
        type: 'state',
        content: ''
      }, {
        name: '身份证号',
        type: 'id_card',
        content: ''
      }, {
        name: '身份认证',
        type: 'idCardBefore',
        card_front: '',
        card_back: '',
      }],
      areaList: [], //回收区域数据
      provinceId: null,
      cityId: null,
      areaObject: {} //所有
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    getInfo () {
      this.$api.serve.recovery.getRecoverInfo({
        uid: 0,  //user id
      })
        .then(res => {
          if (res.length) {
            this.status = res[0].status
            res.forEach(item => {
              this.dataAll.forEach(itemList => {
                itemList.content = item[itemList.type]
                if (itemList.name === '身份认证') {
                  itemList.card_front = item['card_front']
                  itemList.card_back = item['card_back']
                } else if (itemList.name === '负责区域') {
                  itemList.content = this.areaObject.province.name + "-" + this.areaObject.city.name + "-" + '东城区'
                  this.areaObject.area.forEach(area => {
                    if (area.id === item[itemList.type]) {
                      itemList.content = this.areaObject.province.name + "-" + this.areaObject.city.name + "-" + area.name
                    }
                  })
                }
              })
            })
          } else {
            this.$router.push('/serve/recovery/become_recycler')
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  created () {
    // 先判断是否登录
    // 只有登录的人才能申请
    if (!this.$store.state.isLogin) {
      this.$toast.fail("请先登录");
      this.$router.replace({
        path: '/login'
      })
    }

  },

  mounted () {
    // 获取缓存当中的地址信息
    let addressData = JSON.parse(localStorage.getItem("_M_Address_Data"))
    this.provinceId = addressData.province.id;
    this.cityId = addressData.city.id;
    this.areaObject = addressData;
    // 获取区域选择框
    this.$api.index
      .getAdressLocalList({
        pid: this.cityId,
      })
      .then((res) => {
        this.areaObject['area'] = res;

        this.getInfo()
        // this.getAreaTown(res[0],0)
        //   console.log(this.areaObject);
      });
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: #fff;
  padding-top: 0.1rem;
  .itemList {
    background: #fff;
    height: 0.6rem;
    margin-top: 0.5rem;
    // line-height: 1.2rem;
    box-sizing: border-box;
    padding-left: 0.45rem;
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #777777;
    > p {
      width: 1.77rem;
    }
    display: flex;

    > span {
      font-size: 0.3rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
    }

    .img {
      width: 4.28rem;
      height: 3.21rem;
      > img {
        width: 100%;
        margin-top: 0.4rem;
      }
    }
  }
}

.bg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  > img {
    width: 100%;
  }
}

.massage {
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 0.48rem;

  width: 100%;
  height: 2rem;
  align-items: center;
  // line-height: 2rem;
  padding-top: 0.4rem;
  box-sizing: border-box;
  padding-left: 0.7rem;
  > p {
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 0.48rem;
  }
}

.van-nav-bar {
  background: none !important;
  border-bottom: none !important;
}
</style>