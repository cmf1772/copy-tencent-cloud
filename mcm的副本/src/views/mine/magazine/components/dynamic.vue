<template>
  <div class="wrap">
    <div class="list-wrap">
      <div class="item-wrap">
        <div class="title">今天</div>
        <div class="list">
          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center">
              <div class="img-view">
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
              </div>
              <div class="value">
                <div class="v-title">来自对面小姐姐颜值味道均在线的早饭来自对面小姐姐颜值味道均在线的早饭均在线的早饭均均在线的早饭均在线的早饭均</div>
                <div class="num">共九张</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center">
              <div class="img-view three">
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"  style="height:calc(200% + 0.05rem)"/>
                <van-image src="https://img.yzcdn.cn/vant/cat.jpeg"/>
              </div>
              <div class="value">
                <div class="v-title">来自对面小姐姐颜值味道均在线的早饭来自对面小姐姐颜值味道均在线的早饭均在线的早饭均均在线的早饭均在线的早饭均</div>
                <div class="num">共九张</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item-wrap">
        <div class="title">2019年</div>
        <div class="list">
          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center">
              <div class="img-view" :style="`grid-template-columns: repeat(${1}, 1fr);`">
                <div>
                  <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
              </div>
              <div class="value">
                <div class="v-title">来自对面小姐姐颜值味道均在线的早饭来自对面小姐姐颜值味道均在线的早饭均在线的早饭均均在线的早饭均在线的早饭均</div>
                <div class="num">共九张</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center">
              <div class="img-view" :style="`grid-template-columns: repeat(${2}, 1fr);`">
                <div>
                  <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
                <div>
                  <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </div>
              </div>
              <div class="value">
                <div class="v-title">来自对面小姐姐颜值味道均在线的早饭来自对面小姐姐颜值味道均在线的早饭均在线的早饭均均在线的早饭均在线的早饭均</div>
                <div class="num">共九张</div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center a-center">
              <div class="all">
                <div class="top">很厉害的样子很厉害的样子</div>
                <div class="a-foot">
                  <div class="a-img-view">
                     <van-image width="100%" height="100%" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                  <span class="a-title">10万+算什么？创业者迷蒙是这样打造一偏篇篇100万+的</span>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="time">
              <span>06</span>5月
            </div>
            <div class="center a-center">
              <div class="all">
                <div class="a-foot">
                  <div class="a-img-view">
                    <van-image  width="100%" height="100%" fit="fill" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                  </div>
                  <span class="a-title">10万+算什么？创业者迷蒙是这样打造一偏篇篇100万+的</span>
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
export default {};
</script>

<style lang="less" scoped>
.wrap {
  .item-wrap {
    margin-bottom: 0.3rem;
  }
  .list {
    .item {
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      .center {
        display: flex;
        padding-left: 0.3rem;
        .img-view {
          width: 1.5rem;
          height: 1.5rem;
          min-width: 1.5rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 0.05rem;
          > div {
            .van-image {
              width: 100%;
              height: 100%;
              border-radius: 0.05rem;
              overflow: hidden;
            }
            /deep/ img{
              border-radius: 0.05rem !important;
            }
          }
        }
        .three {
          div:nth-child(2) {
            .van-image {
              height: calc(200% + 0.05rem);
              /deep/ img {
                width: 100%;
              }
            }
          }
        }
        .value {
          margin-left: 0.1rem;
          display: flex;
          flex-direction: column;
          .v-title {
            font-size: 0.27rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
          .num {
            margin-top: auto;
            font-size: 0.2rem;
            color: #777;
          }
        }
      }
      .a-center{
        background:#f7f7f7 ;
        padding: .17rem .1rem;
        margin-left: .3rem;
        flex-direction: column;
        .top{
          font-size: .27rem;
          margin-bottom: 0.15rem;
        }
        .a-foot{
          display: flex;
          align-items: center;
          .a-title{
            font-size: .24rem;
            padding-left: 0.2rem;
          }
          .a-img-view{
            width: .9rem;
            height: .9rem;
            min-width: .9rem;
            border-radius: .05rem;
            overflow: hidden;
          }
        }
      }
      .time {
        display: flex;
        font-size: 0.27rem;
        align-items: flex-end;
        min-width: 0.9rem;
        min-width: 1rem;
        span {
          font-size: 0.42rem;
          font-weight: 600;
          margin-right: 0.05rem;
        }
      }
    }
  }
  .title {
    font-size: 0.42rem;
    font-weight: 600;
    margin: .5rem 0;
  }
}
</style>