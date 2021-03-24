<template>
  <div class="shop_list" :style="{ height: heights }">
    <div class="list_top">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="top_content">
          <el-form-item label="商铺等级">
            <el-radio-group v-model="form.resource">
              <el-radio label="-1">全部</el-radio>
              <el-radio label="0">普通</el-radio>
              <el-radio label="1">扶植</el-radio>
              <el-radio label="2">标准</el-radio>
              <el-radio label="3">拓展</el-radio>
              <el-radio label="4">旗舰</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="会员ID">
            <el-input v-model="form.ps_member"></el-input>
          </el-form-item>
        </div>
        <div class="top_content">
          <el-form-item label="开店时间">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="商铺名称">
            <el-input v-model="form.shop_name"></el-input>
          </el-form-item>
        </div>
        <div class="top_content">
          <el-form-item label="所属区域">
            <el-select v-model="province"
                      clearable
                      style="width: 30%;"
                      @change="changeCity"
                      placeholder="所在省">
              <el-option v-for="(item, index) in $store.state.cityList"
                        :key="index"
                        :label="item.name"
                        :value="item.id"></el-option>
            </el-select>
            <el-select v-model="city"
                      style="margin-left:0;width: 30%;"
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
                      style="margin-left:0;width: 30%;"
                      placeholder="所在县">
              <el-option v-for="(item, index) in $store.state.county"
                        :key="index"
                        :label="item.name"
                        :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商铺登记">
            <el-radio-group v-model="form.is_mcyd">
              <el-radio label="0">星店</el-radio>
              <el-radio label="1">云店</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button type="primary" @click="create">搜索商铺</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="vip_id" label="会员ID（会员姓名）" width="150px">
          <template slot-scope="scope">
            {{scope.row.approval_date}}({{scope.row.m_id}})
          </template>
        </el-table-column>
        <el-table-column prop="shop_name" label="商铺名称"> </el-table-column>
        <el-table-column prop="tag" label="状态"> </el-table-column>
        <el-table-column prop="sellshow" label="商铺类型"> </el-table-column>
        <el-table-column prop="supplier_cat" label="商铺分类"> </el-table-column>
        <el-table-column prop="shop_level_name" label="商铺等级"> </el-table-column>
        <el-table-column prop="is_mcyd" label="云店/星店"> </el-table-column>
        <el-table-column prop="is_mstore" label="品牌总店"> </el-table-column>
        <el-table-column prop="status" label="商铺状态">
          <template slot-scope="scope">
            <span @click="statusChange(scope.row)" class="status">{{scope.row.status}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" style="color: #f00" @click="del(scope.row)"
              >删除</el-button
            ><el-button type="text" size="small" @click="recommend">推荐</el-button>
            <!-- <el-button type="text" size="small">管理</el-button> -->
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
      title="修改商铺信息"
      :visible.sync="dialogVisible"
      :before-close="cancel"
      width="70%">
      <h3 style="color: #f00">商家基本资料</h3>
      <el-form ref="ruleForm" :model="ruleForm" label-width="130px">
        <div class="form_display">
          <el-form-item label="会员ID">
            {{ruleForm.m_uid}}
          </el-form-item>
          <el-form-item label="会员姓名">
            {{ruleForm.m_id}}
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="登录密码">
            <el-input v-model="ruleForm.new_pass" style="width: 70%;" placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
          <el-form-item label="支付密码">
            <el-input v-model="ruleForm.newpay_pass" style="width: 70%;" placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="生日">
            <el-input v-model="ruleForm.birth_yy" style="width: 28%">
            </el-input>年
            <el-input v-model="ruleForm.birth_mm" style="width: 28%">
            </el-input>月
            <el-input v-model="ruleForm.birth_dd" style="width: 28%">
            </el-input>日
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="ruleForm.member_sex">
              <el-radio :label="0">先生</el-radio>
              <el-radio :label="1">女生</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="固话">
            <el-input v-model="ruleForm.member_tel1" style="width: 70%;"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="ruleForm.member_tel2" style="width: 70%;"></el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="所在区域">
            <el-select v-model="province"
                      clearable
                      style="width: 30%"
                      @change="changeCity"
                      placeholder="所在省">
              <el-option v-for="(item, index) in $store.state.cityList"
                        :key="index"
                        :label="item.name"
                        :value="item.id"></el-option>
            </el-select>
            <el-select v-model="city"
                      style="margin-left:0;width: 30%"
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
                      style="margin-left:0;width: 30%"
                      placeholder="所在县">
              <el-option v-for="(item, index) in $store.state.county"
                        :key="index"
                        :label="item.name"
                        :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="街道地址">
           <el-input v-model="ruleForm.shop_address" style="width: 70%;"></el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="邮编">
            <el-input v-model="ruleForm.member_zip" style="width: 70%;"></el-input>
          </el-form-item>
          <el-form-item label="淘宝旺旺">
            <el-input v-model="ruleForm.taobao" style="width: 70%;"></el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="qq">
            <el-input v-model="ruleForm.qq" style="width: 70%;"></el-input>
          </el-form-item>
          <el-form-item label="会员等级">
            <el-select v-model="ruleForm.member_class" placeholder="请选择" style="width: 45%;">
              <el-option v-for="(item, index) in mclassData" :key="index" :label="item" :value="index"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="积分">
            <p>当前积分:{{ruleForm.member_point}}</p>
            +/-积分:<el-input v-model="ruleForm.new_point" style="width: 70%;" placeholder="填负数可扣除会员积分"></el-input>
          </el-form-item>
          <el-form-item label="预付款">
            <p>当前预付款:{{ruleForm.member_money}}</p>
            +/-预付款:<el-input v-model="ruleForm.new_money" style="width: 70%;" placeholder="填负数可扣除会员预付款"></el-input>
            <p>冻结金额：{{ruleForm.member_money_freeze}}元</p>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="会员头像">
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
          <el-form-item label="EMAIL">
            <el-input v-model="ruleForm.member_email" style="width: 70%;"></el-input>
          </el-form-item>
        </div>
        <h3 style="color: #f00">商铺资料</h3>
        <div class="form_display">
          <el-form-item label="商铺名称">
            <el-input v-model="ruleForm.shop_name"></el-input>
          </el-form-item>
          <el-form-item label="商铺分类">
            <el-select v-model="flOne" placeholder="请选择" style="width: 45%;" @change="flChang">
              <el-option v-for="(item, index) in flData" :key="index" :label="item.category_name" :value="item.uid"></el-option>
            </el-select>
            <el-select v-model="flTwo" placeholder="请选择" style="width: 45%;">
              <el-option v-for="(item, index) in flDataTwo" :key="index" :label="item.category_name" :value="item.uid"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="二级域名">
            http://<el-input v-model="ruleForm.member_homepage" style="width: 30%;"></el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="主营项目">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.run_product">
            </el-input>
          </el-form-item>
          <el-form-item label="商铺描述">
           <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.shop_intro">
            </el-input>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="商铺logo">
            <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemoveTwo"
                      :on-error="uploadError"
                      :on-success="uploadSuccessTwo"
                      :before-upload="beforeAvatarUploadTwo"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceed"
                      :file-list="fileListTwo">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="商铺类型">
           <el-select v-model="ruleForm.shop_level" placeholder="请选择" style="width: 45%;">
              <el-option v-for="(item, index) in shop_levelData" :key="index" :label="item" :value="index"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="所属商圈">
            <el-select v-model="ruleForm.circle_id" placeholder="请选择" style="width: 45%;">
              <el-option v-for="(item, index) in circle" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属总店">
           <el-select v-model="ruleForm.city_shop_id" placeholder="请选择" style="width: 45%;">
              <el-option v-for="(item, index) in city_shop" :key="index" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="是否品牌总店">
           <el-radio-group v-model="ruleForm.is_mstore">
              <el-radio :label="0">否</el-radio>
              <el-radio :label="1">是</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="所属品牌总店">
           <el-select v-model="ruleForm.main_shop_id" placeholder="请选择活动区域" style="width: 45%;">
              <el-option v-for="(item, index) in main_shop" :key="index" :label="item.shop_name" :value="item.m_uid"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="认证审核">
           <el-radio-group v-model="ruleForm.isSupplier">
              <el-radio :label="0">普通会员</el-radio>
              <el-radio :label="1">未认证商铺</el-radio>
              <el-radio :label="2">已认证商铺</el-radio>
              <el-radio :label="3">已审核商铺</el-radio>
            </el-radio-group>
             <el-checkbox-group v-model="checkList">
                <el-checkbox label="1">个人认证</el-checkbox>
                <el-checkbox label="2">实体认证</el-checkbox>
                <el-checkbox label="4">消保</el-checkbox>
              </el-checkbox-group>
          </el-form-item>
        </div>
        <div class="form_display">
          <el-form-item label="相关证件">
            <span class="status" @click="cardImage(0)">身份证</span>
            <span class="status" @click="cardImage(1)">营业执照</span>
          </el-form-item>
          <el-form-item label="过期时间">
            <el-input v-model="ruleForm.shop_expire" style="width: 50%;" placeholder="格式为yyyy-MM-dd"></el-input>
          </el-form-item>
        </div>
        <el-form-item label="商铺资料重新生成" width="120">
          <el-radio-group v-model="ruleForm.is_recreate">
            <el-radio :label="0">否</el-radio>
            <el-radio :label="1">是</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="美城云店/星店">
          <el-radio-group v-model="ruleForm.is_mcyd">
            <el-radio :label="0">云店</el-radio>
            <el-radio :label="1">星店</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="提现账号">
          <el-radio-group v-model="ruleForm.type">
            <el-radio :label="0">支付宝</el-radio>
            <el-radio :label="1">银行账号</el-radio>
          </el-radio-group>
        </el-form-item>
         <el-form-item label="账号信息">
           <div v-if="!ruleForm.type">
             支付宝账号:<el-input v-model="ruleForm.taobao_account" style="width: 40%;"></el-input>
             支付宝姓名:<el-input v-model="ruleForm.taobao_name" style="width: 40%;"></el-input>
           </div>
           <div v-else>
             银行账号:<el-input v-model="ruleForm.bank_account" style="width: 43%;"></el-input>
             开户行:<el-input v-model="ruleForm.bank" style="width: 43%;"></el-input>
             开户名:<el-input v-model="ruleForm.bank_name" style="width: 43%;"></el-input>
           </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      dialogTitle: '',
      dialogVisible: false,
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      form: {
        name: "",
        region: "",
        date: [],
        delivery: false,
        type: [],
        resource: '-1',
        is_mcyd: '0',
        desc: ""
      },
      ruleForm: {
        certified_type: [],
        is_recreate: 0
      },
      tableData: [],
      province: '',
      city: '',
      county: '',
      checkList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      QiniuDataTwo: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      uploadPicUrlTwo: "", //提交到后台图片地址
      fileList: [],
      fileListTwo: [],
      mclassData: [],
      shop_levelData: [],
      circle: [],
      city_shop: [],
      main_shop: [],
      flData: [],
      flDataTwo: [],
      flOne: '',
      flTwo: '',
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("list_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
      this.create()
    this.$store.commit('GET_CITY')
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.$newApi.CGgetCategoryList({
      token: JSON.parse(this.$store.state.token).token
    }).then(res => {
      this.flData = res.data
    })
  },
  methods: {
    create() {
      this.$newApi.getSupplierPageList({
        page: this.currentPage,
        page_size: this.page_size,
        sellshow: this.$route.query.id,
        province: String(this.province),
        city: String(this.city),
        county: String(this.county),
        start_time: !this.form.date ? '' : this.form.date[0],
        end_time: !this.form.date ? '' : this.form.date[1],
        shop_name: this.form.shop_name,
        ps_member: this.form.ps_member,
        shop_level: this.form.resource,
        is_mcyd: this.form.is_mcyd,
        circle_id: '0',
        city_shop_id: '0',
        order_type: 'asc',
        order_field: 'm_uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    statusChange(row) {
       this.$newApi.ajaxEdit({
        uid: row.m_uid,
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
        }
      })
    },
    cancel() {
      this.dialogVisible = false
      this.fileList = []
      this.fileListTwo = []
      this.uploadPicUrl = ''
      this.uploadPicUrlTwo = ''
      this.mclassData = []
      this.shop_levelData = []
      this.circle = []
      this.city_shop = []
      this.main_shop = []
      this.province = ''
      this.city = ''
      this.county = ''
    },
    recommend() {
      this.$router.push('/shopMagement/recommend')
    },
    onSubmit() {
      let arr = ''
      this.checkList && this.checkList.forEach((item, index) => {
        if(index == 0) {
          arr = item
        }
        else {
          arr += ',' + item
        }
      })
       this.$newApi.setSupplierItem({
        uid: this.ruleForm.uid,
        name: this.ruleForm.m_id,
        pass: this.ruleForm.new_pass,
        pay_pass: this.ruleForm.newpay_pass,
        birth_yy: Number(this.ruleForm.birth_yy),
        birth_mm: Number(this.ruleForm.birth_mm),
        birth_dd: Number(this.ruleForm.birth_dd),
        sex: this.ruleForm.member_sex,
        tel1: this.ruleForm.member_tel1,
        tel2: this.ruleForm.member_tel2,
        province: String(this.province),
        city: String(this.city),
        county: String(this.county),
        address1: this.ruleForm.shop_address,
        zip1: this.ruleForm.member_zip,
        taobao: this.ruleForm.taobao,
        qq: this.ruleForm.qq,
        mclass: String(this.ruleForm.member_class),
        new_point: this.ruleForm.new_point,
        new_money: this.ruleForm.new_money,
        member_file: this.uploadPicUrl,
        email: this.ruleForm.member_email,
        shop_name: this.ruleForm.shop_name,
        goods_cat: this.flTwo,
        homepage: this.ruleForm.member_homepage,
        run_product: this.ruleForm.run_product,
        intro: this.ruleForm.shop_intro,
        up_logo: this.uploadPicUrlTwo,
        shop_level: this.ruleForm.shop_level,
        circle_id: this.ruleForm.circle_id,
        city_shop_id: this.ruleForm.city_shop_id,
        is_mstore: this.ruleForm.is_mstore,
        main_shop_id: this.ruleForm.main_shop_id,
        isSupplier: this.ruleForm.isSupplier,
        certified_type: arr,
        shop_expire: this.ruleForm.shop_expire,
        is_recreate: this.ruleForm.is_recreate,
        is_mcyd: this.ruleForm.is_mcyd,
        account_type: this.ruleForm.type,
        taobao_account: this.ruleForm.taobao_account,
        taobao_name: this.ruleForm.taobao_name,
        bank_account: this.ruleForm.bank_account,
        bank: this.ruleForm.bank,
        bank_name: this.ruleForm.bank_name,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.cancel()
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    cardImage(val) {
      if(val) {
        window.open(this.ruleForm.up_licence)
      }
      else {
        window.open(this.ruleForm.up_id_card)
      }
    },
    flChang() {
      this.flTwo = ''
      this.$newApi.CGgetSubList({
        uid: this.flOne,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.flDataTwo = res.data
      })
    },
    del(row) {
      this.$newApi.delSupplierItem({
        uid: row.m_uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
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
        }
      })
    },
    edit(row) {
      this.dialogVisible = true
      this.$newApi.getSupplierItem({
        uid: row.m_uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.mclassData = res.data.grade
        this.shop_levelData = res.data.shop_level
        this.circle = res.data.circle
        this.city_shop = res.data.city_shop
        this.main_shop = res.data.main_shop
        this.ruleForm = Object.assign(res.data.user, res.data.shop, res.data.account);
        this.ruleForm.member_class = String(this.ruleForm.member_class)
        this.ruleForm.is_recreate = 0
        
        this.province = Number(res.data.shop.province)
        this.changeCity()
        this.city = Number(res.data.shop.city)
        this.changeAreaList()
        this.county = Number(res.data.shop.county)
        
        if(this.ruleForm.cer1_checked) {
          this.checkList.push('1')
        }
        if(this.ruleForm.cer2_checked) {
          this.checkList.push('2')
        }
        if(this.ruleForm.cer4_checked) {
          this.checkList.push('4')
        }

        this.flOne = res.data.shop.supplier_cat_pid
        this.$set(this, 'flTwo', res.data.shop.supplier_cat)
        this.$newApi.CGgetSubList({
          uid: this.flOne,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.flDataTwo = res.data
        })
        if(res.data.user.member_image !== '') {
          this.fileList.push({
            name: res.data.user.member_image, url: res.data.user.member_image
          })
          this.uploadPicUrl = res.data.user.member_image
        }
        if(res.data.shop.up_logo !== '') {
          this.fileListTwo.push({
            name: res.data.shop.up_logo, url: res.data.shop.up_logo
          })
          this.uploadPicUrlTwo = res.data.shop.up_logo
        }
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
    handleRemoveTwo (file, fileList) {
      this.uploadPicUrlTwo = "";
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
    uploadSuccessTwo (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrlTwo = `${this.qiniuaddr}${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },
    beforeAvatarUploadTwo (file) {   //图片上传之前的方法
      this.QiniuDataTwo.data = file;
      this.QiniuDataTwo.key = `${'knowledge/' + file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
    reBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_list {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  .list_top {
    .back{
      float: left;
      margin-left: 20px;
      line-height: 1;
      color: #000;
      font-size: 20px;
    }
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding-top: 5px;
    .el-form {
      .top_content {
        display: flex;
        .el-form-item {
          flex: 1;
          .el-input {
            width: 60%;
          }
        }
      }
    }
  }
  .list_con {
    margin-top: 5px;
    flex: 1;
  }
}
.status{
  &:hover{
    color: #f00;
    cursor: pointer;
  }
}
.form_display{
  display: flex;
  .el-form-item {
    flex: 1;
  }
}
</style>
