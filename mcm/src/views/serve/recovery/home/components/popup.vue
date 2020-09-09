<template>
  <van-action-sheet v-model="showPopup"
                    title="添加废品"
                    @close="closePopup">
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in data"
               :key="index"
               :title="item.name">
        <div class="container">
          <span class="tips">可正常使用的家电</span>
          <div class="list">
            <div class="item"
                 v-for="(child,i) in item.children[0]"
                 :key="i">
              <div class="title">{{child.name}}</div>
              <div class="warp">
                <div v-for="(childlren,j) in child.children[0]"
                     :key="j"
                     :class="haveChecked(index,i,j,childlren) ?' item-children active':'item-children'"
                     @click="addCheck(index,i,j, childlren)">{{childlren.name}}</div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="price">
              预估回收价格
              <div class="num">
                合计/￥<span>55</span>
              </div>
            </div>
            <van-button round
                        type="info"
                        color="#c3ab87"
                        @click="closePopup">确定</van-button>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </van-action-sheet>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted () {
    console.log(this.data);
  },
  data () {
    return {
      active: 0,
      showPopup: this.show,
      list: [
        {
          title: "类型",
          children: [
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" }
          ]
        },
        {
          title: "类型",
          children: [
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" }
          ]
        },
        {
          title: "类型",
          children: [
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" }
          ]
        },
        {
          title: "类型",
          children: [
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" },
            { title: "台式电脑" }
          ]
        }
      ],
      checkedList: []
    };
  },
  computed: {
    haveChecked () {
      return function (index, i, j, items) {
        // let id = index + "-" + i + "-" + j;
        let result = this.checkedList.findIndex(item => {
          return item.id == items.id;
        });
        if (result > -1) {
          return true
        } else {
          return false
        }
      };
    }
  },
  watch: {
    show: function (value) {
      this.showPopup = value
    }
  },
  methods: {
    addCheck (index, i, j, items) {
      // console.log(item)
      // let id = index + "-" + i + "-" + j;
      let result = this.checkedList.findIndex(item => {
        return item.id == items.id;
      });


      this.checkedList = []
      if (result > -1) {

        this.checkedList = []
        // this.checkedList.splice(result, 1);
      } else {
        // this.checkedList.push({
        //   text: this.data[index].children[0][i].children[0][j].name,
        //   id
        // });
        this.checkedList[0] = {
          text: items.name,
          id: items.id
        }
      }
    },
    closePopup () {
      // let str = ""
      // for (let item of this.checkedList) {
      //   str += item.text + "/"
      // }
      // str = str.substr(0, str.length - 1);
      // console.log(str);
      this.$emit("closePopup", {
        bol: false,
        checkedData: this.checkedList
      })
    }
  }
};
</script>

<style lang="less" scoped>
.van-tabs {
  /deep/ .van-tabs__wrap {
    /deep/ .van-tabs__line {
      width: 0.5rem !important;
      background: #c3ab87;
    }
  }
  /deep/ .van-tab {
    font-size: 0.34rem;
    color: #777;
  }
  /deep/ .van-tab--active {
    font-size: 0.36rem;
    color: #000;
  }
}
.container {
  padding: 0 0.45rem;
  padding-bottom: 0.5rem;
  .tips {
    font-size: 0.2rem;
    color: #c3ab87;
  }
  .footer {
    padding-top: 1rem;
    display: flex;
    font-size: 0.24rem;
    align-items: center;
    justify-content: space-between;
    .price {
      display: flex;
      align-items: center;
    }
    .van-button {
      padding: 0;
      width: 2.79rem;
      height: 0.87rem;
    }
    .num {
      margin-left: 0.1rem;
      color: #c3ab87;
      span {
        font-size: 0.36rem;
      }
    }
  }
  .list {
    .title {
      font-size: 0.24rem;
      color: #999;
      margin: 0.45rem 0;
    }
    .warp {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.2rem;

      font-size: 0.24rem;
      .item-children {
        background: #f3f3f3;
        width: 100%;
        height: 0.65rem;
        border-radius: 30px;
        line-height: 0.65rem;
        text-align: center;
        border: transparent solid 1px;
      }
      .active {
        background: #f7f7f7;
        border: #c3ab87 solid 1px;
        color: #c3ab87;
      }
    }
  }
}
</style>