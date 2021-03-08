<template>
  <div class="substa_page" :style="{ height: heights }">
    <div class="subPage_top">
      <el-button size="medium" type="primary" @click="addRegion"
        >添加搜索地区</el-button
      >
    </div>

    <ul class="subpage_ul" :height="tableHeight">
      <h3>热门地区</h3>
      <li v-for="(item, index) in cityData" :key="index">
        <span>{{ item.name }}</span>
        <div class="city">
          <p v-for="(itm, idx) in item.data" :key="idx">
            <a href="">{{ itm.name }}</a>
            <el-button type="text" @click="delCity(itm)">删除</el-button>
            <el-button type="text" @click="setAdmin(itm)"
              >管理员</el-button
            >
            <el-button type="text" @click="headOffice(itm)">总店</el-button>
          </p>
        </div>
      </li>
    </ul>

    <el-dialog
      title="区域管理员"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="ruleform" label-width="80px">
        <el-form-item label="区域">
          {{ ruleform.name }}
        </el-form-item>
        <el-form-item label="登录名">
          <el-input v-model="ruleform.iphone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleform.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="ruleform.newpassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="添加搜索地区"
      :visible.sync="dialogRegion"
      width="30%"
      :before-close="handleClose"
      class="region_dis"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="地区">
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
                      @change="changeCounty"
                      style="margin-left:0;width: 30%"
                      placeholder="所在县">
              <el-option v-for="(item, index) in $store.state.county"
                        :key="index"
                        :label="item.name"
                        :value="item.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio-group v-model="form.radio">
            <el-radio :label="0">热门地区</el-radio>
            <el-radio :label="1">常规地区</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类" v-if="form.radio">
          <el-select v-model="form.name" placeholder="请选择">
            <el-option
              v-for="(item, index) in cityData"
              :key="item.name"
              :label="item.name"
              :value="index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" v-if="form.radio">
          <el-input v-model="form.order"></el-input>
          <p style="color: #999;">数字越小越靠前</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRegion = false">取 消</el-button>
        <el-button type="primary" @click="areaItemAdd"
          >确 定</el-button
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
      cityData: [
        {
          name: "A",
          data: []
        },
        {
          name: "B",
          data: []
        },
        {
          name: "C",
          data: []
        },
        {
          name: "D",
          data: []
        },
        {
          name: "E",
          data: []
        },
        {
          name: "F",
          data: []
        },
        {
          name: "G",
          data: []
        },
        {
          name: "H",
          data: []
        },
        {
          name: "I",
          data: []
        },
        {
          name: "J",
          data: []
        },
        {
          name: "K",
          data: []
        },
        {
          name: "L",
          data: []
        },
        {
          name: "M",
          data: []
        },
        {
          name: "N",
          data: []
        },
        {
          name: "O",
          data: []
        },
        {
          name: "P",
          data: []
        },
        {
          name: "Q",
          data: []
        },
        {
          name: "R",
          data: []
        },
        {
          name: "S",
          data: []
        },
        {
          name: "T",
          data: []
        },
        {
          name: "U",
          data: []
        },
        {
          name: "V",
          data: []
        },
        {
          name: "W",
          data: []
        },
        {
          name: "X",
          data: []
        },
        {
          name: "Y",
          data: []
        },
        {
          name: "Z",
          data: []
        }
      ],
      dialogVisible: false,
      form: {},
      ruleform: {},
      dialogRegion: false,
      options: [],
      province: '',
      city: '',
      county: '',
      provinces: '',
      citys: '',
      countys: ''
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("subPage_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    this.create()
    this.$store.commit('GET_CITY')

  },
  methods: {
    create() {
      this.cityData.forEach(item => {
        item.data = []
      })
      this.$newApi.getAreaPageList({
        page: '1',
        page_size: '100000',
        area_name: '',
        fid: '',
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.items.forEach((item, index) => {
          this.cityData.forEach((itm, idx) => {
            if(item.code == itm.name) {
              itm.data.push(item)
            }
          })
        })
        console.log(this.cityData)
      })
    },
    areaItemAdd() {
      this.$newApi.addSearchAreaItem({
        type: this.form.radio,
        province: String(this.provinces),
        city: String(this.citys),
        county: String(this.countys),
        cls: String(this.form.name),
        od: this.form.order,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.dialogRegion = false
          this.form = {}
          this.province = ''
          this.city = ''
          this.county = ''
          this.provinces = ''
          this.citys = ''
          this.countys = ''
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    changeCity () {
      this.$store.state.cityList.forEach(item => {
        if(item.id == this.province) {
          this.provinces = item.name
        }
      })
      this.city = ''
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.province, name: 'areaList' })
    },

    changeAreaList () {
      this.$store.state.areaList.forEach(item => {
        if(item.id == this.city) {
          this.citys = item.name
        }
      })
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.city, name: 'county' })
    },

    changeCounty() {
       this.$store.state.county.forEach(item => {
        if(item.id == this.county) {
          this.countys = item.name
          console.log(this.countys)
        }
      })
    },

    delCity(val) {
      this.$newApi.delAreaItem({
        uid: val.id,
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
    
    setAdmin(val) {
      this.dialogVisible = true;
      this.ruleform.name = val.name;
      this.$newApi.getAdminItem({
        type: val.type,
        area: val.name,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        console.log(res)
      })
    },
    handleClose() {},
    headOffice(val) {
      this.$router.push("/shopMagement/headOffice?name=" + val.name);
    },
    addRegion() {
      this.dialogRegion = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.substa_page {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .subPage_top {
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .subpage_ul {
    flex: 1;
    width: 100%;
    background: #fff;
    h3 {
      padding: 5px 0 5px 10px;
    }
    li {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #fff;
      span {
        display: inline-block;
        width: 60px;
        padding: 8px;
        background: rgb(10, 142, 230);
        color: #fff;
        text-align: center;
      }
      .city {
        flex: 1;
        background: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        p {
          a {
            &:hover {
              color: #f00;
              text-decoration: underline;
            }
          }
          margin: 0 10px;
        }
        .el-button {
          margin-left: 5px;
          color: #999;
          &:hover{
            color: #f00;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .region_dis {
    .el-select {
      width: 30%;
    }
  }
}
</style>
