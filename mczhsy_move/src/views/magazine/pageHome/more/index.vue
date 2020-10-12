<template>
  <div class="more">
    <!-- 顶部 -->
    <div class="top">
      <van-icon name="arrow-left"
                @click="$router.push('/index')" />
      <!--搜索框-->
      <div class="search"
           id="search">
        <keep-alive>
          <search placeholdertext="全部应用"
                  style="width: 6rem"
                  @adressChange="adressChange"
                  :popup="true">
            <!-- <template v-slot:left>
              {{adressText}}
              <img src="@/assets/images/icon/index/down.png"
                   style="width:.14rem" />
            </template> -->
            <!-- <template #right>
              <img src="@/assets/images/icon/index/sean.png"
                   alt />
            </template> -->
          </search>
        </keep-alive>
      </div>
      <div class="float"
           @click="goEdit"
           style="font-size: 0.28rem !important;min-width: .4rem; text-align: center;">
        编辑
      </div>
    </div>

    <div class="myMore">
      <p>我的应用</p>
      <div class="imgAll">
        <div>
          <img src="../../../../assets/images/magazine/zz.png" />
          <img src="../../../../assets/images/magazine/na2.png" />
          <img src="../../../../assets/images/magazine/na3.png" />
          <img src="../../../../assets/images/magazine/na4.png" />
          <img src="../../../../assets/images/magazine/na1.png" />
          <img src="../../../../assets/images/magazine/gd.png" />
        </div>
      </div>
      <van-divider>以上应用展示在首页</van-divider>
      <ul class="inavs">
        <li>
          <router-link to="/magazine/index">
            <div class="img">
              <img src="../../../../assets/images/magazine/zz.png" />
            </div>
            <p>杂志</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/dynamic/follow">
            <div class="img">
              <img src="../../../../assets/images/magazine/na1.png" />
            </div>
            <p>看看</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 分割线 -->
    <div class="divider"></div>
    <div class="content">
      <p>全部应用</p>
      <div class="itemCon">
        <p>最近使用</p>
        <ul class="inavs">
          <li @touchstart="start"
              @touchend="end">
            <router-link to="/magazine/index">
              <div class="img">
                <img src="../../../../assets/images/magazine/zz.png" />
              </div>
              <p>杂志</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/dynamic/follow">
              <div class="img">
                <img src="../../../../assets/images/magazine/na1.png" />
              </div>
              <p>看看</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/dynamic">
              <div class="img">
                <img src="../../../../assets/images/magazine/na2.png" />
              </div>
              <p>动态</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/problem">
              <div class="img">
                <img src="../../../../assets/images/magazine/na3.png" />
              </div>
              <p>问答</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/broadcast">
              <div class="img">
                <img src="../../../../assets/images/magazine/na4.png" />
              </div>
              <p>广播</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/video">
              <div class="img">
                <img src="../../../../assets/images/magazine/na5.png" />
              </div>
              <p>视频</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/more">
              <div class="img">
                <img src="../../../../assets/images/magazine/gd.png" />
              </div>
              <p>更多</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="itemCon">
        <p>时尚杂志</p>
        <ul class="inavs">
          <li>
            <router-link to="/magazine/index">
              <div class="img">
                <img src="../../../../assets/images/magazine/zz.png" />
              </div>
              <p>杂志</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/dynamic/follow">
              <div class="img">
                <img src="../../../../assets/images/magazine/na1.png" />
              </div>
              <p>看看</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/dynamic">
              <div class="img">
                <img src="../../../../assets/images/magazine/na2.png" />
              </div>
              <p>动态</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/problem">
              <div class="img">
                <img src="../../../../assets/images/magazine/na3.png" />
              </div>
              <p>问答</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/broadcast">
              <div class="img">
                <img src="../../../../assets/images/magazine/na4.png" />
              </div>
              <p>广播</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/video">
              <div class="img">
                <img src="../../../../assets/images/magazine/na5.png" />
              </div>
              <p>视频</p>
            </router-link>
          </li>
          <li>
            <router-link to="/magazine/more">
              <div class="img">
                <img src="../../../../assets/images/magazine/gd.png" />
              </div>
              <p>更多</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="itemCon">
        <p>同城社交</p>
        <ul class="inavs">
          <li>
            <router-link to="/magazine/index">
              <div class="img">
                <img src="../../../../assets/images/magazine/zz.png" />
              </div>
              <p>杂志</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索

export default {
  name: 'more',

  components: {
    search,
  },

  methods: {
    // 获取分类咨询
    getCategoryList () {
      this.$api.index
        .getNewsList({
          city: this.adressText.split("·")[0]
        })
        .then(res => {
          this.categoryList = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    goEdit () {
      this.$router.push('/magazine/edite')
    },

    //长按事件
    start () {
      clearTimeout(this.loop); //再次清空定时器，防止重复注册定时器
      this.loop = setTimeout(() => {

        this.$router.push('/magazine/edite')

      }, 600);
    },

    end () {
      clearTimeout(this.loop); //清空定时器，防止重复注册定时器
    },

  },

  mounted () {
    // 获取分类咨询
    this.getCategoryList();
  }
}
</script>

<style lang="scss" scoped>
.more {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.28rem;
  .content {
    width: 7rem;
    margin: 0.2rem auto;
    > p {
      font-size: 0.34rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #222222;
      margin: 0.3rem auto;
      width: 100%;
      text-align: center;
    }
    .itemCon {
      margin-bottom: 0.4rem;
      > p {
        font-size: 0.42rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #222222;
        line-height: 36px;
        margin-left: 0.2rem;
      }
      .inavs {
        > li {
          margin-top: 0.5rem !important;
        }
      }
    }
  }

  .myMore {
    width: 7rem;
    margin: 0.2rem auto;

    > p {
      font-size: 0.34rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #222222;
      margin: 0.3rem auto;
      width: 100%;
      text-align: center;
    }
    .imgAll {
      // width: 100%;
      display: flex;
      margin: 0.1rem auto;
      text-align: center;
      > div {
        margin: 0 auto;
      }
      img {
        width: 0.3rem;
        margin-right: 0.17rem;
      }
    }
  }

  .inavs {
    display: flex;
    flex-wrap: wrap;
    > li {
      font-size: 0.2rem;
      display: flex;
      width: 1.4rem;
      flex-direction: column;
      align-items: center;
      // margin-top: 0.5rem;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .img {
        width: 0.35rem;
        height: 0.5rem;
      }

      img {
        width: 0.35rem;
      }

      p {
        // margin-top: 0.1rem;
      }
    }
  }

  .divider {
    width: 100%;
    height: 0.21rem;
    background: #f7f7f7;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 0.25rem;
    margin-top: 0.2rem;
    .van-icon {
      font-size: 0.34rem;
    }
  }
}
</style>