import Vue from "vue";
import wx from "weixin-js-sdk";






(Vue.prototype.$pageLoginOut = function () {
  let _this = this;
  _this.$dailog
    .confirm({
      title: "退出登录确认",
      message: "退出登录后，可以再次登录体验"
    })
    .then(() => {
      _this.$loginOut();
      _this.$toast("退出登录成功");
      _this.$router.push("/loginEnter");
    });
}),
//首次进入页面初始化执行
(Vue.prototype.$intoInit = function () {
  let _this = this;
  $token = localStorage.getItem("token");
  if (_this.$isblank($token)) {
    _this.$loginOut();
  }
});

//获取url参数=====H5
Vue.prototype.$getQueryVariable = function (name) {
  if (name == null || name == "undefined") {
    return null;
  }
  var searchStr = decodeURI(location.search);
  var infoIndex = searchStr.indexOf(name + "=");
  if (infoIndex == -1) {
    return null;
  }
  var searchInfo = searchStr.substring(infoIndex + name.length + 1);
  var tagIndex = searchInfo.indexOf("&");
  if (tagIndex != -1) {
    searchInfo = searchInfo.substring(0, tagIndex);
  }
  return searchInfo;
};

//删除url参数=====H5
Vue.prototype.$delQueryVariable = function (url, parameter) {
  var urlparts = url.split("?");
  if (urlparts.length >= 2) {
    //参数名前缀
    var prefix = encodeURIComponent(parameter) + "=";
    var pars = urlparts[1].split(/[&;]/g);
    //循环查找匹配参数
    for (var i = pars.length; i-- > 0;) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        //存在则删除
        pars.splice(i, 1);
      }
    }
    return urlparts[0] + (pars.length > 0 ? "?" + pars.join("&") : "");
  }
  return url;
};

// 解决微信支付内置对象不存在,唤起微信支付
Vue.prototype.$callPay = function (data) {
  if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
      document.addEventListener("WeixinJSBridgeReady", $jsApiCall, false);
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", $jsApiCall);
      document.attachEvent("onWeixinJSBridgeReady", $jsApiCall);
    }
  } else {
    this.$jsApiCall(data);
  }
};

// 微信支付
Vue.prototype.$jsApiCall = function (data) {
  var _this = this;
  var jsApiParameters = JSON.parse(data);
  // var url = window.location.href;
  WeixinJSBridge.invoke("getBrandWCPayRequest", jsApiParameters, function (res) {
    //如果支付成功
    if (res.err_msg == "get_brand_wcpay_request:ok") {
      //支付成功后跳转的地址
      _this.$toast("恭喜您支付成功,3秒后跳转...");
      setTimeout(function () {
        _this.$router.push({
          path: "/emberServeOrderDetailed",
          query: {
            order_id: _this.$getQueryVariable("order_id")
          }
        });
      }, 1000);
    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
      _this.$toast("用户取消支付");
    } else if (res.err_msg == "get_brand_wcpay_request:fail") {
      _this.$toast("支付失败，请刷新浏览器重新发起支付");
    } else {
      _this.$toast("未知错误，请联系工作人员");
    }
  });
};

// 路由跳转，path为需要跳转的路由，eg： this.$toTurn('/index')
Vue.prototype.$toTurn = function (path) {
  this.$router.push(path);
};

// 判断当前设备，微信端 或 其他浏览器
Vue.prototype.$judgeUserAgent = function () {
  var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    this.$store.commit("updateAgent", true);
  } else {
    this.$store.commit("updateAgent", false);
  }
};

// 判断数据是否为空
Vue.prototype.$isblank = function (chr) {
  if (
    chr == null ||
    chr == "" ||
    chr == undefined ||
    chr == "undefined" ||
    chr == "null" ||
    chr.length == 0
  ) {
    return true;
  }
  var chr = chr.toString();
  var chr = chr.replace(/(^\s*)|\s*$/g, "");
  if (
    chr == null ||
    chr == "" ||
    chr == undefined ||
    chr == "undefined" ||
    chr == "null" ||
    chr.length == 0
  ) {
    return true;
  }
  return false;
};

// +----------------------------------------------------------------------
// | Desc: 时间戳转化为时间格式
// +----------------------------------------------------------------------
// | Param:time十位数时间戳
// | Param:type，1(2018-01-01 10:12:11),2(2018-01-01 10:12),3(2018-01-01),4(2018-01),5(2018),默认(2018-01-01)
// +----------------------------------------------------------------------
// | return:格式化后的时间
// +----------------------------------------------------------------------
Vue.prototype.$timeFmt = function (time, type) {
  if (this.$isblank(time)) {
    return "";
  } else {
    var ts = arguments[0] || 0;
    var t, y, m, d, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth() + 1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式
    if (type == 1) {
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        (h < 10 ? "0" + h : h) +
        ":" +
        (i < 10 ? "0" + i : i) +
        ":" +
        (s < 10 ? "0" + s : s)
      );
    } else if (type == 2) {
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        (h < 10 ? "0" + h : h) +
        ":" +
        (i < 10 ? "0" + i : i)
      );
    } else if (type == 3) {
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    } else if (type == 4) {
      return y + "-" + (m < 10 ? "0" + m : m);
    } else if (type == 5) {
      return y + "-" + (m < 10 ? "0" + m : m);
    } else {
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    }
  }
};

// 格式化处理金额, money: 金额数值 eg: 1600.00
Vue.prototype.$fmtMoney = function (money) {
  if (this.$isblank(money)) {
    return "0.00";
  } else {
    money = Number(parseInt(money) / 100).toFixed(2);
    return money;
  }
};


//正则验证
(Vue.prototype.$valid = function (str, reg) {
  if (reg == "id") {
    reg = "/^+?[1-9][0-9]*$/";
  } else if (reg == "tel") {
    reg = /^1[3456789]\d{9}$/;
  } else if (reg == "code") {
    reg = /^([0-9]{4})$/;
  }
  var r = reg.test(str);
  if (!r) {
    return true;
  } else {
    return false;
  }
});





//返回上一页
Vue.prototype.$goBack = function () {
  this.$router.back(-1);
};

/**
 * 十位数时间戳
 * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
 * 当天的返回时分，当年的返回月日，否则，返回年月日
 * @param {Object} date
 */
Vue.prototype.$friendlytime = function (fromDateString) {
  if (this.$isblank(fromDateString)) {
    return "";
  }
  var ts = arguments[0] || 0;
  var t, y, m, d, h, i, s;
  t = ts ? new Date(ts * 1000) : new Date();
  y = t.getFullYear();
  m = t.getMonth() + 1;
  d = t.getDate();
  h = t.getHours();
  i = t.getMinutes();
  s = t.getSeconds();
  fromDateString =
    y +
    "-" +
    (m < 10 ? "0" + m : m) +
    "-" +
    (d < 10 ? "0" + d : d) +
    " " +
    (h < 10 ? "0" + h : h) +
    ":" +
    (i < 10 ? "0" + i : i) +
    ":" +
    (s < 10 ? "0" + s : s);
  if (fromDateString === undefined || fromDateString === "") {
    return fromDateString;
  }
  //当前日期以及对应的年月日时分秒
  var nowDate = new Date();
  let nowDateYear = nowDate.getFullYear(); // 年份，注意必须用getFullYear
  let nowDateMonth = nowDate.getMonth() + 1; // 月份，注意是从0-11
  let nowDateDay = nowDate.getDate(); // 日期
  let nowDateHours = nowDate.getHours(); //24小时制
  let nowDateMinutes = nowDate.getMinutes(); // 分钟
  let nowDateSeconds = nowDate.getSeconds(); // 秒

  // console.log('nowDate = '+ nowDateYear+'-'+(nowDateMonth<10?+'0'+nowDateMonth:nowDateMonth)+'-'+(nowDateDay<10?+'0'+nowDateDay:nowDateDay)
  //     +' '+(nowDateHours<10?+'0'+nowDateHours:nowDateHours)+':'+(nowDateMinutes<10?+'0'+nowDateMinutes:nowDateMinutes)+':'+
  //     (nowDateSeconds<10?+'0'+nowDateSeconds:nowDateSeconds));
  // console.log('fromDate = '+ fromDateString);
  //传过来的日期以及对应的年月日时分秒
  var formDateArray = fromDateString.split(" ")[0].split("-");
  var fromTimeArray = fromDateString.split(" ")[1].split(":");
  let fromDateYear = formDateArray[0]; // 年份，注意必须用getFullYear
  let fromDateMonth = formDateArray[1]; // 月份，注意是从0-11
  let fromDateDay = formDateArray[2]; // 日期
  let fromDateHours = fromTimeArray[0]; //24小时制
  let fromDateMinutes = fromTimeArray[1]; // 分钟
  let fromDateSeconds = fromTimeArray[2]; // 秒
  //这部分是对05月01日 05时05分05秒这种进行格式化，判断的时候用这个
  let fromDateMonthTmp = fromDateMonth;
  if (fromDateMonth.substring(0, 1) === "0") {
    fromDateMonthTmp = fromDateMonth.substring(1, 2);
  }
  let fromDateDayTmp = fromDateDay;
  if (fromDateDay.substring(0, 1) === "0") {
    fromDateDayTmp = fromDateDay.substring(1, 2);
  }
  let fromDateHoursTmp = fromDateHours;
  if (fromDateHours.substring(0, 1) === "0") {
    fromDateHoursTmp = fromDateHours.substring(1, 2);
  }
  let fromDateMinutesTmp = fromDateMinutes;
  if (fromDateMinutes.substring(0, 1) === "0") {
    fromDateMinutesTmp = fromDateMinutes.substring(1, 2);
  }
  let fromDateSecondsTmp = fromDateSeconds;
  if (fromDateSeconds.substring(0, 1) === "0") {
    fromDateSecondsTmp = fromDateSeconds.substring(1, 2);
  }
  // console.log('nowDateInt = '+ nowDateYear+'-'+nowDateMonth+'-'+nowDateDay+' '+nowDateHours+':'+nowDateMinutes+':'+nowDateSeconds);
  // console.log('fromDateInt = '+ fromDateYear+'-'+fromDateMonthTmp+'-'+fromDateDayTmp+' '+fromDateHoursTmp+':'+fromDateMinutesTmp+':'+fromDateSecondsTmp);
  /******************* 一分钟之内 *******************/
  let nowDateYMDH =
    nowDateYear +
    "年" +
    nowDateMonth +
    "月" +
    nowDateDay +
    "日 " +
    nowDateHours;
  let fromDateYMDH =
    fromDateYear +
    "年" +
    fromDateMonthTmp +
    "月" +
    fromDateDayTmp +
    "日 " +
    fromDateHoursTmp;
  //需要比较的time, 1分钟以内视作“刚刚”
  if (nowDateYMDH === fromDateYMDH && nowDateMinutes - fromDateMinutesTmp < 2) {
    let remainMinuteSecond = (nowDateMinutes - fromDateMinutesTmp) * 60;
    let remainSecond = nowDateSeconds - fromDateSecondsTmp;
    console.log(
      "remainMinuteSecond = " +
      remainMinuteSecond +
      "    " +
      "remainSecond = " +
      remainSecond
    );
    console.log("remainSecond = " + remainSecond);
    if (remainMinuteSecond + remainSecond < 60 * 1000) {
      return "刚刚";
    }
  }
  /*************** 今天：只显示时间，格式为 时分      (已测试没问题) **********/
  //需要比较的 日期yyyy年M月d
  let nowDateYMD = nowDateYear + "年" + nowDateMonth + "月" + nowDateDay + "日";
  let fromDateYMD =
    fromDateYear + "年" + fromDateMonthTmp + "月" + fromDateDayTmp + "日";
  //返回时分
  if (nowDateYMD === fromDateYMD) {
    return fromDateHours + ":" + fromDateMinutes;
  }
  /*************** 昨天：不显示日期，显示“昨天”，格式为：“昨天” 时分； ***********/
  /*************** 前天：不显示日期，显示“前天”，格式为：“前天” 时分； ***********/
  let nowDateYM = nowDateYear + "年" + nowDateMonth + "月";
  let fromDateYM = fromDateYear + "年" + fromDateMonthTmp + "月";
  if (nowDateYM === fromDateYM) {
    if (nowDateDay - fromDateDayTmp === 1) {
      return "昨天 " + fromDateHours + ":" + fromDateMinutes;
    } else if (nowDateDay - fromDateDayTmp === 2) {
      return "前天 " + fromDateHours + ":" + fromDateMinutes;
    }
  }
  /******** 今年其他日期：不显示时间，仅显示月日，格式为：X月X日； ************/
  let nowDateY = nowDateYear + "年";
  let fromDateY = fromDateYear + "年";
  if (nowDateY === fromDateY) {
    return fromDateMonth + "月" + fromDateDay + "日";
  }
  /******* 其它年份：不显示时间，仅显示年月日，格式为：XXXX年XX月XX日； **********/
  return fromDateYear + "年" + fromDateMonth + "月" + fromDateDay + "日";
};

//微信分享组件
Vue.prototype.$wxshare = function (msg) {
  var _this = this;
  let ua = navigator.userAgent.toLowerCase();
  let iswechat = ua.match(/MicroMessenger/i) == "micromessenger";
  if (iswechat) {
    _this.$api
      .getJssdk({
        url: window.location.href
      })
      .then(response => {
        if (response.code == 0) {
          // 通过config接口注入权限验证配置
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，
            // 参数信息会通过log打出，仅在pc端时才会打印。
            appId: response.data.appId, // 必填，公众号的唯一标识
            timestamp: response.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
            signature: response.data.signature, // 必填，签名，见附录1
            jsApiList: [
              // 'checkJsApi',// 判断当前版本是否支持分享指定JS接口
              "onMenuShareTimeline", // 分享到朋友圈
              "onMenuShareAppMessage", // 分享到微信好友
              "onMenuShareQQ", // 分享到QQ
              "onMenuShareWeibo", // 分享到微博
              "onMenuShareQZone" // 分享到空间
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
          /*eslint-disable */
          let share_config = {
            share: {
              imgUrl: msg.imgUrl, // 分享图，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
              desc: msg.desc, // 摘要,如果分享到朋友圈的话，不显示摘要。
              title: msg.title, // 分享卡片标题
              link: msg.link, // 分享出去后的链接，这里可以将链接设置为另一个页面。
              success: function () {
                // 分享成功后的回调函数
              },
              cancel: function () {
                // 用户取消分享后执行的回调函数
              }
            }
          };
          // 点击修改要分享的内容
          wx.ready(function () {
            wx.onMenuShareAppMessage(share_config.share); // 分享给好友
            wx.onMenuShareTimeline(share_config.share); // 分享到朋友圈
            wx.onMenuShareQQ(share_config.share); // 分享到QQ
            wx.onMenuShareWeibo(share_config.share); // 分享到腾讯微博
            wx.onMenuShareQZone(share_config.share); // 分享到空间
          });

          wx.error(function (res) {
            // alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:ture就可以直接在网页上看到弹出的错误提示
          });
        }
      });
  } else {
    // console.log(`${store.state.uaType}浏览器不用索取微信分享签名了`)
    return;
  }
};



//去掉空格换行符
Vue.prototype.$trim = function (text) {
  if (this.$isblank(text)) {
    return "";
  }
  text = text.toString();
  return text.replace(/^\s*|\s*$/g, "");
};

//求两个集合的交集
Vue.prototype.$intersect = function (a, b) {
  let set1 = new Set(a),
    set2 = new Set(b);
  return [...new Set([...set1].filter(x => set2.has(x)))];
};

//放弃编辑跳转到个人中心
Vue.prototype.$goCenter = function (a, b) {
  this.$dailog
    .confirm({
      title: "操作提醒",
      message: "尊敬的客户，您将放弃当前操作去往个人中心，是否确认继续？"
    })
    .then(() => {
      this.$router.push("/mine");
    });
};


// 校验身份证
Vue.prototype.$idNoFormatCheck = function (value) {
  var num = value.toUpperCase();
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  var reg = /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/;
  if (!reg.test(num)) {
    return false;
  }
  // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  // 下面分别分析出生日期和校验位
  var len, re;
  len = num.length;
  if (len == 15) {
    re = new RegExp(
      /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
    var arrSplit = num.match(re);
    // 检查生日日期是否正确
    var dtmBirth = new Date('19' + arrSplit[2] +
      '/' + arrSplit[3] + '/' + arrSplit[4]);
    var bGoodDay;
    bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) &&
      ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) &&
      (dtmBirth.getDate() == Number(arrSplit[4]));
    if (!bGoodDay) {
      return false;
    }
  }
  if (len == 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
    var arrSplit = num.match(re);
    // 检查生日日期是否正确
    var dtmBirth = new Date(arrSplit[2] + "/" +
      arrSplit[3] + "/" + arrSplit[4]);
    var bGoodDay;
    bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) &&
      ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) &&
      (dtmBirth.getDate() == Number(arrSplit[4]));
    if (!bGoodDay) {
      return false;
    } else {
      // 检验18位身份证的校验码是否正确。
      // 校验位按照ISO 7064:1983.MOD
      // 11-2的规定生成，X可以认为是数字10。
      var valnum;
      var arrInt = new Array(7, 9, 10, 5, 8, 4,
        2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
      var arrCh = new Array('1', '0', 'X', '9',
        '8', '7', '6', '5', '4', '3', '2');
      var nTemp = 0,
        i;
      for (var i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i];
      }
      valnum = arrCh[nTemp % 11];
      if (valnum != num.substr(17, 1)) {
        return false;
      }
    }
  }
  return true;
}
