<template>
  <div class="container">
    <div class="i-info">
      <div class="title">入住信息</div>
      <div class="info">
        <div class="check">
          <div class="tips">看房时间</div>
          <div class="please-check">请选择</div>
        </div>
        <div class="check">
          <div class="tips">宜住人数</div>
          <div class="please-check">请选择</div>
        </div>
        <div class="check">
          <div class="tips">入住时间</div>
          <div class="please-check">请选择</div>
        </div>
      </div>
    </div>

    <div class="renovation">
      <div class="title">装修情况</div>
      <div class="list">
        <div :class="haveThisItem('0-0')?'active':''"  @click="changeActiveItem('0-0')">毛呸</div>
        <div :class="haveThisItem('0-1')?'active':''"  @click="changeActiveItem('0-1')">装修简单</div>
        <div :class="haveThisItem('0-2')?'active':''"  @click="changeActiveItem('0-2')">精装修</div>
        <div :class="haveThisItem('0-3')?'active':''"  @click="changeActiveItem('0-3')">豪华装修</div>
      </div>
    </div>

    <div class="configure">
      <div class="title">配置情况</div>
      <div class="list">
        <div :class="haveThisItem('1-0')?'active':''"  @click="changeActiveItem('1-0')">冰箱</div>
        <div :class="haveThisItem('1-1')?'active':''"  @click="changeActiveItem('1-1')">电视</div>
        <div :class="haveThisItem('1-2')?'active':''"  @click="changeActiveItem('1-2')">空调</div>
        <div :class="haveThisItem('1-3')?'active':''"  @click="changeActiveItem('1-3')">热水器</div>
        <div :class="haveThisItem('1-4')?'active':''"  @click="changeActiveItem('1-4')">宽带</div>
        <div :class="haveThisItem('1-5')?'active':''"  @click="changeActiveItem('1-5')">衣柜</div>
        <div :class="haveThisItem('1-6')?'active':''"  @click="changeActiveItem('1-6')">卫生间(独)</div>
        <div :class="haveThisItem('1-7')?'active':''"  @click="changeActiveItem('1-7')">热水器</div>
        <div :class="haveThisItem('1-8')?'active':''"  @click="changeActiveItem('1-8')">智能门锁</div>
        <div :class="haveThisItem('1-9')?'active':''"  @click="changeActiveItem('1-9')">桌椅</div>
        <div :class="haveThisItem('1-10')?'active':''"  @click="changeActiveItem('1-10')">沙发</div>
        <div :class="haveThisItem('1-14')?'active':''"  @click="changeActiveItem('1-11')">热水器</div>
        <div :class="haveThisItem('1-12')?'active':''"  @click="changeActiveItem('1-12')">宽带</div>
        <div :class="haveThisItem('1-13')?'active':''"  @click="changeActiveItem('1-13')">衣柜</div>
        <div :class="haveThisItem('1-14')?'active':''"  @click="changeActiveItem('1-14')">卫生间(独)</div>
        <div :class="haveThisItem('1-15')?'active':''"  @click="changeActiveItem('1-15')">阳台(独)</div>
      </div>
    </div>

    <div class="star">
      <div class="title">房屋亮点</div>
      <div class="list">
        <div :class="haveThisItem('2-0')?'active':''"  @click="changeActiveItem('2-0')">南北通透</div>
        <div :class="haveThisItem('2-1')?'active':''"  @click="changeActiveItem('2-1')">首次出租</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      checkItemArr:[]
    }
    
  },
  computed:{
    haveThisItem(){
      return function(id){
        return this.checkItemArr.includes(id)
      }
    }
  },
  methods:{
      changeActiveItem(id){
        let index = this.checkItemArr.findIndex( item => {
          return item == id
        })
        if(index > -1){
          this.checkItemArr.splice(index,1)
        }else{
          this.checkItemArr.push(id)
        }
      }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  >div{
    margin-bottom: 0.4rem;
  }
  .title {
    font-size: 0.42rem;
    padding: 0.2rem 0;
    font-weight: 600;
  }
  .i-info {
    .info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-bottom: 0.25rem;
      padding: 0.25rem 0;
      border-bottom: 1px solid #efefef;
      .check:nth-child(2) {
        border-left: 1px solid #efefef;
        border-right: 1px solid #efefef;
      }
      .check {
        display: flex;
        align-items: center;
        flex-direction: column;
        .tips {
          font-size: 0.24rem;
        }
        .please-check {
          font-size: 0.32rem;
          color: #999;
          margin-top: 0.1rem;
        }
      }
    }
  }
  .list{
    display: grid;grid-template-columns: repeat(4,1fr);
    grid-gap: .2rem;

    padding:.2rem 0 .3rem 0;
    font-size: .26rem;
    div{
      border-radius: 1rem;
      background: #f7f7f7;
      width: 1.5rem;
      height: 0.65rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;

    }
    .active{
      background: #c3ab87;
      color: #fff;
    }
  }
}
</style>