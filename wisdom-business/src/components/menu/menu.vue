<template>
  <div class="menu">
    <div class="titleimg">
      <img src="@/assets/img/favicon.png"
           alt="">
    </div>
    <el-menu :default-active="index_menu"
             class="el-menu-vertical-demo"
             background-color="#22242f"
             :unique-opened='true'
             active-text-color="#fff"
             text-color="#757993"
             :collapse="isCollapse">
      <div v-for="(menu_one, index_one) in menuData"
           :key="index_one">
        <!-- 一级菜单  没有子集菜单-->
        <el-menu-item v-if="!menu_one.children"
                      @click="goRightDetial(menu_one, index_one + 1 + '')"
                      :index="index_one + 1 + ''">
          <i :class="menu_one.icon"></i>
          <span>{{menu_one.text}}</span>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-submenu v-if="menu_one.children"
                    @click="goRightDetial(menu_one, index_one + 1 + '')"
                    :index="index_one + 1 + ''">
          <template slot="title">
            <i :class="menu_one.icon"></i>
            <span slot="title">{{menu_one.text}}</span>
          </template>
          <el-menu-item v-for="(menu_two, index_two) in menu_one.children"
                        :key="index_two"
                        @click="goRightDetial(menu_two, index_one + 1 + '-' +  (index_two + 1))"
                        :index="index_one + 1 + '-' +  (index_two + 1)">
            <template slot="title">
              <i :class="menu_two.icon"></i>
              <span slot="title">{{menu_two.text}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu_da',

  props: ['menuData'],

  data () {
    return {
      activeIndex: 0,
      isCollapse: true,
      index_menu: '0',
    }
  },

  methods: {
    changeRight (index, item) {
      this.activeIndex = index
      this.$router.push(item.path)
    },

    goRightDetial (res, keyPath) {
      console.log(res, keyPath)
      this.$router.push(res.path)
      sessionStorage.setItem('index_menu', keyPath)
    },

    getmenu () {
      if (sessionStorage.getItem('index_menu')) this.index_menu = sessionStorage.getItem('index_menu') + ''
      this.menuData.forEach((item, index) => {
        if (item.subset) {
          item.subset.forEach((item_two, index_t) => {
            if (item_two.actions) {
              item_two.actions.forEach((item_f, index_f) => {
                if (item_f.url === this.$route.path) {
                  this.index_menu = (index + 1) + '-' + (index_t + 1) + '-' + index_f
                }
              })
            } else {
              if (item_two.url === this.$route.path) {
                this.index_menu = (index + 1) + '-' + (index_t + 1)
              }
            }
          })
        } else {
          if (item.url === this.$route.path) {
            this.index_menu = index + 1
          }
        }
      })
    }
  },

  mounted () {
    this.getmenu()
  }
}
</script>

<style lang="scss">
.el-menu--vertical .el-menu--popup-right-start {
  max-height: 800px;
  overflow: auto;
}
.el-menu-vertical-demo {
  width: 120px !important;
  .el-submenu__icon-arrow {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.titleimg {
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 40px;
    height: 40px;
  }
}
.menuItem {
  width: 100%;
  height: 42px;
  display: flex;
  font-size: 14px;
  color: #757993;
  font-weight: 400;
  cursor: pointer;
  div {
    height: 42px;
    position: absolute;
    line-height: 42px;
    width: 120px;
    text-align: center;
    i {
      margin-right: 4px;
    }
  }
}

.active {
  color: #ffffff;
  :after {
    content: "";
    width: 4px;
    background: #fff;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    top: 25%;
    bottom: 25%;
  }
}
</style>