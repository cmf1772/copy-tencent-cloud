<template>
  <div class="pageHome">
    <el-container>
      <el-aside width="auto">
        <div class="all_mp"
             :style="{'height': + height + 'px'}">
          <div class="tit">
            <div class="item">
              <div>
                <img src="../../assets/img/favicon.png"
                     @click="right"
                     alt="">
              </div>
              <span v-if="!isCollapse"
                    @click="geColund">服务商管理后台</span>
            </div>
            <i class="el-icon-s-fold"
               v-if="!isCollapse"
               @click="left"></i>
          </div>
          <div class="menu">
            <el-menu :default-active="index_menu"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     background-color="#424f63"
                     text-color="#fff"
                     :unique-opened='true'
                     active-text-color="rgb(101, 206, 167)"
                     @close="handleClose"
                     :collapse="isCollapse">
              <el-menu-item index="0"
                            @click="goRightDetial('one')">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </template>
              </el-menu-item>

              <!-- 一级菜单 -->
              <el-submenu v-for="(menu_one, index_one) in menu"
                          :index="index_one + 1 + ''"
                          :key="index_one">
                <template slot="title">
                  <i :class="menu_one.icon"></i>
                  <span slot="title">{{menu_one.name}}</span>
                </template>
                <!-- 二级菜单  没有子集菜单-->
                <el-menu-item v-for="(menu_two, index_two) in menu_one.subset"
                              v-if="!menu_two.actions"
                              :key="index_two"
                              @click="goRightDetial('two', menu_two, index_one + 1 + '-' + (index_two + 1))"
                              :index="index_one + 1 + '-' + (index_two + 1)">
                  <template slot="title">
                    <i :class="menu_two.icon"></i>
                    <span slot="title">{{menu_two.name}}</span>
                  </template>
                </el-menu-item>

                <!-- 二级菜单 有子集-->
                <el-submenu v-for="(menu_two, index_two) in menu_one.subset"
                            v-if="menu_two.actions"
                            :key="index_two"
                            :index="index_one + 1 + '-' +  (index_two + 1)">
                  <template slot="title">
                    <i :class="menu_two.icon"></i>
                    <span slot="title">{{menu_two.name}}</span>
                  </template>
                  <el-menu-item v-for="(menu_three, index_three) in menu_two.actions"
                                :key="index_three"
                                @click="goRightDetial('three', menu_three, index_one + 1 + '-' +  (index_two + 1) + '-' + index_three)"
                                :index="index_one + 1 + '-' +  (index_two + 1) + '-' + index_three">
                    <template slot="title">
                      <i :class="menu_three.icon"></i>
                      <span slot="title">{{menu_three.name}}</span>
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
                  <li>
                    <i class="el-icon-unlock"></i> 修改密码
                  </li>
                  <li>
                    <i class="el-icon-lock"></i> 退出登陆
                  </li>
                </ul>
              </div>
              <div class="rightIcon"
                   slot="reference">
                <i class="el-icon-user-solid"></i> 超管 <i class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </div>
        </el-header>
        <el-main>
          <div class="item-box"
               v-if="flagtit">
            <ul class="box pad">
              <li v-for="(item, index) in meta"
                  :key="index">
                {{item}}
                <i class="el-icon-arrow-right"
                   v-if="index !== meta.length - 1"></i>

              </li>
            </ul>
          </div>
          <!-- v-if="goReturn" -->
          <div class="item_title"
               v-if="flagTttName">
            <span class="left"
                  @click="goBack"><i class="el-icon-arrow-left"></i>
              返回</span>
            <p>|</p>
            <span>{{titleName}}</span>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav from '../../router/nav'
export default {
  name: 'page',
  data () {
    return {
      isCollapse: false,
      height: window.innerHeight,
      meta: [],
      flagtit: true,
      flagTttName: true,
      menu: nav,
      index_menu: '0',
      titleName: ''
    };
  },
  methods: {
    left () {
      this.isCollapse = true
    },

    geColund () {
      this.$router.push('/home/product')
    },

    right () {
      this.isCollapse = false
    },

    goRightDetial (type, item, index) {
      sessionStorage.setItem('index_menu', index)
      switch (type) {
        case 'one':
          this.$router.push('/homePage')
          break;
        default:
          this.$router.push(item.url)
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
        '/provider/list',
        '/product/list',
        '/product/category/list',
        '/information/list',
        '/information/type/list',
        '/group/list',
        '/device/list',
        '/driver/list',
        '/driverAttribute/list',
        '/pointAttribute/list',
        '/driverInfo/list',
        '/profile/list',
        '/point/list',
        '/pointInfo/list',
        '/admin/list',
        '/role/list',
        '/menu/list'
      ]
      this.flagtit = routerArray.indexOf(this.$route.path) > -1 ? true : false
      if (this.$route.meta.length) {
        this.meta = this.$route.meta
      }
    },

    // 顶部t返回显示
    getTitleName () {
      const routerArray = [
        '/provider/add',
        '/product/category/edit',
        '/information/edit',
        '/information/type/edit',
        '/group/edit',
        '/device/edit',
        '/driver/edit',
        '/driverAttribute/edit',
        '/pointAttribute/edit',
        '/driverInfo/edit',
        '/profile/edit',
        '/point/edit',
        '/pointInfo/edit',
        '/admin/edit',
        '/role/edit',
        '/role/menus',
        '/menu/edit'
      ]

      this.flagTttName = routerArray.indexOf(this.$route.path) > -1 ? true : false

      if (this.$route.query.nameType) {
        this.titleName = this.$route.query.nameType
      }
    },

    goBack () {
      this.$router.go(-1);
    },
  },

  mounted () {
    this.getTitleBox()
    this.getTitleName()
    if (sessionStorage.getItem('index_menu')) this.index_menu = sessionStorage.getItem('index_menu') + ''
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.getTitleBox()
        this.getTitleName()
      },
      // 深度观察监听
      deep: true
    }
  },
}
</script>

<style >
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
  color: #606266;
  font-size: 14px;
  margin-right: 20px;
}

.all_mp {
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: #424f63;

  // border-right: solid #ccc 1px;
  // background-color: #424f63 !important;
  .tit {
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .item {
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
</style>
