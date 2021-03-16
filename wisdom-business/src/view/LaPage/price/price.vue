<template>
  <!-- 文档 -->
  <div class="price">
    <div class="banner">
      <div class="overview-hero">
        <p>文档中心</p>
        <div class="hero_input">
          <input type="text" placeholder="请输入关键词搜索产品文档" />
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="addition-list">
        <div class="c-a">
          <!-- <div class="addition-item"> -->
          <dl v-for="(item, index) in winData" :key="index">
            <dd>
              <img :src="item.img" alt="" />
            </dd>
            <dt>
              <h4>{{ item.tit }}</h4>
              <p>{{ item.con }}</p>
            </dt>
          </dl>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="floating_cover" v-show="coverTop">
      <div class="cover_input">
        <el-input placeholder="请输入关键词搜索产品文档"></el-input>
        <i class="el-icon-search"></i>
      </div>
      <ul class="cover_ul">
        <li><span>新手入门</span></li>
        <li><span>最佳实践</span></li>
        <li><span>API 中心</span></li>
        <li><span>SDK 中心</span></li>
        <li><span>词汇表</span></li>
      </ul>
    </div>
    <div class="pri_con">
      <div class="con_left">
        <h4>产品类别</h4>
      </div>
      <div class="con_right">
        <div class="right_ront">
          <h4>计算</h4>
          <ul class="ront_con">
            <li><span>对象存储</span></li>
            <li><span>文件存储</span></li>
            <li><span>归档存储</span></li>
            <li><span>云 HDFS</span></li>
            <li><span>存储网关</span></li>
            <li><span>云硬盘</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "price",
  data() {
    return {
      winData: [
        {
          img:
            "https://main.qcloudimg.com/raw/99be35ad0f0a255956a7f5bda3991b71.svg",
          tit: "新手入门",
          con: "简单步骤快速入门"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/50ff0fb113b757bb4ec9282b827dab0f.svg",
          tit: "最佳实践",
          con: "典型场景实践上云"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/5b860b7ec8a89abf85c725f68598ef79.svg",
          tit: "API 中心",
          con: "API 3.0概览与参考"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/6487985f3f38b61f98fc0a60fe5f2686.svg",
          tit: "SDK 中心",
          con: "开发者语言与 SDK"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/216228a9ffdb2d4681f3c307ac2ddafa.svg",
          tit: "词汇表",
          con: "腾讯云基本概念速查"
        }
      ],
      coverTop: false
    };
  },
  mounted() {
    this.getScrollTop();
    window.onscroll = () => {
      this.getScrollTop();
      // var height=getClientHeight();
      // var theight = this.getScrollTop();
    };
  },
  methods: {
    //取窗口滚动条高度

    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      if (scrollTop > 390) {
        this.coverTop = true;
      } else {
        this.coverTop = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.price {
  width: 100%;
  height: 100%;

  .floating_cover {
    width: 100%;
    height: 70px;
    background: #f5f7fa;
    border-bottom: 1px solid #e5e8ed;
    box-shadow: 0 2px 4px 0 rgba(3, 27, 78, 0.06);
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .cover_input {
      width: 35%;
      position: relative;
      .el-icon-search {
        position: absolute;
        top: 12px;
        right: 15px;
        &:hover {
          cursor: pointer;
          color: #00a4ff;
        }
      }
    }
    .cover_ul {
      display: flex;
      li {
        padding: 0 20px;
        border-right: 1px solid #ccc;
        span {
          &:hover {
            cursor: pointer;
            color: #00a4ff;
          }
        }
        &:last-child {
          border-right: none;
        }
      }
    }
  }

  .banner {
    position: relative !important;
    box-sizing: border-box;
    padding: 0 200px;
    width: 100%;
    height: 300px;
    background-image: url("https://main.qcloudimg.com/raw/6cf2d1788b69eea176d95979f67f1d3b.jpg");
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .overview-hero {
      width: 680px;
      text-align: center;
      padding-bottom: 50px;
      .hero_input {
      }
      > p {
        font-size: 35px;
        color: #fff;
        line-height: 56px;
      }
      > span {
        font-size: 16px;
        color: #fff;
        line-height: 40px;
      }
      > div {
        width: 680px;
        height: 40px;
        display: flex;
        line-height: 40px;
        margin-top: 20px;
        > input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          line-height: normal;
          border-color: #e5e5e5;
          border-right: 0;
          box-shadow: none;
          display: inline-block;
          vertical-align: middle;
          font-size: 15px;
          padding-right: 50px;
          padding-left: 10px;
          border-radius: 2px;
        }
        > i {
          font-size: 16px;
          margin: 0 -30px;
          line-height: 40px;
          background: #fff;
          color: #ababab;
        }
      }
    }

    .addition-list {
      position: absolute;
      left: 50%;
      margin-left: -50%;
      padding: 0 200px;
      box-sizing: border-box;
      top: 250px;
      width: 100%;
      height: 100px;

      .c-a {
        background: #fff;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 100%;
        display: flex;
        align-items: center;
        dl {
          flex: 1;
          display: flex;
          padding-left: 20px;
          border-right: 1px solid #ccc;
          dd {
          }
          dt {
            margin-left: 10px;
            h4 {
              font-size: 18px;
              font-weight: 400;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                color: #00a4ff;
              }
            }
            p {
              margin-top: 5px;
              font-size: 15px;
              font-weight: 100;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          &:hover {
            cursor: pointer;
          }
          &:last-child {
            border-right: none;
          }
        }
        .addition-item {
          width: 33%;
          position: relative;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 30px;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }

  .pri_con {
    width: 100%;
    min-height: 100px;
    background: #fff;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    padding-top: 100px;
    .con_left {
      width: 220px;
    }
    .con_right {
      flex: 1;
      .right_ront {
        width: 100%;
        margin-bottom: 10px;
        h4 {
          font-size: 20px;
          color: #333;
          line-height: 28px;
          font-weight: 400;
        }
        .ront_con {
          width: 100%;
          height: auto;
          border: 1px solid #ccc;
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          padding: 12px 20px 0;
          box-sizing: border-box;
          li {
            width: 18%;
            padding-left: 5px;
            padding-right: 5px;
            margin-bottom: 10px;
            span {
              font-size: 14px;
              color: #666;
              line-height: 24px;
              vertical-align: 1px;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                cursor: pointer;
                color: #00a4ff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
