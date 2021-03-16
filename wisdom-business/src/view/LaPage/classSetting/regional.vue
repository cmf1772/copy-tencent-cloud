<template>
  <div class="classificationOfFood">
    <div class="fied_top">
      <el-button type="primary"
                 size="medium"
                 @click="addDialog">添加分类</el-button>
    </div>
    <div class="fied_con">
      <div class="bot_btn">
        <el-button size="medium" @click="selectDelchange">删除选定</el-button>
        <el-button size="medium" @click="createLevelCat">更新分类列表</el-button>
        <el-button size="medium" @click="correct">分类层次自动纠错</el-button>
      </div>
      <el-table :data="tableData"
                style="width: 100%"
                :height="height"
                @selection-change="handleSelectionChange"
                row-key="id"
                lazy
                :load="childrenData"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column prop="name"
                         label="地区名称">
        </el-table-column>
        <el-table-column label="添加下级分类"
                         align="center"
                         width="200">
          <template>
            <el-tooltip class="item"
                        effect="dark"
                        content="添加分类"
                        placement="top">
              <i class="el-icon-circle-plus"
                 @click="addDialog"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作"
                         width="160">
          <template slot-scope="scope">
            <el-button type="text"
                       @click="edit(scope.row)"
                       size="small">修改</el-button>
            <el-button type="text"
                       size="small"
                       style="color: #f00;"
                       @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalData">
        </el-pagination>
    </div>

    <el-dialog :title="dialogVisibleTitle"
               :visible.sync="dialogVisible"
               width="40%"
               center
               class="add_dislog">
      <div class="dislog_con">
        <el-form ref="form"
                 :model="form"
                 label-width="100px">
            <el-form-item label="分类名称">
              <el-input v-model="form.name" style="width: 70%"></el-input>
            </el-form-item>
            <el-form-item label="首字母">
              <el-input v-model="form.code" style="width: 70%"></el-input>
            </el-form-item>
            <el-form-item label="上级分类">
              <el-cascader  
              v-model="form.fid"
              :options="tableData"
              :props="props"
              clearable></el-cascader> 
            </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary"
                   @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      priceDialogPrice: false,
      dialogVisibleTitle: '',
      height: window.innerHeight - 300,
      tableData: [],
      dialogVisible: false,
      form: {},
      fileList: [],
      currentPage: 1,
      ruleForm: {},
      page_size: 10,
      rules: {},
      totalData: 0,
      selectData: [],
      options: {
        value: 'id',
        label: 'name'
      },
      props: { 
        checkStrictly: true, 
        emitPath: false,
        lazy: true, 
        value: 'id', 
        label: 'name', 
        children: 'children',
        lazyLoad: ((node,   resolve) => {
          this.$newApi.DQgetSubList({
            uid: node.data.id,
            token: JSON.parse(this.$store.state.token).token,
          }).then(val => {
            resolve(val.data)
          })
        })
      },
    };
  },
      
  mounted() {
    this.create()
  },

  methods: {
    create () {
      this.$newApi.getAreaPageList({
        page: this.currentPage,
        page_size: this.page_size,
        area_name: '',
        fid: '0',
        order_type: 'desc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.totalData = res.data.total_result
        res.data.items.forEach(item => {
          item.hasChildren = true
        })
        this.tableData = res.data.items
      })
    },
    childrenData(tree, treeNode, resolve) {
      this.$newApi.DQgetSubList({
        uid: tree.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        val.data.forEach(item => {
          item.hasChildren = true
        })
        resolve(val.data)
      })
    },
    handleSelectionChange (selection) {
      this.selectData = selection
    },
    selectDelchange() {
      let arr = ''
      this.selectData.forEach((item, index) =>{
        if(index == 0) {
          arr = item.id
        }
        else {
          arr += ',' + item.id
        }
      })
      this.$newApi.DQbatDelAreaItem({
        uid: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        this.$message({
          message: val.data.msg
        })
        this.create()
      })
    },
    createLevelCat() {
      this.$newApi.DQcreateLevelCat({
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        this.$message({
          message: val.data.msg
        })
      })
    },
    cancel() {
      this.dialogVisible = false;
      this.form = {}
    },
    correct() {
      this.$newApi.DQcorrect({
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        this.$message({
          message: val.data.msg
        })
      })
    },
    addDialog () {
      this.dialogVisible = true;
      this.dialogVisibleTitle = '添加地区'
    },
    lazyload(node, resolve) {
      this.$newApi.DQgetSubList({
        uid: node.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        val.data.forEach(item => {
          item.hasChildren = true
        })
        resolve(val.data)
      })
    },
    del(row) {
      this.$newApi.DQdelAreaItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    edit(row) {
      this.dialogVisible = true;
      this.dialogVisibleTitle = '修改地区'
      this.$newApi.DQgetAreaItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
      })
    },
    save() {
      if(this.form.id) {
        this.$newApi.DQsetAreaItem({
          uid: this.form.id,
          fid: this.form.fid,
          name: this.form.name,
          code: this.form.code,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '编辑成功'
            })
            this.dialogVisible = false;
            this.create()
            this.form = {}
          }
        })
      }
      else{
        this.$newApi.DQaddAreaItem({
          fid: this.form.fid,
          name: this.form.name,
          code: this.form.code,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.dialogVisible = false;
            this.create()
            this.form = {}
          }
        })
      }
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
  }
};
</script>

<style lang="scss" scoped>
.classificationOfFood {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  .fied_top {
    width: 100%;
    border-radius: 5px;
    background: #ffffff;
    padding: 10px 0;
    text-align: right;
    margin-bottom: 5px;
    .el-button {
      margin-right: 20px;
    }
  }
  .fied_con {
    flex: 1;
    overflow: auto;
    background: #fff;
    .el-table {
      .el-table__row {
        i {
          font-size: 25px;
          color: rgb(104, 226, 114);
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .bot_btn {
      margin-top: 10px;
    }
  }
}
.add_dislog {
  .dislog_con {
    height: 32vh;
    overflow: auto;
  }
  .el-form-item {
    .el-input {
    }
    .el-textarea {
    }
  }
  .form_lins {
    display: flex;
    .el-form-item {
      flex: 1;
      p {
        i {
          display: inline-block;
          font-size: 20px;
          margin-right: 5px;
        }
        color: #999;
        line-height: 24px;
      }
    }
  }
  .attribute_screen {
    display: flex;
    label {
      min-width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: right;
      padding-right: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;

      i {
        margin-left: 5px;
        color: rgb(104, 226, 114);
        font-size: 20px;
        &:hover {
          cursor: pointer;
        }
      }

      .screen_input{
        flex: 1;
      }
    }
    .screen_input {
      div {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        .el-input {
          width: 15%;
          margin-right: 5px;
        }
        i {
          color: rgb(104, 226, 114);
          font-size: 20px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
