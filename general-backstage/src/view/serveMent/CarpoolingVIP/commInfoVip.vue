<template>
  <div class="supply_page" :style="{ height: heights }">
    <div class="supplyPage_top">
      <el-input size="medium" v-model="title"></el-input
      ><el-button type="primary" size="medium" icon="el-icon-search" @click="create"
        >搜索</el-button
      >
    </div>
    <div class="supplyPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="approval_date" label="发布者"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="220px">
          <template slot-scope="scope">
            <img :src="scope.row.pic" alt="" />
            {{ scope.row.goods_name }}
          </template>
        </el-table-column>
        <el-table-column prop="goods_category" label="分类名称"> </el-table-column>
        <el-table-column prop="price" label="单价">
          <template slot-scope="scope"> {{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column prop="num" label="数量" align="center">
        </el-table-column>
        <el-table-column prop="od" label="权重">
          <template slot-scope="scope">
            <el-input v-model="scope.row.od" @blur="odChange(scope.row, scope.row.od)"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="msg_num" label="留言数量" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editDis(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" size="small" style="color: #f00;" @click="delDis(scope.row)"
              >删除</el-button
            >
            <el-button type="text" size="small" @click="shChange(scope.row)" v-if="scope.row.status !== '已审核'"
              >审核</el-button
            >
            <el-button type="text" size="small" style="color: #f00;" @click="bhChange(scope.row)" v-if="scope.row.status !== '已驳回'"
              >驳回</el-button
            >
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

    <el-dialog
      title="修改供应信息"
      :visible.sync="dialogVisible"
      width="60%"
      center
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :style="{ height: tableHeight }"
      >
        <el-form-item label="商品名称">
          <el-input v-model="form.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="flOne" placeholder="请选择" @change="flChange">
            <el-option v-for="item in onoptions" :key="item.value" :label="item.board_title" :value="item.uid" > </el-option>
          </el-select>
          <el-select v-model="flTwo" placeholder="请选择">
            <el-option v-for="item in twoptions" :key="item.value" :label="item.board_title" :value="item.uid"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="商品单价">
          <el-input v-model="form.price"></el-input>元
          <p>填0或不填表示价格面议</p>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input v-model="form.intro" type="textarea" :rows="3"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <div style="width:100%; display: flex">
            <el-select v-model="province"
                     clearable
                     style="width:25%"
                     @change="changeCity"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="city"
                     style="width:25%;margin-left:0"
                     clearable
                     @change="changeAreaList"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="county"
                     clearable
                     style="width:25%;margin-left:0"
                     placeholder="所在县">
            <el-option v-for="(item, index) in $store.state.county"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          </div>
        </el-form-item>
        <div class="form_con">
          <el-form-item label="手机">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="qq">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
        </div>
        <div class="form_con">
          <el-form-item label="旺旺">
            <el-input v-model="form.ww"></el-input>
          </el-form-item>
          <el-form-item label="权重">
            <el-input v-model="form.od"></el-input>
          </el-form-item>
        </div>
        <div class="form_con">
          <el-form-item label="当前展示图片">
            <img :src="form.pic" alt="" />
          </el-form-item>
          <el-form-item label="展示图片">
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
        </div>
        <el-form-item label="详细说明">
          <div ref="editorElem" style="text-align:left;width: 90%;"></div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      currentPage: 1,
      dialogVisible: false,
      editor: null,
      fileList: [],
      totalData: 0,
      page_size: 10,
      title: '',
      value: "",
      form: {},
      options: [],
      tableData: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      uid: '',
      flOne: '',
      flTwo: '',
      onoptions: [],
      twoptions: [],
      province: '',
      city: '',
      county: ''
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("supplyPage_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    this.create()
    this.$store.commit('GET_CITY')
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },
  methods: {
    create() {
      this.$newApi.FWgetWantSupplyPageListVIP({
        page: this.currentPage,
        page_size: this.page_size,
        title: this.title,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
     changeCity () {
      this.city = ''
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.province, name: 'areaList' })
    },

    changeAreaList () {
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.city, name: 'county' })
    },

    flChange() {
      this.flTwo = ''
      this.$newApi.getBoardSubList({
        uid: this.flOne,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.twoptions = res.data
      })
    },

    shChange(row) {
      this.$newApi.FWsetCheckItemVIP({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create()
        }
      })
    },

    bhChange(row) {
      this.$prompt('', '驳回原因', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$newApi.FWsetBackItemVIP({
        uid: row.uid,
        back_reason: value,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create()
        }
      })
      }).catch(() => {
      });
    },

    delDis(row) {
      this.$newApi.FWdelPostItemVIP({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create()
        }
      })
    },

    editDis(row) {
      this.$newApi.getBoardPageList({
        order_field: "od",  
        order_type: "desc",
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.onoptions = res.data.items
      })
      this.uid = row.uid
      this.dialogVisible = true;
      this.$newApi.FWgetWantSupplyItemVIP({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        // this.form.province = Number(this.form.province)
        this.$set(this, 'province', Number(res.data.province))
        this.changeCity()
        this.$set(this, 'city', Number(res.data.city))
        this.changeAreaList()
        this.$set(this, 'county', Number(res.data.county))
        this.flOne = res.data.goods_category_pid
        this.$set(this, 'flTwo', res.data.goods_category)
        this.$newApi.getBoardSubList({
          uid: this.flOne,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.twoptions = res.data
          setTimeout(() => {
          }, 0)
        })
        this.editor.txt.html(res.data.detail)
      })
      this.$nextTick(() => {
        // 富文本编辑器
        this.editor = new E(this.$refs.editorElem);
        // 编辑器的事件，每次改变会获取其html内容
        this.editor.customConfig.onchange = html => {
          this.form.detail = html;
        };
        this.editor.customConfig.menus = [
          // 菜单配置
          "head", // 标题
          "bold", // 粗体
          "fontSize", // 字号
          "fontName", // 字体
          "italic", // 斜体
          "underline", // 下划线
          "strikeThrough", // 删除线
          "foreColor", // 文字颜色
          "backColor", // 背景颜色
          "link", // 插入链接
          "list", // 列表
          "justify", // 对齐方式
          "quote", // 引用
          "image", // 插入图片
          "table", // 表格
          "code" // 插入代码
        ];
        this.editor.create(); // 创建富文本实例
      });
    },
    save() {
      this.$newApi.FWsetWantSupplyItemVIP({
        uid: this.uid,
        goods_name: this.form.goods_name,
        goods_cat:  this.flTwo,
        goods_category_pid: this.flOne,
        num: this.form.num,
        price: this.form.price,
        intro: this.form.intro,
        province: String(this.province),
        city: String(this.city),
        county: String(this.county),
        tel: this.form.tel,
        qq: this.form.qq,
        ww: this.form.ww,
        od: this.form.od,
        pic: this.uploadPicUrl,
        detail: this.form.detail,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.dialogVisible = false
        }
      })
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
    handleClose() {},
    odChange(row, val) {
      this.$newApi.FWsetOdItemVIP({
        uid: row.uid,
        od: val,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
        this.create()
      })
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
.supply_page {
  width: 100%;
  border-radius: 4px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .supplyPage_top {
    width: 100%;
    height: auto;
    padding: 15px 0;
    background: #fff;
    .el-input {
      width: 25%;
      margin-left: 20px;
      /deep/ .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    .el-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .supplyPage_con {
    flex: 1;
    background: #fff;
    border-radius: 4px;
    margin-top: 5px;
    .el-table {
      /deep/ .cell {
      }
      img {
        display: block;
        width: 50%;
        float: left;
      }
    }
  }
  .el-dialog {
    .el-form {
      overflow: auto;
      .el-input {
        width: 50%;
      }
      .el-select {
        width: 20%;
      }
      .el-textarea {
        width: 60%;
      }
      p {
        color: #999;
      }
      .form_con {
        display: flex;
        .el-form-item {
          flex: 1;
        }
        .el-input {
          width: 80%;
        }
        img {
          width: 50%;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
