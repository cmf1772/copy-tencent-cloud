webpackJsonp([8],{"6Qob":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"login",data:function(){var e=this,t=function(e,t,s){""===t?s(new Error("请输入密码")):s()};return{ruleForm:{pass:"",checkPass:""},rules:{pass:[{validator:function(t,s,r){""===s?r(new Error("请输入账号")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),r())},trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"}],pheNum:[{validator:function(e,t,s){""===t?s(new Error("请输入密码")):s()},trigger:"blur"}],getNum:[{validator:t,trigger:"blur"}]},seleCtChange:!0,num:60,thenum:!0}},methods:{goRegistered:function(){this.$router.push("/registered")},getSeleNum:function(){var e=this;if(!this.thenum)return!1;this.thenum=!1;var t=setInterval(function(){0===e.num&&(window.clearInterval(t),e.thenum=!0,e.num=60),e.num--},1e3)},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},changeSelect:function(){this.seleCtChange=!this.seleCtChange},resetForm:function(e){this.$refs[e].resetFields()}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"all"},[s("div",{staticClass:"main-content"},[s("div",{staticClass:"userLogin"},[e._v("\n        用户登录\n      ")]),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{width:"80%","margin-top":"40px"},attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[e.seleCtChange?s("el-form-item",{attrs:{label:"账号",prop:"pass"}},[s("el-input",{attrs:{placeholder:"用户名/手机号/邮箱",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1):e._e(),e._v(" "),e.seleCtChange?s("el-form-item",{attrs:{label:"密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password",placeholder:"登录密码","show-password":"",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1):e._e(),e._v(" "),e.seleCtChange?e._e():s("el-form-item",{attrs:{label:"手机号",prop:"checkPass"}},[s("el-input",{attrs:{type:"input",placeholder:"请输入手机号",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),e._v(" "),e.seleCtChange?e._e():s("el-form-item",{attrs:{label:"验证码",prop:"getNum"}},[s("div",{staticStyle:{width:"100%",display:"flex"}},[s("el-input",{staticStyle:{width:"60%"},attrs:{type:"input",placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}}),e._v(" "),s("el-button",{staticStyle:{width:"40%"},attrs:{type:"primary"},on:{click:e.getSeleNum}},[e._v(e._s(e.thenum?"获取验证码":e.num))])],1)]),e._v(" "),s("el-form-item",{staticStyle:{width:"100%"}},[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登陆")])],1)],1),e._v(" "),s("div",{staticClass:"right"},[e._v("\n        忘记密码？")]),e._v(" "),s("el-divider",[e._v("更多登陆方式")]),e._v(" "),s("div",{staticClass:"button"},[s("div",{staticClass:"item_b",on:{click:e.changeSelect}},[e._v(e._s(e.seleCtChange?"短信登陆":"密码登陆"))])])],1),e._v(" "),s("div",{staticClass:"footer_o"},[e._v("\n      还没有账号？\n      "),s("span",{on:{click:e.goRegistered}},[e._v("立即注册")])])])])},staticRenderFns:[]};var a=s("VU/8")(r,l,!1,function(e){s("S0JX")},"data-v-0d1dc5ae",null);t.default=a.exports},S0JX:function(e,t){}});
//# sourceMappingURL=8.300916e27f14a07c4bb2.js.map