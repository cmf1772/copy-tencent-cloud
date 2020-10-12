<template>
  <div class="add">
    <div class="top">
      <van-nav-bar title="新增回收柜"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field v-model="identification"
                   label="回收柜ID"
                   placeholder="请输入回收柜ID" />

        <div class="cells"
             @click="Show">
          <span>地 址</span>
          <p :style="{'color': changePAC? '#323233' : '#9fa0a2'}">{{changePAC ? changePAC : '请选择回地址'}}</p>
        </div>
        <van-field v-model="address"
                   label="详细地址"
                   placeholder="请输入选择" />
        <van-field v-model="recover"
                   label="回收员"
                   placeholder="请输入回收员姓名" />
        <van-field v-model="mobile"
                   label="电      话"
                   placeholder="请输入回收员联系方式" />
        <van-field v-model="remark"
                   label="备注信息"
                   autosize
                   type="textarea"
                   show-word-limit
                   rows="3"
                   maxlength="300"
                   placeholder="请输入备注信息" />
      </van-cell-group>
    </div>
    <div class="bottom">
      <div class="botton"
           @click="setData">
        提交审核
      </div>
    </div>
    <popup :show="adressShow"
           @returnAddress="getAddress"
           @showAddress="showAddress"
           @changeAdressVal="changeAdressVal"></popup>
  </div>
</template>

<script>
import popup from "@/components/adressPopup/popup"; //选择地区弹窗
export default {
  name: 'add',

  components: {
    popup
  },

  data () {
    return {
      adressShow: false,

      identification: '',
      province: '',
      city: '',
      area: '',
      changePAC: '',
      address: '',
      identification: '',
      recover: '',
      mobile: '',
      remark: ''
    }
  },

  methods: {
    getAddress (name, res) {
      if (name === 'province') {
        this.changePAC = ''
        this.province = res.name
      } else if (name === 'city') {
        this.city = res.name
      } else if (name === 'area') {
        this.area = res.name
      }
      this.changePAC += res.name
    },

    setData () {
      this.$api.serve.recovery.addEquipment({
        recover_id: 120,
        province: this.province + '',
        identification: this.identification + '',
        city: this.city + '',
        area: this.area + '',
        address: this.address + '',
        recover: this.recover + '',
        mobile: Number(this.mobile),
        remark: this.remark + ''
      })
        .then(res => {
          this.$toast.success("提交审核成功");
          setTimeout(() => {
            this.$router.push('/serve/recovery/index')
          }, 1000)
        })
    },

    Show () {
      this.adressShow = true
    },

    onClickLeft () {
      this.$router.go(-1);
    },

    showAddress (val) {
      this.adressShow = val
    },

    changeAdressVal (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  padding: 0.2rem 0;
  .botton {
    margin: 0 auto;
    width: 3.93rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    background: #c3ab87;
    line-height: 0.87rem;
    text-align: center;

    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.cells {
  width: 100%;
  margin-left: 0.32rem;
  padding: 0.2rem 0;
  background-color: #fff;
  color: #323233;
  // box-sizing: border-box;
  display: flex;
  border-bottom: solid 1px #f5f6f7;
  > span {
    color: #323233;
    font-size: 0.29rem;
    margin-right: 1.1rem;
    // line-height: 0.24rem;
  }
  > p {
    font-size: 0.27rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #9fa0a2;
  }
}
</style>