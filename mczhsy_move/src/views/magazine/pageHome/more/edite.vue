<template>
  <div class="edit">
    <van-nav-bar title="管理我的应用"
                 right-text="完成"
                 left-arrow
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
    <div class="title">
      <div class="top">
        <p>
          你可以将常用的应用添加到美城茂首页，
          也可以按住拖动调整应用的顺序
        </p>
      </div>
      <!-- v-dragging="{ item: item, list: JSONALl, group: 'item', otherData: otherData }" -->
      <draggable v-model="JSONALl"
                 :move="getdata"
                 class="itemAll"
                 :group="JSONALl"
                 animation="600"
                 @update="datadragEnd">
        <transition-group>
          <div class="item"
               v-for="(item, index) in JSONALl"
               :key="index">
            <div class="img"
                 style="width: 0.34rem; height: .45rem">
              <van-image :src="item.img"
                         style="width: 100%" />
            </div>
            <p>{{item.text}}</p>
            <van-icon name="cross"
                      @click="deleteItem(item)" />
          </div>
        </transition-group>
      </draggable>
      <div class="top">
        <p>
          以上应用展示在首页（最多14个）
        </p>
      </div>
      <draggable v-model="elseAll"
                 :move="getdata"
                 class="itemAll"
                 :group="elseAll"
                 animation="600"
                 @update="datadragEnd">
        <transition-group>
          <div class="item"
               v-for="(item, index) in elseAll"
               :key="index">
            <div class="img"
                 style="width: 0.34rem; height: .45rem">
              <van-image :src="item.img"
                         style="width: 100%" />
            </div>
            <p>{{item.text}}</p>
            <van-icon name="cross"
                      @click="deleteItem(item)" />
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="content">
      <p>全部应用</p>
      <div class="itemCon">
        <p>最近使用</p>
        <van-grid :border="true"
                  :column-num="5">
          <van-grid-item v-for="(item, index) in JSONALl"
                         :key="index">
            <div class="items">
              <div class="img"
                   style="width: 0.34rem; height: .45rem">
                <van-image :src="item.img"
                           style="width: 100%" />
              </div>
              <p>{{item.text}}</p>
              <van-icon name="plus"
                        color="#C3AB87" />
            </div>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="itemCon">
        <p>时尚杂志</p>

        <van-grid :border="true"
                  :column-num="5">
          <van-grid-item v-for="(item, index) in elseAll"
                         :key="index">
            <div class="items">
              <div class="img"
                   style="width: 0.34rem; height: .45rem">
                <van-image :src="item.img"
                           style="width: 100%" />
              </div>
              <p>{{item.text}}</p>
              <van-icon name="plus"
                        color="#C3AB87" />
            </div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'edit',
  // components: {
  //   cardDragger
  // },

  components: {
    draggable
  },

  data () {
    return {
      JSONALl: [{
        img: require('@/assets/images/magazine/zz.png'),
        text: '杂志'
      }, {
        img: require('@/assets/images/magazine/na1.png'),
        text: '看看'
      }, {
        img: require('@/assets/images/magazine/na2.png'),
        text: '动态'
      }, {
        img: require('@/assets/images/magazine/na3.png'),
        text: '问答'
      }, {
        img: require('@/assets/images/magazine/na4.png'),
        text: '广播'
      }, {
        img: require('@/assets/images/magazine/na5.png'),
        text: '视频'
      }, {
        img: require('@/assets/images/magazine/na3.png'),
        text: '测试'
      }, {
        img: require('@/assets/images/magazine/gd.png'),
        text: '更多'
      }],

      elseAll: [{
        img: require('@/assets/images/magazine/zz.png'),
        text: '杂志'
      }, {
        img: require('@/assets/images/magazine/na1.png'),
        text: '看看'
      }]
    }
  },

  methods: {
    deleteItem (res) {
      alert('删除某一项')
      console.log(res)
    },
    onClickLeft () {
      this.$router.push('/magazine/more')
    },

    onClickRight () {
      alert('完成')
    },

    otherData () {

    }
  }
}
</script>

<style lang="scss" scoped>
.itemAll {
  > span {
    display: flex;
    flex-wrap: wrap;
    .item {
      // width: 19%;
      padding-top: 0.3rem;
      width: 1.467rem;
      background: #fff;
      border: solid 1px #f5f6f7;
      height: 1rem;
      border-right: none;
    }
    :last-child {
      border-right: solid 1px #f5f6f7;
    }
  }
}
.content {
  width: 7rem;
  margin: 0.2rem auto;
  > p {
    font-size: 0.34rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #222222;
    margin: 0.3rem auto;
    width: 100%;
    text-align: center;
  }
  .itemCon {
    margin-bottom: 0.4rem;
    > p {
      font-size: 0.42rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #222222;
      line-height: 36px;
      margin-left: 0.2rem;
    }
    .inavs {
      > li {
        margin-top: 0.5rem !important;
      }
    }
  }
}

.edit {
  font-size: 0.25rem;
  .top {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    > p {
      width: 4.66rem;
      margin: 0 auto;
      text-align: center;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .van-icon {
      width: 0.33rem;
      height: 0.33rem;
      position: absolute;
      top: 0.12rem;
      right: 0.12rem;
      // background: #000;
      // color: #fff;
      // border-radius: 100%;
      // line-height: 0.33rem;
      // text-align: center;
    }
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      margin-top: 0.1rem;
    }
  }
  .items {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .van-icon {
      width: 0.33rem;
      height: 0.33rem;
      position: absolute;
      top: -0.12rem;
      right: -0.34rem;
      // background: #000;
      // color: #fff;
      // border-radius: 100%;
      // line-height: 0.33rem;
      // text-align: center;
    }
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      margin-top: 0.1rem;
    }
  }
}
</style>