<template>

  <div class="editCircleManagement">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="生活圈名称"
                    prop="c_name"
                    required>
        <el-input v-model="form.c_name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="当前分类"
                    prop="driverId"
                    required>
        {{editData.cat_name}}
        <span>重新选择：</span>
        <el-select v-model="form.driverId"
                    @change="change"
                   placeholder="请选择"
                   style="width: 150px;">
          <el-option v-for="item in editData.cat_parent"
                     :key="item.uid"
                     :label="item.title"
                     :value="item.uid">
          </el-option>
        </el-select>
        <el-select v-model="form.carId"
                   placeholder="请选择"
                   style="width: 150px;">
          <el-option v-for="itm in carParentData"
                     :key="itm.uid"
                     :label="itm.title"
                     :value="itm.uid">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在地区"
                    prop="region">
        <div style="width:600px; display: flex">
          <el-select v-model="form.province"
                     clearable
                     @change="changeCity"
                     style="width:33.3%"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     clearable
                     @change="changeAreaList"
                     style="width:33.3%;margin-left:0"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.county"
                     clearable
                     style="width:33.3%;margin-left:0"
                     placeholder="所在县">
            <el-option v-for="(item, index) in $store.state.county"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="圈子名称"
                    prop="c_name"
                    required>
        <el-input v-model="form.c_name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="圈子介绍"
                    prop="c_intro"
                    required>
        <el-input v-model="form.c_intro"
                  type="textarea"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="共同爱好"
                    prop="c_hobby"
                    required>
        <el-input v-model="form.c_hobby"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="宣言"
                    prop="c_proclaim"
                    required>
        <el-input v-model="form.c_proclaim"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="当前LOGO"
                    required>
        <div style="width: 200px; height: 200px">
          <img :src="form.c_logo"
               style="width: 100%; height: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="LOGO上传"
                    required>
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
      </el-form-item>
      <el-form-item label="圈子标签"
                    prop="c_tag"
                    required>
        <el-input v-model="form.c_tag"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="加入方式"
                    prop="join_check"
                    required>
        <el-radio v-model="form.join_check"
                  label="1">需要圈子管理员批准才能加入</el-radio>
        <el-radio v-model="form.join_check"
                  label="2">允许任何人加入圈子</el-radio>
      </el-form-item>
      <el-form-item label="权重"
                    prop="od"
                    required>
        <el-input v-model="form.od"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import profileService from '../../service/profile'
// import driverService from '../../service/driver'
export default {
  name: 'editCircleManagement',
  data () {
    return {
      radio: 2,
      dialogImageUrl: '',
      dialogVisible: false,

      editData: {},
      carParentData: [],

      form: {
      },
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属分类', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  mounted() {
    this.$store.commit('GET_CITY')
    this.$newApi.getCommunityItem({
      uid: this.$route.query.id,
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.editData = res.data
      this.form = JSON.parse(JSON.stringify(res.data.comm))
      this.$set(this.form, 'cat_name', res.data.cat_name)
      // this.editData.cat_name = res.data.cat_name
    })
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
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
    changeCounty () {
      this.$store.commit('GET_CITY', { id: this.form.county, name: 'district' })
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    change() {
      this.$set(this.form, 'carId', '')
      this.carParentData = []
      this.editData.cat_parent.forEach((item, index) => {
        if(item.uid == this.form.driverId) {
          this.carParentData = item.children
        }
      })
    },

    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let arr = ''
          if(this.form.driverId) {
            arr = this.form.driverId + ',' + this.form.carId
          }
          this.$newApi.setCommunityItem({
            uid: this.$route.query.id,
            cat: arr,
            c_name: this.form.c_name,
            province: String(this.form.province),
            city: String(this.form.city),
            county: String(this.form.county),
            c_intro: this.form.c_intro,
            c_hobby: this.form.c_hobby,
            c_proclaim: this.form.c_proclaim,
            c_logo: this.form.c_logo,
            c_tag: this.form.c_tag,
            join_check: this.form.join_check,
            od: this.form.od,
            token: JSON.parse(this.$store.state.token).token,
          }).then(res => {
            this.$router.go(-1)
          })
        } else {
          return false;
        }
      });
    },
    initDrivers () {
      // driverService.queryList().then(res => {
      //   if (res.data.state === 1) {
      //     this.drivers = res.data.data;
      //   } else {
      //     throw new Error(res.data.msg);
      //   }
      // }).catch(error => {
      //   this.$message.error("驱动数据加载失败");
      // })
    }
  },
  created () {
    this.initDrivers();
  }
}
</script>
<style scoped>
.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
</style>
