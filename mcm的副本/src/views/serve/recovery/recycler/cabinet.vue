<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="我的回收柜"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="now">
      <van-cell title="当前取货实时价格" is-link />
    </div>

    <div class="list">
      <div class="item">
        <div class="title">
          <span class="text">PS123456</span>
          <p>
            <van-icon name="location-o" />中央一号机房回收机
          </p>
        </div>
        <ul>
          <li>
            <div class="name">
              <div class="tip danger">未满</div>
              <span>衣物：</span>
              <span class="num">12.33公斤</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>衣物：</span>
              <span class="num">12.33公斤</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>衣物:</span>
              <span class="num">12.33公斤</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
        </ul>
        <div class="foot">
          <div class="all-price">
            合计/￥
            <span class="price">86.50</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <span class="text">PS123456</span>
          <p>
            <van-icon name="location-o" />中央一号机房回收机
          </p>
        </div>
        <ul>
          <li>
            <div class="name">
              <div class="tip danger">未满</div>
              <span>塑料瓶：</span>
              <span class="num">12.33公斤</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>衣物：</span>
              <span class="num">12.33公斤</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>衣物：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">12.33公斤</div>
          </li>
        </ul>
        <div class="foot">
          <div class="all-price">
            合计/￥
            <span class="price">86.50</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <span class="text">PS123456</span>
          <p>
            <van-icon name="location-o" />中央一号机房回收机
          </p>
        </div>
        <ul>
          <li>
            <div class="name">
              <div class="tip danger">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">12.33公斤</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">12.33公斤</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
        </ul>
        <div class="foot">
          <div class="all-price">
            合计/￥
            <span class="price">86.50</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">
          <span class="text">PS123456</span>
          <p>
            <van-icon name="location-o" />中央一号机房回收机
          </p>
        </div>
        <ul>
          <li>
            <div class="name">
              <div class="tip danger">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip warn">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
          <li>
            <div class="name">
              <div class="tip info">未满</div>
              <span>塑料瓶：</span>
              <span class="num">100个</span>
            </div>
            <div class="price">￥15.26</div>
          </li>
        </ul>
        <div class="foot">
          <div class="all-price">
            合计/￥
            <span class="price">86.50</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.van-cell{
  padding-left: .45rem;
  padding-right: .45rem;
  span{
    font-size: .3rem;
  }
}
.now {
  padding-top: 0.2rem;
  border-bottom: 0.2rem #f7f7f7 solid;
}
.list {
  padding: 0 0.45rem;
  .item {
    border-bottom: 1px #efefef solid;
    padding: 0.4rem 0;
    .title {
      .text {
        font-size: 0.30rem;
        font-weight: bold;
      }
      p {
        display: inline-block;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        letter-spacing: 0.02rem;
        color: #c3ab87;
        margin-top: 0.03rem;
      }
    }
    ul {
      padding: 0.2rem 0;
      li {
        display: flex;
        font-size: 0.24rem;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem 0;
        span,
        .price {
          color: #999;
        }
        .name {
          display: flex;
          align-items: center;
        }
        .tip {
          padding: 0.02rem 0.15rem;
          border-radius: 1rem;
          margin-right: 0.1rem;
          font-size: .21rem;
        }
        .danger {
          color: #ff6e71;
          background: #fef3f5;
          
        }
        .info {
          color: #50c5f9;
          background: #f3fbfe;
        }
        .warn {
          color: #f9b350;
          background: #f3fbfe;
        }
      }
    }
    .foot {
      .all-price {
        font-size: 0.24rem;
        font-weight: 600;
        color: #c3ab87;
        margin-left: auto;
        .price {
          font-size: 0.36rem;
        }
      }
      display: flex;
    }
  }
}
</style>