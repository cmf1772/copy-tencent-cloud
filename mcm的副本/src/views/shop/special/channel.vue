<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="美食"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-f">
      <search></search>
    </div>

    <!-- 帅选 -->
    <div class="screen">
      <div>
        品类
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        附近
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        排序
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        筛选
        <i class="iconfont icon-down"></i>
      </div>
    </div>

    <div class="container">
      <div class="list">
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/201892241933668.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/Pr4j0J94OcIc.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/u=4083172528,1051719919&fm=26&gp=0.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/01e6cb56a6ea546ac7256cb01d0efd.JPG@1280w_1l_2o_100sh.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/201892241933668.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/Pr4j0J94OcIc.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/201892241933668.jpg" />
          </div>
          <div class="content">
            <div class="title">优质双人火锅</div>
            <div class="product">清汤鸳鸯锅、精品肥牛肉、手工牛肉丸、新鲜毛肚</div>
            <div class="tips">
              <span>周一到周日可用</span>
            </div>
            <div class="price">
              <div class="now-p">
                ￥
                <span>199</span>
              </div>
              <del class="old-p">￥302</del>
            </div>
            <div class="adress">
              <div class="l-adress">
                <van-icon name="shop-o" />重庆辣到爆火锅店
              </div>
              <div class="l-km">沙河1.2km</div>
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
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    detailed() {
      this.$router.push({
        path: "/shop/shop_detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-f {
  padding: 0.1rem 0.45rem;
}
.screen {
  margin: 0.3rem 0;
  padding: 0 0.45rem;
  font-size: 0.28rem;
  display: flex;
  justify-content: space-between;
  i {
    display: initial;
    font-size: 0.2rem;
  }
}
.container {
  padding: 0 0.45rem;
  padding-bottom: 0.13rem;
  .item {
    padding: 0.42rem 0;
    display: flex;
    align-items: center;
    .img {
      img {
        width: 2.26rem;
        height: 2.26rem;
        border-radius: 0.03rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      padding-left: 0.2rem;
      font-size: 0.24rem;
      .title {
        font-size: 0.3rem;
        font-weight: 600;
        margin-bottom: 0.08rem;
      }
      .product {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        color: #777;
      }
      .tips {
        margin: 0.1rem 0 0.15rem 0;
        span {
          display: inline-block;
          color: #c3ab87;
          font-size: 0.21rem;
          background: #f7f7f7;
          border-radius: 1rem;
          padding: 0rem 0.06rem;
        }
      }
      .price {
        display: flex;
        align-items: center;
        .now-p {
          color: #c3ab87;
          span {
            font-size: 0.39rem;
          }
          margin-right: 0.2rem;
        }
        .old-p {
          color: #777;
        }
      }
      .adress {
        margin-top: auto;
        display: flex;
        font-size: 0.21rem;
        color: #777;
        justify-content: space-between;
        align-items: flex-end;
        .l-adress {
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
}
</style>