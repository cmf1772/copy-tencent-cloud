<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="拼团"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-f">
      <search></search>
    </div>

    <!-- 导航 -->
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="item" @click="detailed">
        <div class="img">
          <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <van-icon name="fire-o" size=".26rem" />
            <span>入选中餐销售第一名</span>
            <van-icon name="arrow" size=".26rem" />
          </div>
          <div class="y-list">
            <div>退货包运费</div>
            <div>急速退款</div>
            <div>小编推荐</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p"><p>￥</p> 199.00</span>
              <p class="num">已拼1.2万单</p>
            </div>
            <div class="f-right">
              <div class="icon-list">
                <div>
                  <span style="transform:translate(-0,0)">
                    <img src="@/assets/images/index/banner2.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-30%,0)">
                    <img src="@/assets/images/index/banner1.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-60%,0)">
                    <img src="@/assets/images/index/banner3.jpg" alt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
          <img src="@/assets/images/magazine/index/food/16B1B384664.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <van-icon name="fire-o" size=".26rem" />
            <span>入选中餐销售第一名</span>
            <van-icon name="arrow" size=".26rem" />
          </div>
          <div class="y-list">
            <div>退货包运费</div>
            <div>急速退款</div>
            <div>小编推荐</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p"><p>￥</p> 199.00</span>
              <p class="num">已拼1.2万单</p>
            </div>
            <div class="f-right">
              <div class="icon-list">
                <div>
                  <span style="transform:translate(-0,0)">
                    <img src="@/assets/images/index/banner2.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-30%,0)">
                    <img src="@/assets/images/index/banner1.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-60%,0)">
                    <img src="@/assets/images/index/banner3.jpg" alt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
          <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <van-icon name="fire-o" size=".26rem" />
            <span>入选中餐销售第一名</span>
            <van-icon name="arrow" size=".26rem" />
          </div>
          <div class="y-list">
            <div>退货包运费</div>
            <div>急速退款</div>
            <div>小编推荐</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p"><p>￥</p> 199.00</span>
              <p class="num">已拼1.2万单</p>
            </div>
            <div class="f-right">
              <div class="icon-list">
                <div>
                  <span style="transform:translate(-0,0)">
                    <img src="@/assets/images/index/banner2.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-30%,0)">
                    <img src="@/assets/images/index/banner1.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-60%,0)">
                    <img src="@/assets/images/index/banner3.jpg" alt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
          <img src="@/assets/images/magazine/index/food/16B1B384664.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <van-icon name="fire-o" size=".26rem" />
            <span>入选中餐销售第一名</span>
            <van-icon name="arrow" size=".26rem" />
          </div>
          <div class="y-list">
            <div>退货包运费</div>
            <div>急速退款</div>
            <div>小编推荐</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p"><p>￥</p> 199.00</span>
              <p class="num">已拼1.2万单</p>
            </div>
            <div class="f-right">
              <div class="icon-list">
                <div>
                  <span style="transform:translate(-0,0)">
                    <img src="@/assets/images/index/banner2.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-30%,0)">
                    <img src="@/assets/images/index/banner1.jpg" alt />
                  </span>
                </div>
                <div>
                  <span style="transform:translate(-60%,0)">
                    <img src="@/assets/images/index/banner3.jpg" alt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  data() {
    return {
      navList: [
        { title: "美食", active: "1" },
        { title: "娱乐", active: "2" },
        { title: "美妆", active: "3" },
        { title: "服务", active: "4" },
        { title: "商超", active: "5" },
        { title: "艺术", active: "6" }
      ],
      active: "1"
    };
  },
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeActive(activeName) {
      this.active = activeName;
    },
    onClickRight() {},
    detailed() {
      this.$router.push({
        path: "/shop/special/callage/detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-f {
  padding: 0.1rem 0.45rem;
}
// 导航
.center-nav {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.3rem;
    line-height: 0.3rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0.4rem;
        height:.06rem;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.2rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.container {
  padding: 0 0.45rem;
  .item {
    margin: 0.1rem 0;
    padding: .2rem 0;
    display: flex;
    .img {
      img {
        width: 2.25rem;
        height: 2.25rem;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      padding: 0 0 0 0.31rem;
      .title {
        font-size: 0.3rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .tip {
        display: flex;
        align-items: center;
        color: #999;
        font-size: 0.2rem;
        margin: 0.1rem 0;
      }
      .y-list {
        display: flex;
        div {
          font-size: 0.2rem;

          padding: 0.02rem 0.1rem;
          background: #f7f7f7;
          color: #c3ab87;
          border-radius: 1rem;
        }
        div:not(:last-child) {
          margin-right: 0.1rem;
        }
      }
    }
    .foot {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        display: flex;
        align-items: center;
        .num {
          font-size: 0.24rem;
          color: #999;
          margin-left: 0.1rem;
        }
      }
      .now-p {
        color: #c3ab87;
        display: inline-flex;
        align-items: center;
        font-size: .39rem;
        p{
          font-size: .24rem;
        }
      }
      .f-right {
        span {
          font-size: 0.24rem;
        }
        > span {
          font-size: 0.2rem;
        }
        display: flex;
        align-items: center;
        .icon-list {
          margin-right: -0.2rem;
          margin-left: 0.1rem;
          display: flex;
          align-items: center;
          div {
            display: inherit;
            span {
              display: inline-block;
              position: relative;
              display: inline-block;
              &::after {
                position: absolute;
                content: "";
                background: #fff;
                width: 110%;
                left: 50%;
                top: 50%;
                height: 110%;
                transform: translate(-50%, -50%);
                border-radius: 100%;
              }
            }
            img {
              width: 0.4rem;
              height: 0.4rem;
              position: relative;
              z-index: 1;
              border-radius: 1rem;
            }
          }
          div:not(:first-child) {
            span {
              transform: translate(-50%, 0);
            }
          }
        }
      }
    }
  }
  .item:not(:last-child){
    border-bottom: 1px solid #eee;
  }
}
</style>