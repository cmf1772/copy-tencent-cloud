<template>
  <div class="userList">
    <div class="top_button">

      <div class="top_left">
        <span>注册时间</span>
        <el-date-picker v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
        <span>会员ID</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>会员等级</span>
        <el-select v-model="value"
                   clearable
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          会员搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  class="table"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="member_id"
                           show-overflow-tooltip
                           label="会员ID"
                           width="180">
          </el-table-column>
          <el-table-column prop="member_name" 
                           show-overflow-tooltip
                           label="姓名">
            <template slot-scope="scope">
              <div>
                <!-- <el-tooltip class="item" placement="top">
                  <div slot="content">多行信息<br/>第二行信息</div>
                  <el-button>{{scope.row.member_name == '' ? '未填写' : scope.row.member_name}}</el-button>
                </el-tooltip> -->
                <el-tooltip placement="top">
                  <div slot="content">性别：{{scope.row.member_sex}}<br/>
                                      注册时间：{{scope.row.register_date}}<br/>
                                      固话号码：{{scope.row.member_tel1}}<br/>
                                      手机号码：{{scope.row.member_tel2}}<br/>
                                      联系地址：{{scope.row.province}}-{{scope.row.city}}-{{scope.row.county}}
                                      </div>
                  <el-button>{{scope.row.member_name == "" ? '未填写' : scope.row.member_name}}</el-button>
                </el-tooltip>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="member_class"
                           label="等级">
          </el-table-column>
          <el-table-column prop="member_point"
                           show-overflow-tooltip
                           label="积分"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="预付款"
                           prop="member_money"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="last_login"
                           label="最后登录时间">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="page_size"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="totalData">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="会员资料"
               :visible.sync="dialogVisible"
               width="60%"
               :before-close="handleClose">
      <div>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
        </p>
        <el-form ref="userData"
                 :model="userData"
                 label-width="130px">
          <el-form-item label="会员ID："
                        prop="name">
            {{userData.member_id}}
          </el-form-item>
          <el-form-item label="会员姓名："
                        prop="member_name">
            <el-input v-model="userData.member_name"></el-input>
          </el-form-item>
          <el-form-item label="登录密码："
                        prop="member_pass">
            <el-input v-model="userData.member_pass"
                      placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
          <el-form-item label="支付密码："
                        prop="pay_pass">
            <el-input v-model="userData.pay_pass"
                      placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
          <el-form-item label="生日："
                        prop="birth">
            <el-date-picker v-model="userData.birth"
                            style="width: 100%"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="性别："
                        prop="member_sex">
            <el-radio v-model="userData.member_sex"
                      label="1">男</el-radio>
            <el-radio v-model="radio"
                      label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="固话："
                        prop="member_tel1">
            <el-input v-model="userData.member_tel1"></el-input>
          </el-form-item>
          <el-form-item label="手机："
                        prop="member_tel2">
            <el-input v-model="userData.member_tel2"></el-input>
          </el-form-item>
          <el-form-item label="所在区域："
                        prop="province">
            <div style="width:100%; display: flex">
              <el-select v-model="userData.province"
                         style="width:50%"
                         clearable
                         placeholder="请选择您申请提供服务的省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="userData.city"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="请选择您申请提供服务的市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="userData.county"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="请选择您申请提供服务的区">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="街道地址："
                        prop="address">
            <el-input v-model="userData.address"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="邮编："
                        prop="member_zip">
            <el-input v-model="userData.member_zip"></el-input>
          </el-form-item>
          <el-form-item label="淘宝旺旺："
                        prop="taobao">
            <el-input v-model="userData.taobao"></el-input>
          </el-form-item>
          <el-form-item label="QQ："
                        prop="qq">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="会员等级："
                        prop="member_class">
            <el-select v-model="userData.member_class"
                       clearable
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="积分："
                        prop="member_point">
            <p>当前积分: <span class="redColor">{{userData.member_point}}</span></p>
            <div class="form-item">
              <p style="width: 100px">+/- 积分</p>
              <el-input v-model="userData.member_point_acc"></el-input>
            </div>
            <p>填负数可扣除会员积分</p>
          </el-form-item>
          <el-form-item label="预付款："
                        prop="member_money">
            <p>当前预付款: <span class="redColor">{{userData.member_money}}</span></p>
            <div class="form-item">
              <p style="width: 100px">+/- 预付款:</p>
              <el-input v-model="userData.member_money_freeze"></el-input>
            </div>
            <p>填负数可扣除会员预付款</p>
            <p>冻结金额：0.00 元</p>
          </el-form-item>
          <el-form-item label="预付款："
                        prop="name">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible1">
              <img width="100%"
                   :src="userData.member_image"
                   alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="EMAIL："
                        prop="member_email">
            <el-input v-model="form.member_email"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'userList',

  data () {
    return {
      province: '',
      city: '',
      radio: 1,
      value1: '',
      dialogImageUrl: '',
      dialogVisible1: false,
      form: { name: '' },
      time: [],
      status: '',
      options: [
        { value: 1, label: '一星美客' },
        { value: 2, label: '二星美客' },
        { value: 3, label: '三星美客' },
        { value: 10, label: '分站管理员' },
        { value: 11, label: '商圈管理员' },
        { value: 12, label: '总店管理员' },
        { value: 3, label: '总管理员' }
      ],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      value: '',
      dialogVisible: false,
      userData: {}
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getUserList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_member: this.sName,
        grade: this.value,
        b_time: this.value1[0],
        e_time: this.value1[1],
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    editor (index, row) {
      this.$newApi.getUserItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        console.log(res)
        this.userData = res.data
        this.userData.birth = res.data.birth_yy + '-' + res.data.birth_mm + '-' + res.data.birth_dd
      })
      this.dialogVisible = true
    },

    save() {
      let birthData = []
      birthData = this.userData.birth.split('-');
      this.$newApi.setUserItem({
        uid: this.userData.uid,
        name: this.userData.member_name,
        pass: this.userData.member_pass,
        pay_pass: this.userData.pay_pass,
        birth_yy: birthData[0],
        birth_mm: birthData[1],
        birth_dd: birthData[2],
        sex: this.userData.member_sex,
        tel1: this.userData.member_tel1,
        tel2: this.userData.member_tel2,
        province: this.userData.province,
        city: this.userData.city,
        county: this.userData.county,
        address1: this.userData.address,
        zip1s: this.userData.zip,
        taobao: this.userData.taobao,
        qq: this.userData.qq,
        mclass: this.userData.member_class,
        new_point: this.userData.member_point_acc,
        new_money: this.userData.member_money_freeze,
        member_file: this.userData.member_image,
        email: this.userData.member_email,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.dialogVisible = false
        console.log(res)
      })
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delUserItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.create()
      })
    },

    release () {
      this.$router.push('/commodityInformation/releasegroupGoods?nameType=发布广告')

    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .table{
  .el-table__row{
    td{
      height: 60px !important;
      .cell {
        height: 100% !important;
      }
      .el-table .cell.el-tooltip {
        height: 100%;
      }
      div{
        height: 100%;
      }
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

.userList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
