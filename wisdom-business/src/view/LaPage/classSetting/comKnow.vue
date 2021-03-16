<template>
  <div class="class_fied" :style="{ height: heights }">
    <div class="fied_top">
      <el-button type="primary" size="medium" @click="addDialog"
        >添加分类</el-button
      >
    </div>
    <div class="fied_con">
      <el-table
        :data="tableData"
        style="width: 100%"
        :max-height="tableHeight"
        @selection-change="handleSelectionChange"
        row-key="id"
        border
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="分类名称"> </el-table-column>
        <el-table-column prop="id" label="输出顺序" width="150" align="center">
        </el-table-column>
        <el-table-column label="添加下级分类" align="center" width="150">
          <template>
            <el-tooltip
              class="item"
              effect="dark"
              content="添加分类"
              placement="top"
            >
              <i class="el-icon-circle-plus" @click="addDialog"></i>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small" style="color: #f00;"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChangeFun"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
      <div class="bot_btn">
        <el-button size="medium">删除选定</el-button>
        <el-button size="medium">更新分类列表</el-button>
        <el-button size="medium">分类层次自动纠错</el-button>
      </div>
    </div>

    <el-dialog
      title="添加分类"
      :visible.sync="dialogVisible"
      width="60%"
      center
      class="add_dislog"
    >
      <div class="dislog_con">
        <el-form ref="form" :model="form" label-width="100px">
          <div class="form_lins">
            <el-form-item label="分类名称">
              <el-input v-model="form.name"></el-input>
              <p></p>
            </el-form-item>
            <el-form-item label="上级分类">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form_lins">
            <el-form-item label="分类关键字">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="分类描述">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
          </div>
          <div class="form_lins">
            <el-form-item label="输出顺序">
              <el-input v-model="form.name"></el-input>
              <p>
                请直接输入数字，数值越小，显示越靠前
              </p>
            </el-form-item>
            <el-form-item label="佣金比例">
              <el-input v-model="form.name"></el-input>
              <p>
                请填写界于0-1之间的小数（小数位不限），否则自动归零。
              </p>
            </el-form-item>
          </div>

          <el-form-item label="分类图标">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                为达到最佳显示效果，请上传36*36像素的图片
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="分类LOGO">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                为达到最佳显示效果，请上传36*36像素的图片
              </div>
            </el-upload>
          </el-form-item>
          <div class="form_lins">
            <el-form-item label="分类标记">
              <el-input v-model="form.name"></el-input>
              <p>分类标记作为前端模板命名</p>
            </el-form-item>
            <el-form-item label=""></el-form-item>
          </div>
          <div class="attribute_screen">
            <label
              >筛选属性<i class="el-icon-circle-plus" @click="addInput"></i
            ></label>
            <div class="screen_input">
              <div v-for="(item, index) in inputData" :key="index">
                <el-input
                  v-for="(itm, idx) in item.data"
                  :key="idx"
                  v-model="itm.value"
                ></el-input>
                <i class="el-icon-circle-plus" @click="addValue(index)"></i>
              </div>
            </div>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="添加价位"
      :visible.sync="priceDialogPrice"
      width="30%"
      center
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="价格" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="价格对应单位" prop="unit">
          <el-input v-model="ruleForm.unit"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="priceDialogPrice = false"
          >确定</el-button
        >
        <el-button
          @click="
            () => {
              this.$refs['ruleForm'].resetFields();
            }
          "
          >重置</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      priceDialogPrice: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          children: [
            {
              id: 21,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              id: 22,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            }
          ]
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄"
            }
          ]
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: "",
      dialogVisible: false,
      form: {},
      fileList: [],
      currentPage: 1,
      ruleForm: {},
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
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("fied_top");
    this.tableHeight =
      window.innerHeight - 250 - inHeight[0].clientHeight + "px";
  },
  methods: {
    handleSelectionChange() {},
    addDialog() {
      this.dialogVisible = true;
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {},
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    addInput() {
      this.inputData.push({ data: [{}] });
    },
    addValue(index) {
      this.inputData[index].data.push({ data: [{}] });
    },
    priceDialog() {
      this.priceDialogPrice = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.class_fied {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
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
    .el-select {
      width: 40%;
    }
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
      width: 100px;
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
