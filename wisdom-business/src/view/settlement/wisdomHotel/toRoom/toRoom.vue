<template>
  <div class="toRoom flex">
    <div class="left">
      <p class="text">房型筛选</p>
      <el-select v-model="value"
                 class="mt"
                 style="width: 100px"
                 size="mini"
                 clearable
                 placeholder="请选择">
        <el-option label="全部房型"
                   value="1">
        </el-option>
      </el-select>
      <p class="text mt">房态筛选</p>
      <ul>
        <li v-for="(item, index) in json"
            @click="change(index)"
            :class="active1 === index ? 'active flexCC box s' : 'flexCC box s'"
            :key="index">
          <div :style="{'background': item.color, 'border': 'solid 1px' + item.color }"></div>
          <p class="minText">{{item.text}}</p>
        </li>
      </ul>
      <p class="text mt">更多筛选</p>
      <ul>
        <li v-for="(item, index) in json1"
            @click="change1(index)"
            :class="active2 === index ? 'active flexCC box s' : 'flexCC box s'"
            :key="index">
          <div :style="{'background': item.color, 'border': 'solid 1px' + item.color }"></div>
          <p class="minText">{{item.text}}</p>
        </li>
      </ul>
    </div>

    <div class="right flexC"
         style="flex: 1">
      <p>暂无房间，请重新选择房态标签</p>
    </div>

    <div class="flexColumn right-bottom">
      <div class="h"
           style="background: #ff9523;">设置保存</div>
      <div class="h"
           style="background: #51cdaa;">快速预定</div>
      <div class="h"
           style="background: #2589ff;">住宿记录</div>
      <div class="h"
           style="border: solid 1px #ccc; color: #000">切换房态</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toRoom',
  data () {
    return {
      value: '1',
      json: [{
        text: '全部 0',
        color: '#fff'
      }, {
        text: '空房 0',
        color: 'rgb(227, 226, 229)'
      }, {
        text: '在住 0',
        color: 'rgb(37, 137, 255)'
      }, {
        text: '预定 0',
        color: 'rgb(81, 205, 170)'
      }, {
        text: '保留 0',
        color: 'rgb(255, 149, 35)'
      }],
      active1: null,
      json1: [{
        text: '不限 0',
        color: '#fff'
      }, {
        text: '净房 0',
        color: 'rgb(227, 226, 229)'
      }, {
        text: '脏房 0',
        color: 'rgb(147, 139, 155)'
      }, {
        text: '维修 0',
        color: 'rgb(255, 80, 80)'
      }],
      active2: null,
    }
  },

  methods: {
    change (index) {
      this.active1 = index
    },

    change1 (index) {
      this.active2 = index
    }
  },
}
</script>

<style lang="scss" scoped>
.right-bottom {
  position: fixed;
  right: 40px;
  bottom: 40px;
}

.h {
  width: 60px;
  height: 60px;
  cursor: pointer;
  align-items: center;
  text-align: center;
  font-size: 12px;
  justify-content: center;
  display: flex;
  border-radius: 30px;
  color: #fff;
  margin-top: 10px;
}

.left {
  width: 140px;
  border-right: 1px solid #e3e2e5;
  padding: 20px 20px 20px 10px;
}

.active {
  border: solid 1px #2589ff !important;
}

.box {
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #e3e2e5;
  margin-top: 10px;
  background: #fff;
  > div {
    width: 8px;
    height: 8px;
    margin-top: 1px;
    margin-right: 5px;
  }
}
</style>
