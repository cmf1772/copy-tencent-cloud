<template>
  <div class="soultion">
    <div class="tit">
      <div class="overview-hero">
        <p>美城智慧商业</p>
        <span>从基础设施到行业应用领域，腾讯云提供完善的产品体系，助力您的业务腾飞,腾讯云解决方案涵盖游戏、金融、教育、大数据、智慧零售、小程序等多个领域。</span>
        <div class="divButtonHover"
             style="display:block">
          联系我们
        </div>
      </div>
    </div>
    <div class="section">
      <div class="all">
        <p>热门行业解决方案</p>
        <div class="s-all">
          <div class="s-content">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
          <div class="s-content"
               style="    background-image: -webkit-linear-gradient(-143deg,#30b2f2 0,#00c8dc 100%);">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
          <div class="s-content"
               style="    background-image: -webkit-linear-gradient(135deg,#006eff 0,#65a1f8 100%);">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
          <div class="s-content"
               style="    background-image: -webkit-linear-gradient(135deg,#006eff 0,#65a1f8 100%);">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
          <div class="s-content"
               style="    background-image: -webkit-linear-gradient(-143deg,#30b2f2 0,#00c8dc 100%);">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
          <div class="s-content">
            <p>游戏</p>
            <div>共享海量游戏运营经验，打造高质量、全方位生态的游戏云服务平台 </div>
          </div>
        </div>
      </div>
    </div>

    <div class="solution-list">
      <div class="solution-content">
        <p class="solution-tit">全部解决方案</p>
        <div class="tab">
          <!-- @tab-click="handleClick" -->
          <el-tabs v-model="activeName">
            <el-tab-pane label="配置管理"
                         name="first">
            </el-tab-pane>
            <el-tab-pane label="配置管理"
                         name="second">
            </el-tab-pane>
            <el-tab-pane label="角色管理"
                         name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="tab-c">
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
          <div class="tab-item">
            <p><i class="el-icon-s-opportunity"></i>专有云</p>
            <div>
              基于腾讯强大技术能力和成熟产品体系推出的专有云解决方案，提供多版本满足不同的客户需求，为您构建专业安全稳定的云平台。
            </div>
          </div>
        </div>
        <div class="pagination ">
          <el-pagination class="table-pagination"
                         @current-change="handleCurrentChange"
                         :current-page.sync="currentPage"
                         :page-size="10"
                         layout="total, prev, pager, next , jumper"
                         :total="tableTotal">
          </el-pagination>
        </div>
      </div>
    </div>

    <div class="customer-mod">
      <div class="customer-con">
        <p class="solution-tit">精选客户案例</p>
        <div class="list">
          <div>
            <img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt="">
          </div>
          <div><img src="https://mc.qcloudimg.com/static/img/c8d5237f742eeeec2e6602a695272d5e/image.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/1cc8a3dafab65b889ccee4e8acd9ec76.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/e009fdd450b176d46219dff28d0f09ac.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/95aea7fcf2c77c37201d1d4201da1687.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/4a48b0be853df818d186077c4aad056e.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt=""></div>
          <div><img src="https://mc.qcloudimg.com/static/img/c8d5237f742eeeec2e6602a695272d5e/image.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/1cc8a3dafab65b889ccee4e8acd9ec76.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/e009fdd450b176d46219dff28d0f09ac.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/95aea7fcf2c77c37201d1d4201da1687.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/4a48b0be853df818d186077c4aad056e.png"
                 alt=""></div>
          <div><img src="https://mc.qcloudimg.com/static/img/c8d5237f742eeeec2e6602a695272d5e/image.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/28dd077ffff7717f4cb3ee83244eeb3a.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/1cc8a3dafab65b889ccee4e8acd9ec76.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/e009fdd450b176d46219dff28d0f09ac.png"
                 alt=""></div>
          <div><img src="https://main.qcloudimg.com/raw/95aea7fcf2c77c37201d1d4201da1687.png"
                 alt=""></div>
        </div>
      </div>
    </div>
    <div class="sol-contact-inner"
         id="contact">
      <div class="grid">
        <div class="g">
          <p>方案与架构咨询</p>
          <div>
            关于使用场景和技术架构的更多咨询， 请联系我们的销售和技术支持团队。
          </div>
          <span class="divButtonHover">
            联系我们
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'solution',

  data () {
    return {
      activeName: 'first',
      currentPage: 1,
      tableTotal: 1,
    }
  },

  methods: {
    handleCurrentChange () {

    }
  }
}
</script>

<style lang="scss" scoped>
.sol-contact-inner {
  height: 342px;
}
.sol-contact-inner .grid {
  text-align: center;
}
.soultion {
  width: 100%;
  .tit {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 200px;
    background: #45536c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .overview-hero {
      box-sizing: border-box;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 680px;
      height: 300px;
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
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
  .section {
    width: 100%;
    height: 547px;
    box-sizing: border-box;
    padding: 0 200px;
    padding: 10px 200px 10px;
    .all {
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        color: #000;
        font-weight: 400;
        line-height: 46px;
        font-size: 24px;
        margin-top: 30px;
        margin-bottom: 20px;
      }
      .s-all > :first-child {
        background-image: url("https://main.qcloudimg.com/raw/61ccbc7595de4b11946bbccf27b6fbe3.png");
        width: 48% !important;
      }
      .s-all > :last-child {
        background-image: url("https://main.qcloudimg.com/raw/5fb3885bfb93b7306416be24dd97e040.png");
        width: 48% !important;
      }
      .s-all {
        width: 100%;
        .s-content {
          margin-right: 1%;
          float: left;
          width: 23.5%;
          background-position: center top;
          background-size: cover;
          flex: 1;
          height: 168px;
          margin-top: 20px;
          box-sizing: border-box;
          padding: 20px;
          > p {
            font-size: 24px;
            color: #fff;
            line-height: 33px;
            margin-bottom: 30px;
          }

          > div {
            font-size: 14px;
            color: #fff;
            line-height: 24px;
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            max-height: 45px;
          }
        }
      }
    }
  }

  .customer-mod {
    width: 100%;
    // height: 550px;
    box-sizing: border-box;
    padding: 0 200px;
    padding-top: 40px;
    .customer-con {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        color: #000;
        font-size: 24px;
        font-weight: 400;
        line-height: 46px;
      }
      .list {
        width: 100%;
        display: flex;
        height: auto;
        flex-wrap: wrap;
        justify-content: space-between;
        > div {
          width: 20%;
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 1%;
          > img {
            width: 60%;
          }
        }
      }
    }
  }

  .solution-list {
    background: #f7f8fa;
    width: 100%;
    height: 730px;
    box-sizing: border-box;
    padding: 0 200px;
    padding-top: 30px;
    .solution-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 100%;
      .solution-tit {
        color: #000;
        font-size: 24px;
        font-weight: 400;
        line-height: 46px;
      }
      .tab {
        width: 100%;
      }

      .pagination {
        margin-top: 40px;
      }
      .tab-c {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 30px;
        .tab-item {
          width: 32%;
          box-sizing: border-box;
          font-size: 14px;
          padding: 20px;
          margin-bottom: 20px;
          vertical-align: top;
          height: 173px;
          background: #fff;
          border: none;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          -webkit-transition: box-shadow 0.2s linear;
          -webkit-transition: transform 0.2s linear;
          transition: box-shadow 0.2s linear;
          transition: transform 0.2s linear;
          > p {
            color: #000;
            font-size: 18px;
            line-height: 27px;
            font-size: 24px;
            margin-bottom: 20px;
            > i {
              color: #409eff;
              margin-right: 5px;
            }
          }
          > div {
            color: #666;
            font-size: 14px;
            line-height: 24px;
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            max-height: 4.7em;
          }
        }
      }
    }
  }
}
</style>
