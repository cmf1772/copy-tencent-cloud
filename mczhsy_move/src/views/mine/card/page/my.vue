<template>
  <div class="wrapper">
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in activeList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="list">
      <div class="item">
        <div class="list-m">
          <div class="title-m">
            商品通证券
            <van-icon name="arrow" size=".32rem"/>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip new">
              新到
            </div>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip">
              将过期
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="list-m">
          <div class="title-m">
            权益型券
            <van-icon name="arrow" size=".32rem"/>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip new">
              新到
            </div>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip">
              将过期
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="list-m">
          <div class="title-m">
            权益型券2
            <van-icon name="arrow" size=".32rem"/>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip new">
              新到
            </div>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip">
              将过期
            </div>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip new">
              新到
            </div>
          </div>
          <div class="item-m">
            <div class="left">
              <div class="amount">
                ￥<span>20</span>
              </div>
              <div class="amount-tip">
                满69元可减
              </div>
            </div>
            <div class="center">
              <div class="name">
                商品兑换券
              </div>
              <span class="time">有效期至 2020.6.30 23:59</span>
              <p class="use-object">适用对象 健康家</p>
            </div>  
            <div class="right">
              <div class="btn">去使用</div>
            </div>
            <div class="tip">
              将过期
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
      activeList: [
        { title: "未使用", active: "noUse" },
        { title: "已使用", active: "use" },
        { title: "已过期", active: "oldDate" },
      ],
      active: "noUse"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {
      this.active = active;
    },
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 0 0rem;
  .list{
    .list-m{
      padding: .2rem 0;
      .item-m{
        padding: .15rem;
        display: flex;
        margin: .34rem 0;
        box-shadow: 0 0 10px 1px #f0f0f0;
        position: relative;
        overflow: hidden;
        .tip{
          position: absolute;
          font-size: .2rem;
          background: #f2f2f2;
          width: 2rem;
          text-align: center;
          transform: rotate(45deg) scale(.8) translate(calc(50%),0);
          right: -.15rem;
          top: -.45rem;
        }
        .new{
          color: #c3ab87;
        }
        .right{
          display: flex;
          align-items: center;
          .btn{
            font-size: .21rem;
            padding: .08rem .25rem;
            border-radius: 1rem;
            color: #fff;
            background: #c3ab87;
          }
        }
        .center{
          padding-left: 0.4rem;
          flex: 1;
          .name{
            font-size: .3rem;
            margin-bottom: 0.2rem;
          }
          .use-object,.time{
            display: block;
            font-size: .21rem;
            color: #777;
            margin-top: 0.1rem;
          }
        }
        .left{
          display: flex;
          flex-direction: column;
          min-width: 1.5rem;
          justify-content: center;
          align-items: center;
          .amount{
            font-size: .24rem;
             color: #c3ab87;
            span{
             
              font-size: .42rem;
            }
          }
          .amount-tip{
            font-size: .21rem;
            color: #777;
          }
        }
      }
      .title-m{
        display: flex;
        justify-content: space-between;
        font-size: .42rem;
        margin-top: 0.2rem;
        font-weight: 600;
        align-items: center;
      }
    }
  }
  .center-nav {
    display: flex;
    justify-content: center;
    padding: 0 0.45rem;
    ul {
      display: flex;
      margin: 0.5rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    li {
      font-size: 0.3rem;
      line-height: 0.3rem;
      color: #999;
      .active {
        font-size: 0.36rem;
        color: #000;
        font-weight: 600;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0.5rem;
          height: 3px;
          border-radius: 1px;
          background: #c3ab87;
          bottom: -0.1rem;
          right: 50%;
          transform: translate(50%, 0);
        }
      }
    }
  }
}
</style>