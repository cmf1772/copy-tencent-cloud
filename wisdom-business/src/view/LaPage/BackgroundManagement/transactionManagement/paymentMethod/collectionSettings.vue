<template>
  <div class="displayProducts">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="支付名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="pay_desc"
                           show-overflow-tooltip
                           label="支付描述">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">安装</el-button>
                <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">申请</el-button> -->
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
    <el-dialog title="支付方式安装"
               :visible.sync="dialogVisible"
               width="60%">
      <div>
        <el-form ref="modeOfpay"
                 :model="modeOfpay"
                 label-width="150px">
          <el-form-item label="支付名称："
                        prop="pay_name">
            <el-input v-model="modeOfpay.pay_name"></el-input>
          </el-form-item>
          <el-form-item label="支付描述："
                        prop="pay_desc">
            <el-input v-model="modeOfpay.pay_desc"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="支付宝帐号："
                        prop="seller_email">
            <el-input v-model="modeOfpay.seller_email"></el-input>
          </el-form-item>
          <el-form-item label="KEY："
                        prop="security_code">
            <el-input v-model="modeOfpay.security_code"></el-input>
          </el-form-item>
          <el-form-item label="PID："
                        prop="partner">
            <el-input v-model="modeOfpay.partner"></el-input>
          </el-form-item>
          <el-form-item label="支付宝真实姓名："
                        prop="real_name">
            <el-input v-model="modeOfpay.real_name"></el-input>
          </el-form-item>
          <el-form-item label="手机接口支付公钥："
                        prop="public_key">
            <el-input v-model="modeOfpay.public_key"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="手机接口支付密钥："
                        prop="private_key">
            <el-input v-model="modeOfpay.private_key"></el-input>
          </el-form-item>
          <el-form-item label="手机接口支付密钥："
                        prop="private_key">
            <div>
              <el-radio v-model="radio" v-for="(value, index) in radioData" :key="index" :label="value.value">{{value.name}}</el-radio>
              <el-input v-model="radio" disabled></el-input>
            </div>
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
  name: 'displayProducts',

  data () {
    return {
      radio: '',
      time: [],
      radioData: [
        {
          name: '纯担保交易接口',
          value: 'create_partner_trade_by_buyer'
        },
        {
          name: '标准实物双接口',
          value: 'trade_create_by_buyer'   
        },
        {
          name: '即时到账接口',
          value: 'create_direct_pay_by_user'
        }
      ],
      status: '',
      dialogVisible: false,
      form: {
        uid: '',
        service: '1'
      },
      options: [
        { value: '', label: '全部' },
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
      ],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      modeOfpay: {}
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getPaymentPageList({
        page: this.currentPage,
        page_size: this.page_size,
        keyword: "",
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    look(index, row) {
      this.$newApi.getPaymentItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.modeOfpay = {}
        res.data.pay.cfg.forEach(element => {
          if(element.name == 'service') {
            this.radio = element.value
          }
          this.modeOfpay[element.name] = element.value
        });
        this.modeOfpay.pay_name = res.data.pay.name
        this.modeOfpay.pay_desc = res.data.pay.pay_desc
        this.modeOfpay.uid = res.data.pay.id
      })
      this.dialogVisible = true
    },
    save() {
      this.$newApi.setAlipayPaymentItem({
        pay_name: this.modeOfpay.pay_name,
        pay_desc: this.modeOfpay.pay_desc,
        seller_email: this.modeOfpay.seller_email,
        security_code: this.modeOfpay.security_code,
        partner: this.modeOfpay.partner,
        real_name: this.modeOfpay.real_name,
        public_key: this.modeOfpay.public_key,
        private_key: this.modeOfpay.private_key,
        uid: this.modeOfpay.uid,
        service: this.radio,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
          this.$message({
            showClose: true,
            message: res.data.msg,
            type: 'success'
          });
          this.dialogVisible = false
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
}
</script>

<style lang="scss" scoped>
.displayProducts {
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
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
