<template>
  <div class="main">
    <div class="container">
      <!-- 数据列表页 -->
      <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="img-show">
            <img :src="item.src" />
          </div>
          <div class="content">
            <div class="tag">
              <span class="title">{{item.title}}</span>
              <div>
                <div>#{{item.tag}}</div>
              </div>
            </div>
            <div class="footer">
              <div>
                <van-icon name="play-circle-o" size=".32rem"/>
                {{item.play}}
              </div>
              <div>
                <van-icon name="orders-o" size=".32rem"/>
                {{item.date}}
              </div>
            </div>
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
      // 虚拟数据
      list: [
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        },
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        },
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        },
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        },
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        },
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "纪录不一样的元宵节",
          tag: "音乐故事",
          play: "1368万",
          date: "432期"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

.item:not(:last-child){
  margin-bottom: 0.9rem;
}
// 每一项
.item {
  margin-bottom: 0.45rem;
  display: flex;
  .img-show {
    img {
      width: 2.17rem;
      height:2.17rem;
      border-radius: .05rem;
    }
  }
  .content {
    padding: 0.1rem .32rem;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 0.32rem;
      font-weight: 600;
    }
    .tag {
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        align-items: flex-start;
        div {
          margin-top: 0.3rem;
          padding: 0.05rem 0.2rem;
          display: inline-block;
          width: auto;
          font-size: 0.24rem;
          background: #F7F7F7;
          color: #c3ab87;
          border-radius: 23px;
        }
      }
    }
    .footer {
      margin-top: auto;
      display: flex;
      
      div {
        display: flex;
        font-size: 0.26rem;
        align-items: center;
        margin-right: 0.4rem;
        color: #9C9C9C;
        .van-icon{
          margin-right: .1rem;
        }
      }
    }
  }
}
</style>