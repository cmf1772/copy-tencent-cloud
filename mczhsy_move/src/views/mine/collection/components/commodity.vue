<template>
  <div class="container">
    <div class="c-list" v-if="data.length > 0">
      <div class="item" v-for="(item,index) in data" :key="index">
        <div class="img">
          <img :src="item.goods_file1" />
        </div>
        <div class="center">
          <div class="title" @click="detaileds(item)">{{item.goods_name}}</div>
          <div class="coll">
            <div>497人收藏</div>
            <div>50人推荐</div>
          </div>
          <div class="foot">
            <div class="price">
              ￥
              <span>{{ item.goods_sale_price | changeAmount}}</span>
            </div>
            <div class="comment">
              <div>
                <img
                  src="@/assets/images/icon/mine/collection/like.png"
                  style="width:.22rem;margin-right:.1rem"
                />推荐
              </div>
              <div>找相似</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip" v-else>暂无收藏商品</div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      commodityList: []
    };
  },
  filters: {

    //格式化价格
    changeAmount(str) {
      return str
        .split(".")[0]
        .split("")
        .reduce((result, item) => {
          if (!isNaN(parseInt(item))) {
            result.push(item);
            return result;
          }
          return result;
        }, [])
        .join("");
    }
  },
  created() {},
  methods: {
    detaileds(item){
      this.$router.push({
        path: "/shop/commodity_detailed",
        query: {
          uid:item.uid,
          supid:item.supplier_id
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .c-list {
    padding-bottom: 0.1rem;
    padding-bottom: 0.2rem;
    .item:not(:last-child) {
      padding-bottom: 0.4rem;
      border-bottom: 0.01rem solid #f0f0f0;
    }
    .item {
      padding: 0.42rem 0;
      display: flex;
      .img {
        img {
          width: 2.26rem;
          height: 2.26rem;
          border-radius: 0.06rem;
        }
      }
      .center {
        padding-left: 0.32rem;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 0.3rem;
          margin-bottom: 0.1rem;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .coll {
          font-size: 0.24rem;
          color: #999;
          display: flex;
          margin-top: 0.05rem;
          div {
            margin-right: 0.3rem;
          }
          div:first-child {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              width: 1px;
              height: 80%;
              background: #efefef;
              right: -0.15rem;
              top: 50%;
              transform: translate(0, -50%);
            }
          }
        }
        .foot {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .price {
            font-size: 0.24rem;
            color: #c3ab87;

            span {
              font-size: 0.39rem;
              margin-left: -0.05rem;
            }
          }
          .comment {
            display: flex;
            align-items: center;
            font-size: 0.2rem;
            div {
              display: flex;
              align-items: center;
              margin-left: 0.2rem;
              width: 0.98rem;
              height: 0.37rem;
              justify-content: center;
              border: 1px solid #efefef;
              border-radius: 1rem;
              color: #999;
            }
          }
        }
      }
    }
    .item:first-child {
      padding-top: 0;
    }
  }
}
</style>