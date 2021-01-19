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
                row-key="uid"
                lazy
                :load="childrenData"
                :tree-props="{ children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column prop="category_name"
                         label="分类名称"
                         width="300">
        </el-table-column>
        <el-table-column prop="category_rank"
                         label="输出顺序"
                         align="center">
        </el-table-column>
        <el-table-column label="添加下级分类"
                         align="center"
                         width="150">
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
                       size="small"
                       @click="copy(scope.row)">复制</el-button>
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
               width="60%"
               center
               class="add_dislog">
      <div class="dislog_con">
        <el-form ref="form"
                 :model="form"
                 label-width="100px">
          <div class="form_lins">
            <el-form-item label="分类名称">
              <el-input v-model="form.category_name"></el-input>
            </el-form-item>
            <el-form-item label="上级分类">
              <el-cascader
              v-model="form.category_id"
              :options="tableData"
              :props="props"
              clearable></el-cascader> 
            </el-form-item>
            <!-- <p><i class="el-icon-warning"></i> 如该分类是顶级分类，此处留空</p> -->
          </div>
          <div class="form_lins">
            <el-form-item label="分类关键字">
              <el-input v-model="form.category_key"></el-input>
            </el-form-item>
            <el-form-item label="分类描述">
              <el-input type="textarea"
                        v-model="form.category_desc"></el-input>
            </el-form-item>
          </div>
          <div class="form_lins">
            <el-form-item label="输出顺序">
              <el-input v-model="form.category_rank"></el-input>
              <p>
                请直接输入数字，数值越小，显示越靠前
              </p>
            </el-form-item>
            <el-form-item label="佣金比例">
              <el-input v-model="form.rate"></el-input>
              <p>
                请填写界于0-1之间的小数（小数位不限），否则自动归零。
              </p>
            </el-form-item>
          </div>

          <el-form-item label="分类图标">
            <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemove"
                      :on-error="uploadError"
                      :on-success="uploadSuccess"
                      :before-upload="beforeAvatarUpload"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceed"
                      :file-list="fileList">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          </el-form-item>
          <div class="attribute_screen">
            <label>筛选属性<i class="el-icon-circle-plus"
                 @click="addInput"></i></label>
            <div class="screen_input">
              <div v-for="(item, index) in inputData"
                   :key="index">
                  <el-input v-model="item.att_name"></el-input>：
                <el-input v-for="(itm, idx) in item.data"
                          :key="idx"
                          v-model="itm.value"></el-input>
                <i class="el-icon-circle-plus"
                   @click="addValue(index)"></i>
              </div>
            </div>
          </div>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="() => {dialogVisible = false; this.form = {}, this.inputData = [{}], this.fileList = []}">取 消</el-button>
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
      inputData: [
        {
          data: [
            {
              value: ""
            },
            {
              value: ""
            }
          ]
        }
      ],
      selectData: [],
      options: {
        value: 'uid',
        label: 'category_name'
      },
      props: { 
        checkStrictly: true, 
        emitPath: false,
        lazy: true, 
        value: 'uid', 
        label: 'category_name', 
        children: 'children',
        lazyLoad: ((node, resolve) => {
          this.$newApi.QCgetSubListVIP({
            uid: node.data.uid,
            token: JSON.parse(this.$store.state.token).token,
          }).then(val => {
            resolve(val.data)
          })
        })
      },
      
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
    };
  },
  created() {

      
  },
  mounted() {
    this.create(),
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },

  methods: {
    create () {
      this.$newApi.QCgetCategoryPageListVIP({
        page: this.currentPage,
        page_size: this.page_size,
        category_name: '',
        category_id: '',
        order_type: 'desc',
        order_field: 'uid',
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
      this.$newApi.QCgetSubListVIP({
        uid: tree.uid,
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
          arr = item.uid
        }
        else {
          arr += ',' + item.uid
        }
      })
      this.$newApi.QCbatDelCategoryItemVIP({
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
      this.$newApi.QCcreateLevelCatVIP({
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        this.$message({
          message: val.data.msg
        })
      })
    },
    correct() {
      this.$newApi.QCcorrectVIP({
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        this.$message({
          message: val.data.msg
        })
      })
    },
    addDialog () {
      this.dialogVisible = true;
      this.dialogVisibleTitle = '新增分类'
    },
    lazyload(node, resolve) {
      this.$newApi.QCgetSubListVIP({
        uid: node.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        val.data.forEach(item => {
          item.hasChildren = true
        })
        resolve(val.data)
      })
    },
    del(row) {
      this.$newApi.QCdelCategoryItemVIP({
        uid: row.uid,
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
      this.dialogVisibleTitle = '编辑分类'
      this.$newApi.QCgetCategoryItemVIP({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        this.inputData = []
        if(res.data.category_file1 !== '') {
          this.fileList.push({name: res.data.category_file1, url: res.data.category_file1})
        }
        for(let i in res.data.att_list) {
          let obj = {
            data: []
          }
          obj.att_name = i
          res.data.att_list[i].forEach((item, index) => {
            let objs = {
              value: item
            }
            obj.data.push(objs)
          })
          this.inputData.push(obj)
        }
      })
    },
    copy(row) {
      this.$newApi.QCcopyCategoryItemVIP({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    save() {
      let att_name = ''
      let att_value = ''
      this.inputData.forEach((item, index) => {
        if(index == 0) {
          att_name = item.att_name
        }
        else{
          att_name += ',' + item.att_name
        }
        let arr = ''
        item.data.forEach((itm, idx) => {
          if(idx == 0) {
            arr = index + '_' + idx + '=' +  itm.value
          }
          else{
            arr += ',' + index + '_' + idx + '=' + itm.value
          }
        })
        if(index == 0) {
          att_value = arr
        }
        else{
          att_value += ',' + arr
        }
      }) 
      if(this.form.uid) {
        this.$newApi.QCsetCategoryItemVIP({
          uid: this.form.uid,
          category_id: this.form.category_id,
          category_name: this.form.category_name,
          category_key: this.form.category_key,
          category_desc: this.form.category_desc,
          category_rank: this.form.category_rank,
          rate: this.form.rate,
          category_file1: this.uploadPicUrl,
          att_name: att_name,
          att_value: att_value,
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
            this.inputData = [{}]
            this.fileList = []
          }
        })
      }
      else{
        this.$newApi.QCaddCategoryItemVIP({
          category_id: this.form.category_id,
          category_name: this.form.category_name,
          category_key: this.form.category_key,
          category_desc: this.form.category_desc,
          category_rank: this.form.category_rank,
          rate: this.form.rate,
          category_file1: this.uploadPicUrl,
          att_name: att_name,
          att_value: att_value,
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
            this.inputData = [{}]
            this.fileList = []
          }
        })
      }
    },
    addInput () {
      this.inputData.push({ data: [{}] });
    },
    addValue (index) {
      this.inputData[index].data.push({ data: [{}] });
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

    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
    },
    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
    console.log(response, file, fileList)
      this.uploadPicUrl = `${this.qiniuaddr}${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
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
    height: 53vh;
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
