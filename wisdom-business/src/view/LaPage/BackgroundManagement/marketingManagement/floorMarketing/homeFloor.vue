<template>
  <div class="homeFloor">
    <div class="table_bottom">
      <div class="flex"
           :style="{'height': height}">
        <div class="top">
          <p>第1层</p>
          <div class="form-item">
            <p style="width:100px">更多链接</p>
            <el-input placeholder="请输入内容"
                      style="width:500px"
                      v-model="input"
                      clearable>
            </el-input>
          </div>
          <div class="form-item">
            <p style="width:100px">楼层标题图片</p>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </div>
          <el-button slot="append"
                     type="primary"
                     style="margin-left: 10px"
                     icon="el-icon-search"
                     @click="sesarchFun()">
            确定
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeFloor',

  data () {
    return {
      time: [],
      radio: '1',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      dialogImageUrl: '',
      dialogVisible: false,
      height: window.innerHeight - 180 + 'px',
    }
  },

  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    add () {
      this.$router.push('/advertisingManagement/edithomeFloor?nameType=添加广告')

    },
    edit () {
      this.$router.push('/advertisingManagement/edithomeFloor?nameType=修改广告')

    },
    look () {
      this.$router.push('/marketHome/details')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.homeFloor {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: auto;
    .top {
      > p {
        width: 100%;
        background: #4bb3ff;
        color: #fff;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }

  .form-item {
    align-items: center;
    margin: 10px;
  }
}

.top {
  margin-bottom: 20px;
}
</style>
