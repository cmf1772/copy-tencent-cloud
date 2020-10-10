<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="选择发布类型">
        <!-- <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template> -->
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="resident">
        <div class="title">居民住宅</div>
        <div class="list">
          <div class="item" @click="releaseHouse">
            <div class="icon">
              <img :src="imgList[0]" />
            </div>
            <div class="center">
              <div class="name">
                <div class="item-title">居民住宅
                  <div class="new">
                    new
                  </div>
                </div>
                <div class="value">一整套房子，也包括开间</div>
              </div>
              <van-icon name="arrow" color="#999" size=".32rem" />
            </div>
          </div>
          <div class="item" v-for="(item,index) in 5 " :key="index" @click="releaseHouse">
            <div class="icon">
              <img :src="imgList2[index]" />
            </div>
            <div class="center">
              <div class="name">
                <div class="item-title">居民住宅</div>
                <div class="value">一整套房子，也包括开间</div>
              </div>
              <van-icon name="arrow" color="#999" size=".32rem" />
            </div>
          </div>
        </div>
      </div>
      <div class="business">
        <div class="title">商业用地</div>
        <div class="list">
          <div class="item" @click="releaseHouse">
            <div class="icon">
              <img :src="imgList[3]" />
            </div>
            <div class="center">
              <div class="name">
                <div class="item-title">商业用地
                  <div class="new">
                    new
                  </div>
                </div>
                <div class="value">一整套房子，也包括开间</div>
              </div>
              <van-icon name="arrow" color="#999" size=".32rem" />
            </div>
          </div>
          <div class="item" v-for="(item,index) in 5 " :key="index" @click="releaseHouse">
            <div class="icon">
              <img :src="imgList[index]" />
            </div>
            <div class="center">
              <div class="name">
                <div class="item-title">居民住宅</div>
                <div class="value">一整套房子，也包括开间</div>
              </div>
              <van-icon name="arrow" color="#999" size=".32rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <pFooter></pFooter>
  </div>
</template>

<script>
import pFooter from "../../components/public_footer";
export default {
  components: { pFooter },
  data(){
    return{
      imgList:[require("@/assets/images/icon/serve/house/img1.png"),
      require("@/assets/images/icon/serve/house/img2.png"),
      require("@/assets/images/icon/serve/house/img3.png"),
      require("@/assets/images/icon/serve/house/img4.png"),
      require("@/assets/images/icon/serve/house/img5.png"),
      ],
      imgList2:[require("@/assets/images/icon/serve/house/img6.png"),
      require("@/assets/images/icon/serve/house/img7.png"),
      require("@/assets/images/icon/serve/house/img8.png"),
      require("@/assets/images/icon/serve/house/img9.png"),
      require("@/assets/images/icon/serve/house/img10.png"),
      ],
    }
  },
  methods:{
    releaseHouse(){
      this.$router.push({
        path: "/serve/house/release/detailed"
      })
    }
  }
};
</script>
<style lang="less" scoped>
.container {
 
  padding: 0 0.45rem;
   padding-bottom: 1.3rem;
  .title {
    font-size: 0.42rem;
    padding: 0.3rem 0;
    font-weight: bold;
    border-bottom: 1px solid #efefef;
  }
  .list{
    padding-bottom: 0.2rem;
  }
  .item {
    padding: .2rem 0;
    display: flex;
    .icon {
      img {
        width:1.23rem;
        height: 1.23rem;
        border-radius: 1rem;
      }
    }
    .center {
      display: flex;
      flex: 1;
      padding-left: 0.35rem;
      justify-content: space-between;
      align-items: center;
      .name {
        display: flex;
        flex-direction: column;
        .item-title {
          font-size: 0.3rem;
          font-weight: 600;
          position: relative;
          display: flex;
          align-items: center;
          .new{
            transform: scale(.8);
            color: #c3ab87;
            display: inline-table;
            align-items: center;
            background: #000;
            margin-left: 0.1rem;
            font-size: .2rem;
            padding: .00rem .06rem;
          }
        }
        .value {
          font-size: 0.24rem;
          color: #777;
          margin-top: 0.05rem;
        }
      }
    }
  }
}
</style>