<template>
  <div class="pageHome">
    <el-container>
      <el-aside width="auto">
        <div class="all_mp"
             :style="{ height: +height + 'px' }">
          <div class="tit">
            <div class="item">
              <div>
                <img src="../../../assets/img/favicon.png"
                     @click="right"
                     alt="" />
              </div>
              <span v-if="!isCollapse"
                    @click="geColund">美城智慧商业后台</span>
            </div>
            <i class="el-icon-s-fold"
               v-if="!isCollapse"
               @click="left"></i>
          </div>
          <div class="menu">
            <el-menu :default-active="index_menu"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     background-color="#2f3e69"
                     text-color="#fff"
                     :unique-opened="true"
                     active-text-color="rgb(101, 206, 167)"
                     @close="handleClose"
                     :collapse="isCollapse">
              <!-- <el-menu-item index="0"
                            @click="goRightDetial('one')">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </template>
              </el-menu-item> -->

              <!-- 一级菜单 -->
              <el-submenu v-for="(menu_one, index_one) in menu"
                          :index="index_one + 1 + ''"
                          :key="index_one">
                <template slot="title">
                  <i :class="menu_one.icon"></i>
                  <span slot="title">{{ menu_one.name }}</span>
                </template>
                <!-- 二级菜单  没有子集菜单-->
                <el-menu-item v-for="(menu_two, index_two) in menu_one.subset"
                              v-if="!menu_two.actions"
                              :key="index_two"
                              @click="
                    goRightDetial(
                      'two',
                      menu_two,
                      index_one + 1 + '-' + (index_two + 1)
                    )
                  "
                              :index="index_one + 1 + '-' + (index_two + 1)">
                  <template slot="title">
                    <i :class="menu_two.icon"></i>
                    <span slot="title">{{ menu_two.name }}</span>
                  </template>
                </el-menu-item>

                <!-- 二级菜单 有子集-->
                <el-submenu v-for="(menu_two, index_two) in menu_one.subset"
                            v-if="menu_two.actions"
                            :key="index_two"
                            :index="index_one + 1 + '-' + (index_two + 1)">
                  <template slot="title">
                    <i :class="menu_two.icon"></i>
                    <span slot="title">{{ menu_two.name }}</span>
                  </template>
                  <el-menu-item v-for="(menu_three, index_three) in menu_two.actions"
                                :key="index_three"
                                @click="
                      goRightDetial(
                        'three',
                        menu_three,
                        index_one +
                          1 +
                          '-' +
                          (index_two + 1) +
                          '-' +
                          index_three
                      )
                    "
                                :index="
                      index_one + 1 + '-' + (index_two + 1) + '-' + index_three
                    ">
                    <template slot="title">
                      <i :class="menu_three.icon"></i>
                      <span slot="title">{{ menu_three.name }}</span>
                    </template>
                  </el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="mp_header">
            <el-popover placement="top-start"
                        trigger="hover">
              <div class="tip">
                <ul>
                  <li><i class="el-icon-unlock"></i> 修改密码</li>
                  <li><i class="el-icon-lock"></i> 退出登陆</li>
                </ul>
              </div>
              <div class="rightIcon"
                   slot="reference">
                <i class="el-icon-user-solid"></i> 超管
                <i class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </div>
          <div class="showPage" @click="geColund">
            <i class="el-icon-s-home" style="margin-right: 3px;margin-top: 2px;"></i>
            首页
          </div>
        </el-header>
        <el-main>
          <div class="item-box"
               v-if="flagtit">
            <ul class="box pad">
              <li v-for="(item, index) in meta"
                  :key="index">
                {{ item }}
                <i class="el-icon-arrow-right"
                   v-if="index !== meta.length - 1"></i>
              </li>
            </ul>
          </div>
          <!-- v-if="goReturn" -->
          <div class="item_title"
               v-if="flagTttName">
            <span class="left"
                  @click="goBack"><i class="el-icon-arrow-left"></i> 返回</span>
            <p>|</p>
            <span>{{ titleName }}</span>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav from "../../../router/cmfNav";
export default {
  name: "page",
  data () {
    return {
      isCollapse: false,
      height: window.innerHeight,
      meta: [],
      flagtit: true,
      flagTttName: true,
      menu: [],
      index_menu: "0",
      titleName: ""
    };
  },
  methods: {
    setMenu () {
      let menu = nav[1].subset[4].actions,
        data = {
          order_type: 'desc',
          order_field: 'od',
          token: JSON.parse(this.$store.state.token).token,
        }

      nav[1].subset[4].actions = []
      nav[1].subset[4].actions.push({
        name: "资讯一级分类",
        url: "/magazineManagement/magazineManagement?type=1"
      })
      this.$api.getBoardPageList(data).then(res => {
        res.data.items.forEach(item => {
          nav[1].subset[4].actions.push({
            name: item.board_title,
            url: "/magazineManagement/magazineManagement?type=2&&uid=" + item.uid
          })
        })
        this.menu = nav

        this.getTitleBox();
        this.getTitleName();
        this.getmenu();
      })
    },

    left () {
      this.isCollapse = true;
    },

    geColund () {
      this.$router.push("/home/product");
    },

    right () {
      this.isCollapse = false;
    },

    goRightDetial (type, item, index) {
      sessionStorage.setItem("index_menu", index);
      switch (type) {
        case "one":
          this.$router.push("/homePage");
          break;
        default:
          this.$router.push(item.url);
          break;
      }
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },

    // 顶部title显示
    getTitleBox () {
      const routerArray = [
        "/DataBackup/dataBackup",
        "/DataBackup/recoverData",
        "/DataBackup/optimizationAndRepair",
        "/DataBackup/executeSQL",
        "/topicManagement/topicManagement",
        "/topicManagement/categoryDeletion",
        "/videoManagement/videoManagement",
        "/focusOnManagement/followList",
        "/Amanagement/Alist",
        "/Amanagement/commentList",
        "/magazineManagement/magazineManagement",
        "/commodityInformation/generalMerchandise",
        "/commodityInformation/knowledgeCommodity",
        "/commodityInformation/groupGoods",
        "/commodityInformation/secondKill",
        "/commodityInformation/displayProducts",
        "/commodityInformation/groupBuying",
        "/commodityInformation/auctionGoods",
        "/commodityInformation/wholesaleGoods",
        "/commodityInformation/consignmentGoods",
        "/commodityInformation/notOn",
        "/commodityInformation/rebateGoods",
        "/shopOrder/customerOrder",
        "/develop/management/backMenu",
        "/develop/management/imageMent",
        "/develop/management/textMessage",
        "/develop/management/groupMail",
        "/develop/management/taobaoConversion",
        "/develop/management/trustManagement",
        "/develop/wechat/weChatmenu",
        "/develop/log/adminLog",
        "/develop/log/taskLog",
        "/through/classify/classList",
        "/through/throughThe/management",
        "/through/throughThe/passOrder",
        "/shopOrder/knowledgeOrder",
        "/shopOrder/returnChannel",
        "/shopOrder/withdrawalApplication",
        "/commodityConsultation/sellingGoods",
        "/commodityConsultation/displayProducts",
        "/paymentMethod/collectionSettings",
        "/transactionDetails/creditDetails",
        "/transactionDetails/capitalDetails",
        "/transactionDetails/protectionDetails",
        "/through/throughThe/addManagement",
        "/setPlatform/setBasic/merchant",
        "/setPlatform/setBasic/foundational",
        "/setPlatform/setBasic/service",
        "/setPlatform/setBasic/emailPlatform",
        "/setPlatform/setBasic/setNote",
        "/setPlatform/setBasic/register",
        "/setPlatform/setBasic/scoreValue",
        "/setPlatform/setBasic/domain",
        "/setPlatform/setBasic/shopCertification",
        "/setPlatform/setBasic/setDomain",
        "/classSetting/classified",
        "/classSetting/induStandard",
        "/classSetting/jobCategory",
        "/classSetting/partTimeJob",
        "/classSetting/regional",
        "/classSetting/operation",
        "/classSetting/carSystem",
        "/classSetting/vehicleTypes",
        "/classSetting/rentalCar",
        "/classSetting/parameter",
        "/classSetting/photoAlbum",
        "/classSetting/commodity",
        "/classSetting/vipClass",
        "/classSetting/knowledgeGood",
        "/classSetting/comKnow",
        "/userProfile/userList",
        "/userProfile/rankList",
        "/userProfile/recommendedSettings",
        "/dynamicManagement/dynamicTopics",
        "/dynamicManagement/dynamicCategory",
        "/circleManagement/memberManagement",
        "/circleManagement/postManagement",
        "/circleManagement/comment",
        "/shortVideoMa/shortVideo",
        "/circleManagement/circleManagement",
        "/cloudsAndWarehouses/gatheringCommodities",
        "/cloudsAndWarehouses/warehouseGoods",
        "/luckyDraw/lotteryResults",
        "/shopMagement/shoPermissions",
        "/shopMagement/shoPermissions",
        "/shopMagement/shopList",
        "/shopMagement/starryShop",
        "/shopMagement/cloundShop",
        "/shopMagement/buyersEvaluation",
        "/shopMagement/sellerEvaluation",
        "/shopMagement/upgradeReview",
        "/shopMagement/recommend",
        "/preferentialManagement/couponManagement",
        "/preferentialManagement/pointsCollectionZone",
        "/advertisingManagement/advertisingManagement",
        "/advertisingManagement/displayed",
        "/advertisingManagement/pendingApplication",
        "/advertisingManagement/willExpire",
        "/advertisingManagement/toBeReviewed",
        "/advertisingManagement/toBeShown",
        "/advertisingManagement/customArea",
        "/shopMagement/substation",
        "/shopMagement/headOffice",
        "/PlatForm/Navigation/naviment",
        "/PlatForm/Navigation/headNaviment",
        "/PlatForm/Navigation/middleNaviment",
        "/PlatForm/Navigation/bottomNaviment",
        "/PlatForm/Navigation/messageNaviment",
        "/PlatForm/Navigation/helpNaviment",
        "/PlatForm/PageInformation/pageMangement",
        "/classSetting/jobClassify",
        "/PlatForm/SpecialMangment/shopsMap",
        "/PlatForm/SpecialMangment/webDvertising",
        "/PlatForm/SpecialMangment/mobileRotation",
        "/PlatForm/SpecialMangment/displayDvertising",
        "/PlatForm/SpecialMangment/popUpad",
        "/PlatForm/BusinessCenter/showMerchants",
        "/PlatForm/BusinessCenter/templateTobuy",
        "/PlatForm/partner/linksPage",
        "/floorMarketing/specialPage",
        "/floorMarketing/homeFloor",
        "/brandInformation/brandManagement",
        "/luckyDraw/luckyDraw",
        "/serveMent/CarpooInformation/supplyGood",
        "/serveMent/CarpooInformation/demandInfo",
        "/serveMent/CarpooInformation/busMessage",
        "/serveMent/CarpoolingOrders/customerOrder",
        "/serveMent/CarpoolingOrders/returnsChannel",
        "/serveMent/CarpoolingVIP/commInfoVip",
        "/serveMent/CarpoolingVIP/taskInfoVip",
        "/serveMent/CarpoolingVIP/custInfoVip",
        "/eatAndDrink/classificationOfFood",
        "/eatAndDrink/classificationOfFoodVip",
        "/eatAndDrink/foodAndDrink",
        "/eatAndDrink/drinkDemand",
        "/eatAndDrink/foodAndDrinkVIP",
        "/eatAndDrink/drinkDemandVIP",
        "/eatAndDrink/guestBook",
        "/eatAndDrink/customerOrder",
        "/eatAndDrink/returnChannel",
        "/eatAndDrink/customerOrderVIP", //----
        "/play/classificationOfFood",
        "/play/classificationOfFoodVip",
        "/play/foodAndDrink",
        "/play/drinkDemand",
        "/play/foodAndDrinkVIP",
        "/play/drinkDemandVIP",
        "/play/guestBook",
        "/play/customerOrder",
        "/play/returnChannel",
        "/play/customerOrderVIP", //----
        "/accessories/classificationOfFood",
        "/accessories/classificationOfFoodVip",
        "/accessories/foodAndDrink",
        "/accessories/drinkDemand",
        "/accessories/foodAndDrinkVIP",
        "/accessories/drinkDemandVIP",
        "/accessories/guestBook",
        "/accessories/customerOrder",
        "/accessories/returnChannel",
        "/accessories/customerOrderVIP", //----beauty
        "/beauty/classificationOfFood",
        "/beauty/classificationOfFoodVip",
        "/beauty/foodAndDrink",
        "/beauty/drinkDemand",
        "/beauty/foodAndDrinkVIP",
        "/beauty/drinkDemandVIP",
        "/beauty/guestBook",
        "/beauty/customerOrder",
        "/beauty/returnChannel",
        "/beauty/customerOrderVIP",
        "/departmentStores/customerOrderVIP", //----
        "/departmentStores/classificationOfFood",
        "/departmentStores/classificationOfFoodVip",
        "/departmentStores/foodAndDrink",
        "/departmentStores/drinkDemand",
        "/departmentStores/foodAndDrinkVIP",
        "/departmentStores/drinkDemandVIP",
        "/departmentStores/guestBook",
        "/departmentStores/customerOrder",
        "/departmentStores/returnChannel",
        "/departmentStores/customerOrderVIP", //----lieIdle
        "/lieIdle/classificationOfFood",
        "/lieIdle/classificationOfFoodVip",
        "/lieIdle/foodAndDrink",
        "/lieIdle/drinkDemand",
        "/lieIdle/foodAndDrinkVIP",
        "/lieIdle/drinkDemandVIP",
        "/lieIdle/guestBook",
        "/lieIdle/customerOrder",
        "/lieIdle/returnChannel",
        "/lieIdle/customerOrderVIP", //----healthy
        "/healthy/classificationOfFood",
        "/healthy/classificationOfFoodVip",
        "/healthy/foodAndDrink",
        "/healthy/drinkDemand",
        "/healthy/foodAndDrinkVIP",
        "/healthy/drinkDemandVIP",
        "/healthy/guestBook",
        "/healthy/customerOrder",
        "/healthy/returnChannel",
        "/healthy/customerOrderVIP", //----life
        "/life/classificationOfFood",
        "/life/classificationOfFoodVip",
        "/life/foodAndDrink",
        "/life/drinkDemand",
        "/life/foodAndDrinkVIP",
        "/life/drinkDemandVIP",
        "/life/guestBook",
        "/life/customerOrder",
        "/life/returnChannel",
        "/life/customerOrderVIP", //----houseProperty
        "/houseProperty/classificationOfFood",
        "/houseProperty/classificationOfFoodVip",
        "/houseProperty/foodAndDrink",
        "/houseProperty/drinkDemand",
        "/houseProperty/foodAndDrinkVIP",
        "/houseProperty/drinkDemandVIP",
        "/houseProperty/guestBook",
        "/houseProperty/customerOrder",
        "/houseProperty/returnChannel",
        "/houseProperty/customerOrderVIP", //----automobile
        "/automobile/classificationOfFood",
        "/automobile/classificationOfFoodVip",
        "/automobile/foodAndDrink",
        "/automobile/drinkDemand",
        "/automobile/foodAndDrinkVIP",
        "/automobile/drinkDemandVIP",
        "/automobile/guestBook",
        "/automobile/customerOrder",
        "/automobile/returnChannel",
        '/shopMagement/shopType',
        '/shopMagement/shopNav',
        '/shopMagement/shopDiction',
        "/automobile/customerOrderVIP" //----
      ];

      this.flagtit = routerArray.indexOf(this.$route.path) > -1 ? true : false;
      if (this.$route.meta.length) {
        this.meta = this.$route.meta;
      }
    },

    // 顶部t返回显示
    getTitleName () {
      const routerArray = [
        "/magazineManagement/editMagazineManagement",
        "/magazineManagement/addMagazineManagement",
        "/commodityInformation/editGeneralMerchandise",
        "/commodityInformation/releaseGeneralMerchandise",
        "/commodityInformation/editknowledgeCommodity",
        "/commodityInformation/releaseknowledgeCommodity",
        "/commodityInformation/editgroupGoods",
        "/commodityInformation/releasegroupGoods",
        "/commodityInformation/editsecondKil",
        "/commodityInformation/editdisplayProducts",
        "/commodityInformation/editauctionGoods",
        "/commodityInformation/editwholesaleGoods",
        "/commodityInformation/releasewholesaleGoods",
        "/commodityInformation/editnotOn",
        "/circleManagement/editpostManagement",
        "/circleManagement/editCircleManagement",
        "/preferentialManagement/editcouponManagement",
        "/preferentialManagement/editpointsCollectionZone",
        "/advertisingManagement/editadvertisingManagement",
        "/advertisingManagement/editdisplayed",
        "/advertisingManagement/editpendingApplication",
        "/advertisingManagement/editwillExpire",
        "/advertisingManagement/edittoBeReviewed",
        "/brandInformation/editbrandManagement",
        "/luckyDraw/editluckyDraw"
      ];

      this.flagTttName =
        routerArray.indexOf(this.$route.path) > -1 ? true : false;

      if (this.$route.query.nameType) {
        this.titleName = this.$route.query.nameType;
      }
    },

    goBack () {
      this.$router.go(-1);
    },

    getmenu () {
      if (sessionStorage.getItem("index_menu"))
        this.index_menu = sessionStorage.getItem("index_menu") + "";
      nav.forEach((item, index) => {
        if (item.subset) {
          item.subset.forEach((item_two, index_t) => {
            if (item_two.actions) {
              item_two.actions.forEach((item_f, index_f) => {
                if (item_f.url === this.$route.path) {
                  this.index_menu =
                    index + 1 + "-" + (index_t + 1) + "-" + index_f;
                }
              });
            } else {
              if (item_two.url === this.$route.path) {
                this.index_menu = index + 1 + "-" + (index_t + 1);
              }
            }
          });
        } else {
          if (item.url === this.$route.path) {
            this.index_menu = index + 1;
          }
        }
      });
    }
  },

  mounted () {
    this.setMenu()


  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.getTitleBox();
        this.getTitleName();
        this.getmenu();
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  /* width: 100% !important; */
  border: none !important;
}
</style>

<style lang="scss" scoped>
.pageHome {
  // overflow: hidden !important;
}

.item_title {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 10px;
  > p {
    margin: 0 10px;
  }
  .left {
    cursor: pointer;
  }
}
.item-box {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  .box {
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    color: #606266;
    cursor: text;
    display: flex;
    align-items: center;
    > i {
      color: #c0c4cc;
      margin-right: 10px;
    }
    > li {
      margin-right: 10px;
    }
  }
}

.is-vertical {
  display: flex;
  flex-direction: column;
  > header {
    width: 100%;
    height: 60px;
  }
}

.el-main {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  font-size: 14px;
  color: #606266;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}
.tip {
  width: 100%;
  height: 100%;
  > ul {
    width: 100%;
    height: 100%;
    > li {
      cursor: pointer;
      line-height: 30px;
    }
  }
}
.mp_header {
  width: 100%;
  height: 100%;
}

.mp_header {
  width: auto;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  margin-right: 20px;
}

.showPage{
  width: auto;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  margin-right: 20px;
  &:hover{
    cursor: pointer;
    
  }
}

.all_mp {
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: #2f3e69;

  // border-right: solid #ccc 1px;
  // background-color: #424f63 !important;
  .tit {
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .item {
      height: 60px;
      // width: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      > div {
        width: 30px;
        > img {
          width: 100%;
        }
      }
    }
  }
  // .el-menu,
  // .el-submenu__title {
  //   color: #fff;
  //   background-color: #424f63 !important;
  //   border: 0;
  // }
  .menu {
    // overflow: auto;
    flex: 1;
    border-right: 1px solid #424f63;
  }

  // .el-menu-item.is-active {
  //   color: rgb(101, 206, 167);
  //   background-color: rgb(53, 63, 79);
  // }

  // .el-menu-item :hover {
  //   color: rgb(101, 206, 167);
  //   background-color: rgb(53, 63, 79);
  // }
}

.el-header{
  background: #2f3e69;
}

.el-aside{
  // overflow: hidden;
}
</style>
