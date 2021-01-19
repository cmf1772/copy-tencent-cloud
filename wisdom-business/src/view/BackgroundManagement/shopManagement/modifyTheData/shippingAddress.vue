<template>
  <div class="shippingAddress"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 修改用户密码
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="100px">
      <el-form-item label="当前密码"
                    prop="displayName">
        <el-input v-model="form.displayName"></el-input>
      </el-form-item>
      <el-form-item label="
                  新 密 码"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码确认"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 修改支付密码
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="100px">
      <el-form-item label="当前密码"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder="第一次设置无需填写"></el-input>
      </el-form-item>
      <el-form-item label="
                  新 密 码"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码确认"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10pxfont-weight: 360; color:#000">
      <i class="el-icon-tickets"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="100px">
      <el-form-item label="会员头像"
                    style="width: 100%"
                    prop="displayName">
        <div style="text-align:left;">
          <!-- <h4>基础信息</h4> -->
          <img :src="imgData"
               height="130"
               width="130"
               alt
               style="border-radius:50%;" />
          <div class="upload-wrap">
            <span>{{imgData ? '修改头像' : '上传头像'}}</span>
            <input type="file"
                   style="cursor:pointer;"
                   @change="changeFile($event)"
                   accept="image/png, image/gif, image/jpg" />
          </div>
          <p>格式：支持jpg、png</p>
        </div>
      </el-form-item>
      <el-form-item label="姓名"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="昵称"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="E-mail"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="喜欢"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属区域"
                    prop="name">
        <div class="form-item">
          <el-select v-model="form.province"
                     clearable
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     clearable
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.qu"
                     clearable
                     placeholder="所在区">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="街道地址"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="邮政编码"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 完善信息
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="110px">
      <el-form-item label="性 别"
                    prop="name">
        <el-radio v-model="form.radio"
                  label="1">先生</el-radio>
        <el-radio v-model="form.radio"
                  label="2">女生</el-radio>
      </el-form-item>
      <el-form-item label="QQ"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder="第一次设置无需填写"></el-input>
      </el-form-item>
      <el-form-item label="QQ"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="淘宝账号"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司名称"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司地址"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="公司介绍："
                    style="width: 100%"
                    prop="name">
        <div ref="editorElem"
             style="text-align:left;width: 100%;"></div>
      </el-form-item>
      <el-form-item label="营业执照"
                    prop="name">
        <el-radio v-model="form.radio"
                  label="1">有</el-radio>
        <el-radio v-model="form.radio"
                  label="2">无</el-radio>
      </el-form-item>
      <el-form-item label="营业执照编号"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="营业执照图片"
                    style="width: 100%"
                    prop="name">
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
      <el-form-item label="地图定位"
                    style="width: 100%"
                    prop="name">
        <div class="amap-wrapper">
          <el-amap ref="map"
                   :vid="'amapDemo'"
                   :center="center"
                   :zoom="zoom"
                   :plugin="plugin"
                   :events="events"
                   class="amap-demo">
          </el-amap>
        </div>
        <div class="toolbar">
          <span v-if="loaded">
            当前位置: lng = {{ lng }} lat = {{ lat }}
          </span>
          <span v-else>正在定位</span>
        </div>
      </el-form-item>
    </el-form>

    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
import BMap from 'BMap'

export default {
  name: 'shippingAddress',

  data () {
    let self = this;

    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        radio: '1',
        displayName: '',
        name: '',
        type: '',
        value: '',
        driverId: '',
        description: '',
        province: '',
        city: '',
        qu: ''
      },
      height: window.innerHeight - 90 + 'px',
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        displayName: [
          { required: true, message: '请输入收货人', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请不要重复填写省市', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属驱动', trigger: 'change' }
        ]
      },
      imgData: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',

      center: [121.5273285, 31.21515044],
      zoom: 12,
      position: [121.5273285, 31.21515044],
      icon: '/huoche.png',
      events: {
        init (o) {
          console.log(o.getCenter());
        },
        zoomchange: (e) => {
          console.log(e);
        },
        zoomend: (e) => {
          //获取当前缩放zoom值
          console.log(this.$refs.map.$$getInstance().getZoom());
          console.log(e);
        },
        click: e => {
          alert('map clicked')
        }
      },
      lng: 0,
      lat: 0,
      loaded: false,
      markers: [

      ],
      //使用其他组件
      plugin: [
        {
          pName: 'Geolocation',   //定位
          events: {
            init (o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;             //设置经度
                  self.lat = result.position.lat;             //设置维度
                  self.center = [self.lng, self.lat];         //设置坐标
                  self.loaded = true;                         //load
                }
              })
            }
          }
        },
        {
          pName: 'Scale',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init (instance) {
              console.log(instance)
            }
          }
        }
      ]
    }
  },

  mounted () {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.content = html;
    };
    this.editor.customConfig.zIndex = 1000;
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
    this.addMarker()
    this.onSearchResult()
  },

  methods: {
    addMarker: function () {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult (pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeFile (e) {
      function getObjectURL (file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }

      let imgData = e.target.files[0];
      this.imgFile = imgData;
      this.imgData = getObjectURL(imgData);
    },
  }
}
</script>

<style lang="scss" scoped>
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.shippingAddress {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>