<template>
  <div class="templateToBuy">
    <div class="title-ban">
      <span>已购买模版</span>
    </div>
    <div class="content">
      <div class="item"
           v-for="(item, index) in BuyTplList"
           :key="index">
        <el-image style="width: 145px; height: 185px"
                  :src="item.s_img"
                  :preview-src-list="url">
        </el-image>
        <p>{{item.tpl_name}}</p>
        <el-button slot="append"
                   type="primary"
                   v-if='index === 0'
                   icon="el-icon-plus"
                   style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          立即导入
        </el-button>
      </div>
    </div>
    <div class="title-ban">
      <span>选购模板</span>
    </div>
    <div class="content">
      <div class="item"
           v-for="(item, index) in srcList"
           :key="index">
        <el-image style="width: 145px; height: 185px"
                  :src="item.s_img"
                  :preview-src-list="urlList">
        </el-image>
        <p>{{item.tpl_name}}</p>
        <el-button slot="append"
                   type="primary"
                   v-if='index === 0'
                   icon="el-icon-plus"
                   style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          选购
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'templateToBuy',

  data () {
    return {
      BuyTplList: {},
      url: [],
      srcList: {},
      urlList: []
    }
  },

  methods: {
    getAllTplPageList () {
      this.$api.getAllTplPageList({
        "order_type": "asc",
        "order_field": "sellshow",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.srcList = res.data.items
        for (let key in res.data.items) {
          this.urlList.push(res.data.items[key].s_img)
        }

      })
    },

    getBuyTplList () {
      this.$api.getBuyTplList({
        "order_type": "asc",
        "order_field": "sellshow",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.BuyTplList = res.data
        for (let key in res.data) {
          this.url.push(res.data[key].s_img)
        }

      })
    }
  },

  mounted () {
    this.getBuyTplList()
    this.getAllTplPageList()
  }
}
</script>

<style lang="scss" scoped>
.templateToBuy {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 20px;
  .title-ban {
    width: 100%;
    border-bottom: solid 1px #a90000;
    position: relative;
    height: 25px;
    margin-top: 20px;
    > span {
      position: absolute;
      display: block;
      padding: 0 10px;
      height: 25px;
      border: solid 1px #a90000;
      border-bottom-color: #fff;
      background: #fff;
      left: 25px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: auto;
    .item {
      margin-right: 20px;
      text-align: center;
      p {
        margin-top: 10px;
      }
    }
  }
}
</style> 