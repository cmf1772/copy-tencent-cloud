<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="分类"
        left-text
        right-text="编辑"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
    </div>

    <!-- 主体内容 -->
    <div class="container">
      <div class="me-list">
        <div class="title">
          <p>我的分类</p>
          <span>（长按可拖动编辑）</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="(item,index) in meList" :key="index"><span>{{item}}</span></li>
          </ul>
        </div>
      </div>

      <div class="content-warp">
        <div class="title">
          <p>所有分类</p>
        </div>
        <div class="list">
          <div class="small-item" v-for="(item,index) in list" :key="index">
            <div class="sub-title">{{item.title}}</div>
            <ul>
              <li v-for="(child,j) in item.items" :key="j" @click="addChecked(index,j)">
                <span :class="findItem(index,j)?'active':''">{{child}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meList: ["推荐", "战役", "战役", "警棍", "官方", "警棍", "官方", "推荐"],
      list: [
        { title: "推荐", items: ["战役", "学科教育", "学科教育"] },
        {
          title: "知识",
          items: [
            "战役",
            "学科教育",
            "在家上课",
            "话语",
            "流星",
            "学科教育",
            "在家上课",
            "话语",
            "流星",
            "战役",
            "学科教育",
            "在家上课",
            "话语",
            "流星",
            "流星",
            "战役"
          ]
        },
        { title: "推荐", items: ["战役", "学科教育", "学科教育"] }
      ],
      checkedList: []
    };
  },
  computed: {
    findItem() {
      return function(i, j) {
        let id = i + "-" + j;
        let result = this.checkedList.findIndex(itemId => {
          return itemId == id;
        });
        if (result > -1) {
          return true
        } else {
          return false
        }
      };
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    addChecked(i, j) {
      let id = i + "-" + j;
      let result = this.checkedList.findIndex(itemId => {
        return itemId == id;
      });
      if (result > -1) {
        this.checkedList.splice(result, 1);
      } else {
        this.checkedList.push(id);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem;
  .title {
    display: flex;
    align-items: flex-end;
    margin: 0.2rem 0 0.4rem 0;
    p {
      font-size: 0.42rem;
      font-weight: 600;
    }
    span {
      font-size: 0.26rem;
      color: #9C9C9C;
    }
  }
  .me-list{
    margin-bottom: 0.81rem;
  }
  // 列表
  .list {
    .sub-title {
      font-size: 0.33rem;
      margin: .81rem 0 .42rem 0;
      font-weight: 600;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.2rem;
      font-size: 0.26rem;

      li {
        span {
          display: block;
          padding: 0.17rem 0.2rem;
          background: #f7f7f7;
          text-align: center;
          border-radius: 1rem;
        }
        .active{
          background:#c3ab87;
          color: #fff;
        }
      }
    }
  }
}
</style>