<template>
<div>
  <div class="timeAxisbox" :class="{ open: isDocOpen }">
    <div class="timeAxisboxbody">
      <div class="head">
        <span class="s1" @click="docToggleOpen()">
          <font class="icon-fanhui iconfont"></font>
        </span>
        <span class="s2">检测服务进度</span>
      </div>
      <div class="timeAxiscontent">
        <pageToast2 ref="pageToast2"></pageToast2>
        <!--时间轴-->
        <div class="flowChart" v-if="istimeAxisSuccess">
          <div class="flowChart-left" >
            <div class="dashed"></div>
          </div>
          <div class="flowChart-right">
            <!--单组-->
            <div class="oneNode breathing"
             v-for="(item, index) in timeaxis"
             :key="index"
             >
              <div class="check" :class="{'check-success':item.time_ok}">{{item.time_status_txt}}</div>
              <div class="tag-boder"><div class="tag"></div></div>
              <div class="NodeDetail">
                <div class="NodeDetail-content">
                  <span class="badge">{{item.time_operator}}</span>
                  <p>{{item.time_content}}</p>
                </div>
                <div class="NodeDetail-footer">
                  <span>{{$friendlytime(item.time_created)}}</span>
                </div>
              </div>
            </div>
            <!--单组 end-->
          </div>
        </div>
        <!--时间轴 end-->
        <div class="foot">
          <p>{{ this.order_title }}</p>
          <p class="p2">{{ this.open_ordernumber }}</p>
        </div>
      </div>
      <div class="closebox" @click="docToggleOpen()">返回订单详情页面</div>
    </div>
  </div>
</div>
</template>

<script>
import timeaxis from "@/assets/json/timeaxis.js";
export default {
  data() {
    return {
      order_title: "",
      open_ordernumber: "",
      isDocOpen: false,
      istimeAxisSuccess: false,
      timeaxis:timeaxis
    };
  },
  props: {
    selectedOrderid: {
      default: 0
    }
  },
  methods: {
    //查看协议
    docToggleOpen() {
      this.istimeAxisSuccess = false;
      this.isDocOpen = !this.isDocOpen;
      this.getOrderTimelist(this.selectedOrderid)
    },
    //获取订单时间进度表
    getOrderTimelist(order_id) {
      let _this = this;
      _this.$refs.pageToast2.type = 2;
      _this.$api
        .getOrderTimelist({
          order_id: order_id
        })
        .then(res => {
          //渲染订单信息
          if(!_this.$isblank(res.data.order)){
             _this.open_ordernumber="No."+res.data.order.open_ordernumber;
             _this.order_title=res.data.order.goods_title;
          }else{
            _this.open_ordernumber="服务流程时间线";
            _this.order_title="恩贝尔，让健康更简单";
          };
         //渲染时间进度线
          if(!_this.$isblank(res.data.timeaxis)){
              let timeaxisarray=res.data.timeaxis;
              for(var key in timeaxisarray){
                if(res.data.order.type>key||res.data.order.type==key){
                 this.timeaxis[key]['time_content']=timeaxisarray[key]['content'];
                 this.timeaxis[key]['time_created']=timeaxisarray[key]['created']
                 this.timeaxis[key]['time_user_id']=timeaxisarray[key]['user_id']
                 this.timeaxis[key]['time_order_id']=timeaxisarray[key]['order_id']
                 this.timeaxis[key]['time_ok']=true;
                }
              }
          };
          _this.$refs.pageToast2.type = 0;
          _this.istimeAxisSuccess = true;
        });
    }
  }
};
</script>
<style scoped lang="scss">
.timeAxisbox .head{color:#fff;text-align:center;position: relative;height:0.8rem;line-height:0.8rem;display:none;}
.timeAxisbox .head .s1{font-size:0.22rem;position: absolute;display:block;height:0.8rem;line-height:0.8rem;padding:0 10px;}
.timeAxisbox .head .s1 font{font-size:0.24rem !important;display:block;height:0.8rem;line-height:0.8rem;}
.timeAxisbox .head .s2{font-size:0.3rem;height:0.8rem;line-height:0.8rem;display: block;font-weight:700;}
.timeAxisbox{position:fixed;width:100%;height:100%;left:0;top:0;background:#2BAD67;z-index:102;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(-100%);-webkit-transform: translateX(-100%);}
.timeAxisbox.open{display:block;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(0);-webkit-transform: translateX(0);}
.timeAxisbox .flex-center{width:100%;height:100%;}
.timeAxisbox .timeAxiscontent{width:95%;background:#fff;height: calc(100vh - 1.1rem);border-radius:3px;overflow: hidden;position: relative;margin:0.2rem auto;}
.timeAxisbox .timeAxiscontent{transition: all .3s ease; -webkit-transition: all .3s ease;z-index:11;}
.foot{color: #fff;padding:10px 15px;position: absolute;z-index: 10;left: 0;bottom: 0;width: 100%;box-sizing:border-box;background: #F9F9F9;}
.foot p{font-size:14px;color:#333;width:100%;font-weight:700;}
.foot .p2{font-size:12px;color:#aaa;font-weight:normal;margin-top:4px;}
.isScantimeAxisSuccess{width:250px;height:250px;position: absolute;left:0;top:0;z-index:1;background:rgba(255,255,255,0.4);text-align:center;line-height:250px;color:#2BAD67;font-size:50px}
.flowChart{background-color:#fff;padding:12px;display:flex;height: calc(100vh - 140px);overflow-y:auto;}
.flowChart-left{width:50px;flex-shrink:0;position:absolute;float:left;top:0;height:10000px;z-index:1;}
.flowChart .dashed{width:0;height:100%;margin-left:50%;border-left-style:dashed;border-left-color:#eee;border-left-width:2px}
.flowChart-right{flex-grow:1;margin-left:50px;position:relative;z-index:1;}
.flowChart .oneNode{display:flex;align-items:center;width:100%;margin-bottom:14px}
.flowChart .check{width:40px;height:40px;border-radius:50px;line-height:40px;color:#fff;font-size:12px;text-align:center;position:relative;left:-49px;flex-shrink:0;background-color:#7d7a75;border:4px solid #ada8a3}
.flowChart .check-success{background-color:#57c240;border:4px solid rgba(198,228,177,.9)}
.flowChart .check-danger{background-color:#e46c23;border:4px solid #faa67a}
.flowChart .check-prime{background-color:#0088a5;border:4px solid #58bff3}
.flowChart .check-warning{background-color:#f89002;border:4px solid #ffd07a}
.flowChart .NodeDetail{background-color:#fff;margin-left:-60px;flex-grow:1;border-radius:3px;padding:0px 10px;display:flex;flex-direction:column;box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);}
.flowChart img{width:40px;height:40px;border-radius:20px}
.NodeDetail .details{flex-grow:1;padding-left:8px;margin-left:8px;border-left:4px solid #486ca0}
.details p{color:#9a9a9a;font-size:14px;font-weight:100}
.NodeDetail-content{flex-grow:1}
.NodeDetail-content p{text-align:justify;font-size:12px;line-height:1.8;}
.NodeDetail-footer{margin:2px 0 8px 0;}
.NodeDetail-footer span{font-size:12px;font-weight:100;color:#686868;float:right}
.badge{padding:2px 5px;font-size:12px;background-color:#486ca0;border-radius:10px;font-weight:100;color:#fff;letter-spacing:2px;box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);}
.BadgeGray{background-color:#686c68}
.tag{width:0;height:0;border:14px solid;border-style:dashed;border-color:transparent #fff transparent transparent;position:absolute;left:-13px;top:-14px}
.tag-boder{width:0;height:0;border:12px solid;border-style:dashed;border-color:transparent #f1f1f1 transparent transparent;position:relative;left:-59px}
.NodeDetail-content p{margin-top:7px}
.timer{width: 30px;height: 30px;position: fixed;right: 10px;bottom: 90px;background: rgba(0, 0, 0, 0.6);z-index: 20;border-radius: 50%;box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);font-size: 18px;color: #fff;text-align: center;line-height: 30px;}
.closebox{height:0.6rem;background: #f89002;margin:0 10px;border-radius:3px;text-align:center;font-size:0.26rem;line-height:0.6rem;font-weight:700;color:#fff;}
</style>

