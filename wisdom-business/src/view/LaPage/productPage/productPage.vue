<template>
  <div class="productPage">
    <div class="banner">
      <div class="overview-hero">
        <p>美城智慧商业</p>
        <span>从基础设施到行业应用领域，腾讯云提供完善的产品体系，助力您的业务腾飞</span>
        <div>
          <input type="text"
                 placeholder="请输入">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="addition-list">
        <div class="c-a">
          <div class="addition-item">
            <div class="pa-item">
              <div class="item-tit"><i class="el-icon-s-flag"></i> <span>热门产品</span> </div>
              <div class="item-con">
                <ul>
                  <li>
                    <p>云服务器</p>
                    <span>安全稳定，高弹性的计算服务</span>
                  </li>
                  <li>
                    <p>云数据库 MySQL</p>
                    <span>高性能、高可靠、灵活的数据库托管服务</span>
                  </li>
                  <li>
                    <p>域名注册</p>
                    <span>专业域名服务，安全、省心、可信赖</span>
                  </li>
                  <li>
                    <p>网站备案</p>
                    <span>备案备多久，云服务免费用多久</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="addition-item">
            <div class="pa-item">
              <div class="item-tit"><i class="el-icon-s-flag"></i> <span>热门产品</span> </div>
              <div class="item-con">
                <ul>
                  <li>
                    <p>云服务器</p>
                    <span>安全稳定，高弹性的计算服务</span>
                  </li>
                  <li>
                    <p>云数据库 MySQL</p>
                    <span>高性能、高可靠、灵活的数据库托管服务</span>
                  </li>
                  <li>
                    <p>域名注册</p>
                    <span>专业域名服务，安全、省心、可信赖</span>
                  </li>
                  <li>
                    <p>网站备案</p>
                    <span>备案备多久，云服务免费用多久</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="addition-item"
               style="">
            <div class="pa-item"
                 style="border-right: solid 1px #fff;">
              <div class="item-tit"><i class="el-icon-s-flag"></i> <span>热门产品</span> </div>
              <div class="item-con">
                <ul>
                  <li>
                    <p>云服务器</p>
                    <span>安全稳定，高弹性的计算服务</span>
                  </li>
                  <li>
                    <p>云数据库 MySQL</p>
                    <span>高性能、高可靠、灵活的数据库托管服务</span>
                  </li>
                  <li>
                    <p>域名注册</p>
                    <span>专业域名服务，安全、省心、可信赖</span>
                  </li>
                  <li>
                    <p>网站备案</p>
                    <span>备案备多久，云服务免费用多久</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="section">
      <div class="section-item"
           v-for="(item, index) in data"
           :key="index">
        <div class="section-tit">{{item.label}}</div>
        <div class="section-con"
             v-for="(item_c, index_c) in item.children"
             :key="index_c">
          <div class="tit"
               :id="'section_' + item_c.id">{{item_c.label}}</div>
          <div class="list">
            <ul>
              <li>
                <i class="el-icon-document-copy"></i>
                <div>
                  <span>云服务器</span>
                  <p>安全稳定，高弹性的计算服务</p>
                </div>
              </li>
              <li>
                <i class="el-icon-document-copy"></i>
                <div>
                  <span>云服务器</span>
                  <p>安全稳定，高弹性的计算服务</p>
                </div>
              </li>
              <li>
                <i class="el-icon-document-copy"></i>
                <div>
                  <span>云服务器</span>
                  <p>安全稳定，高弹性的计算服务</p>
                </div>
              </li>
              <li>
                <i class="el-icon-document-copy"></i>
                <div>
                  <span>云服务器</span>
                  <p>安全稳定，高弹性的计算服务</p>
                </div>
              </li>
              <li>
                <i class="el-icon-document-copy"></i>
                <div>
                  <span>云服务器</span>
                  <p>安全稳定，高弹性的计算服务</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="sol-contact-inner"
         id="contact">
      <div class="grid">
        <div class="g">
          <p>开始体验免费套餐</p>
          <div>
            <a href="">注册</a> 即可领取40+款免费体验产品，为您提供便捷优质的上云实践机会。企业用户最高可获得180天云服务器体验时长。
          </div>
          <span class="divButtonHover">
            开始体验
          </span>
        </div>
        <div class="g">
          <p>联系我们</p>
          <div>
            我们为您提供个性化的售前购买咨询服务，以及全面的技术售后服务。
          </div>
          <span class="divButtonHover divHover">
            联系我们
          </span>
        </div>
      </div>
    </div>

    <div :class="isFixed ? 'is_fixed' : 'tree'"
         id="boxFixed">
      <p>产品类型</p>
      <el-tree :data="data"
               :props="defaultProps"
               @node-click="handleNodeClick">
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productpage',
  data () {
    return {
      isFixed: false,
      offsetTop: 0,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      data: [{
        label: '一级 1',
        id: '1',
        children: [{
          label: '二级 1-1',
          id: '2'
        }]
      }, {
        label: '一级 2',
        id: '3',
        children: [{
          label: '二级 2-1',
          id: '4'
        }, {
          label: '二级 2-2',
          id: '5'
        }]
      }, {
        label: '一级 3',
        id: '6',
        children: [{
          label: '二级 3-1',
          id: '7'
        }, {
          label: '二级 3-2',
          id: '8'
        }]
      }],
      contact: 0
    }
  },

  methods: {
    handleNodeClick (e) {
      console.log(e)
      if (e.children) return false
      const number = document.querySelector('#section_' + e.id).offsetTop;
      let windowScrollTop = document.documentElement.scrollTop
      let flag = windowScrollTop < number - 50

      let scrollTimer = setInterval(() => {
        if (flag) {
          document.documentElement.scrollTop += 20
          console.log(document.documentElement.scrollTop, number - 50)
          if (document.documentElement.scrollTop > number - 50) {
            clearInterval(scrollTimer); // 清除计时器
          }
        } else {
          document.documentElement.scrollTop -= 20
          if (document.documentElement.scrollTop < number - 50) {
            clearInterval(scrollTimer); // 清除计时器
          }
        }
      }, 10);
    },

    initHeight () {

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > this.offsetTop && this.contact > scrollTop ? true : false;
    },
  },

  mounted () {
    window.addEventListener('scroll', this.initHeight);
    this.$nextTick(() => {
      this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      this.contact = document.querySelector('#contact').offsetTop;
    })
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
.is_fixed {
  width: 150px;
  position: fixed;
  top: 50px;
  right: 100px;
  z-index: 999;
}

.divHover {
  background: #fff !important;
  color: #00a4ff !important;
}

.divHover:hover {
  background: #00a4ff !important;
  color: #fff !important;
}
.tree {
  width: 150px;
  position: absolute;
  top: 900px;
  right: 100px;
  height: 500px;
}
.productPage {
  width: 100%;

  .banner {
    position: relative !important;
    box-sizing: border-box;
    padding: 0 200px;
    width: 100%;
    height: 390px;
    background: #191e2c;
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
      > p {
        font-size: 40px;
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
        height: 55px;
        display: flex;
        line-height: 55px;
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
        }
        > i {
          font-size: 16px;
          margin: 0 -30px;
          line-height: 55px;
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
      top: 400px;
      width: 100%;
      height: 386px;

      .c-a {
        background: #fff;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        margin-top: -95px;
        margin-bottom: 64px;
        .addition-item {
          width: 33%;
          position: relative;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 30px;
          display: inline-block;
          vertical-align: top;
          min-height: 386px;
          .pa-item {
            border-right: solid 1px #e5e5e5;
            .item-tit {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              > i {
                vertical-align: -8px;
                margin-right: 12px;
                font-size: 32px;
              }
              > p {
                font-size: 20px;
                color: #333;
                line-height: 28px;
                padding-bottom: 20px;
              }
            }
            .item-con {
              > ul {
                > li {
                  margin-bottom: 20px;
                  > p {
                    font-size: 16px;
                    color: #333;
                    line-height: 22px;
                  }
                  > span {
                    font-size: 13px;
                    color: #999;
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .section {
    width: 100%;
    height: auto;
  }

  .section {
    margin-top: 340px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 200px;
    margin-bottom: 20px;
    .section-item {
      width: 100%;
      .section-tit {
        margin-top: 50px;
        font-size: 30px;
        color: #333;
        line-height: 42px;
        padding: 16px 0 12px;
        border-bottom: solid 1px #ddd;
      }
      .section-con {
        margin-top: 50px;
        .tit {
          font-size: 20px;
          color: #333;
          font-weight: 600;
          line-height: 20px;
          margin-top: 4px;
          margin-bottom: 4px;
          padding-left: 10px;
          border-left: solid 2px #00a4ff;
        }
        .list {
          box-sizing: border-box;
          padding-left: 10px;
          > ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            > li {
              width: 33.3%;
              display: flex;
              margin-top: 30px;
              // justify-content: center;
              > i {
                margin-top: 2px;
                font-size: 32px;
                margin-right: 10px;
              }
              > div {
                > span {
                  font-size: 16px;
                  color: #000;
                  line-height: 22px;
                }

                > p {
                  font-size: 14px;
                  color: #999;
                  line-height: 21px;
                  margin-top: 5px;
                }
                // display: flex;
              }
            }
          }
        }
      }
    }
  }
}
</style>