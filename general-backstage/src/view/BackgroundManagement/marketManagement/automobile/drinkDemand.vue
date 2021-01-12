<template>
  <div class="foodAndDrink">
    <div class="navPage_top">
      <el-input placeholder="请输入标题关键字"
                style="width: 200px"
                v-model="title"
                clearable>
      </el-input>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-search"
                 @click="create()">
        搜索
      </el-button>
    </div>
    <div class="navPage_con">
      <el-table :data="tableData"
                :height="height">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column prop="member_id"
                         label="发布者">
        </el-table-column>
        <el-table-column prop="goods_name"
                          width="240"
                         label="商品名称">
          <template slot-scope="scope">
            <div style="display: flex">
              <div class="img">
                <img :src="$store.state.getUploadUrl + scope.row.pic" alt="">
              </div>
              <p class="name_content">{{scope.row.goods_name}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="分类名称">
        </el-table-column>
        <el-table-column prop="price"
                         label="单价">
        </el-table-column>
        <el-table-column prop="num" 
                         label="数量">
        </el-table-column>
        <el-table-column prop="od"
                         label="权重">
          <template slot-scope="scope">
            <el-input v-model="scope.row.od" @blur="orderChange(scope.row, scope.row.od)"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="status"
                         label="状态">
        </el-table-column>
        <el-table-column prop="msg_num"
                         label="留言数量">
        </el-table-column>
        <el-table-column label="操作"
                         width="100">
          <template slot-scope="scope">
            <el-button type="text"
                       @click="addNav(scope.row)"
                       size="small">编辑</el-button>
            <el-button type="text"
                       size="small"
                       style="color: #f00;"
                       @click="del(scope.row)">删除</el-button>
            <el-button type="text"
                       size="small"
                       @click="audit(scope.row)">审核</el-button>
            <el-button type="text"
                       size="small"
                       style="color: #f00;"
                       @click="reject(scope.row)">驳回</el-button>
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

    <el-dialog title="修改供应信息"
               :visible.sync="dialogVisible"
               width="65%"
               :before-close="handleClose"
               center>
      <el-form ref="form"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名称："
                      style="width: 100%"
                      prop="goods_name">
          <el-input v-model="form.goods_name"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="商品分类："
                      prop="goods_category">
          <div class="form-item">
            <el-select v-model="form.goods_category"
                       style="width: 100%;"
                       clearable>
              <el-option v-for="(item, index) in categoryData" :key="index" :label="item.board_title" :value="item.uid"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="商品数量："
                      prop="num">
          <el-input v-model="form.num">
          </el-input>
        </el-form-item>
        <el-form-item label="商品单价："
                      prop="price">
          <el-input v-model="form.price">
            <span slot="suffix">元</span>
          </el-input>
          <p>（注：填0或不填表示价格面议）</p>
        </el-form-item>
        <el-form-item label="商品简介："
                      style="width: 100%"
                      prop="intro">
          <el-input v-model="form.intro"
                    type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="所在地区："
                      prop="name">
          <div style="width:100%; display: flex">
            <el-select v-model="form.province"
                     clearable
                     style="width:25%"
                     @change="changeCity"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     style="width:25%;margin-left:0"
                     clearable
                     @change="changeAreaList"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.county"
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
        <el-form-item label="手机："
                      prop="tel">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="QQ："
                      prop="qq">
          <el-input v-model="form.qq"></el-input>
        </el-form-item>
        <el-form-item label="旺旺："
                      prop="ww">
          <el-input v-model="form.ww"></el-input>
        </el-form-item>
        <el-form-item label="权重："
                      prop="od">
          <el-input v-model="form.od"></el-input>
        </el-form-item>
        <el-form-item label="当前展示图片："
                      prop="name">
          <img :src="$store.state.getUploadUrl + form.pic"
               style="width: 200px; height: 200px"
               alt="">
        </el-form-item>
        <el-form-item label="展示图片："
                      prop="name">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible1">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="详细说明："
                      style="width: 100%">
          <div ref="editorElem"
               style="width: 100%;"></div>
        </el-form-item>
      </el-form>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data () {
    return {
      dialogImageUrl: '',
      height: window.innerHeight - 280,
      fileList: [],
      dialogVisible: false,
      dialogVisible1: false,
      title: '',
      tableData: [],
      categoryData: [],
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      form: {
        type: []
      },
      editor: null,
    };
  },
  mounted () {
    this.$api.getBoardList({
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.categoryData = res.data
    })
    this.create()
    this.$store.commit('GET_CITY')
  },
  methods: {
    create() {
      this.$newApi.QCgetWantBuyPageList({
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
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    del(row) {
      this.$newApi.QCdelWantBuyItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    // 权重
    orderChange(row, val) {
      this.$newApi.QCsetOdItemBuy({
        uid: row.uid,
        od: val,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    audit(row) {
      this.$newApi.QCsetCheckItemBuy({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    reject(row) {
      this.$prompt('', '驳回原因', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
      }).then(({ value }) => {
        this.$newApi.QCsetBackItemBuy({
          uid: row.uid,
          back_reason: value,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.$message({
            message: res.data.msg
          });  
          this.create()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        });       
      });
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
    save() {
      this.$newApi.QCsetWantBuyItem({
        uid: this.form.uid,
        goods_name: this.form.goods_name,
        goods_cat: String(this.form.goods_category),
        num: this.form.num,
        price: this.form.price,
        intro: this.form.intro,
        province: String(this.form.province),
        city: String(this.form.city),
        county: String(this.form.county),
        tel: this.form.tel,
        qq: this.form.qq,
        ww: this.form.ww,
        od: this.form.od,
        pic: this.dialogImageUrl,
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
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.dialogVisible = false
        }
      })
    },

    changeCity () {
      this.form.city = ''
      this.form.county = ''
      this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
    },

    changeAreaList () {
      this.form.county = ''
      this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
    },

    handleClose() {
      this.dialogVisible = false
      this.form = {}
    },
    addNav (row) {
      this.$newApi.QCgetWantBuyItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        this.form.province = Number(this.form.province)
        this.form.city = Number(this.form.city)
        this.form.county = Number(this.form.county)
        this.editor.txt.html(res.data.detail)
      })
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.editor = new E(this.$refs.editorElem);
        // 编辑器的事件，每次改变会获取其html内容
        this.editor.customConfig.onchange = html => {
          this.form.detail = html;
        };
        this.editor.customConfig.menus = [
          // 菜单配置
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'image', // 插入图片
          'table', // 表格
          'code' // 插入代码
        ];
        this.editor.create(); // 创建富文本实例
      })
    },
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-table  {
    .el-table__row {
        min-height: 100px;
        .img {
          width: 100px;
          height: 100px;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
            height: 100px !important;
          }
        }
        .name_content{
          width: 100px;
          height: 100px;
          overflow-y: auto;
        }
  }
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.foodAndDrink {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    // text-align: right;
    .el-button {
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .navPage_con {
    flex: 1;
    background: #fff;
  }
  .dislog_form {
    max-height: 50vh;
    overflow: auto;
    .el-form-item {
      .el-input {
        width: 80%;
      }
      .el-select {
        width: 80%;
      }
      .el-radio-group {
        .el-radio {
          flex: 1;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
