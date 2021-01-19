<template>
  <div class="menus">
    <p style=" font-size: 18px;margin-left: 22px"
       v-if="!isCollapse">{{topMenuName}}</p>
    <el-menu :default-active="index_menu"
             class="el-menu-vertical-demo"
             background-color="#1e222d"
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
          <span v-if="!isCollapse">{{menu_one.text}}</span>
        </el-menu-item>
        <!-- 一级菜单 -->
        <el-submenu v-if="menu_one.children"
                    @click="goRightDetial(menu_one, index_one + 1 + '')"
                    :index="index_one + 1 + ''">
          <template slot="title">
            <i :class="menu_one.icon"></i>
            <span slot="title"
                  v-if="!isCollapse">{{menu_one.text}}</span>
          </template>
          <el-menu-item v-for="(menu_two, index_two) in menu_one.children"
                        :key="index_two"
                        @click="goRightDetial(menu_two, index_one + 1 + '-' +  (index_two + 1))"
                        :index="index_one + 1 + '-' +  (index_two + 1)">
            <template slot="title">
              <i :class="menu_two.icon"></i>
              <span slot="title"
                    v-if="!isCollapse">{{menu_two.text}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
    <div class="bottoms">
      <i class="el-icon-s-fold s icon"
         v-if="!isCollapse"
         @click="shrink"></i>
      <i class="el-icon-s-unfold s icon"
         @click="shrink"
         v-if="isCollapse"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu_da',

  props: ['menuData', 'topMenuName'],

  data () {
    return {
      activeIndex: 0,
      isCollapse: false,
      index_menu: '0',
    }
  },

  methods: {
    shrink () {
      this.isCollapse = !this.isCollapse
    },

    changeRight (index, item) {
      this.activeIndex = index
      this.$router.push(item.path)
    },

    goRightDetial (res, keyPath) {
      if (res.type) {
        this.$router.push({
          path: res.path,
          query: {
            'type': res.type
          }
        })
      } else {
        this.$router.push(res.path)
      }
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
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (sessionStorage.getItem('index_menu')) this.index_menu = sessionStorage.getItem('index_menu') + ''
      },
      // 深度观察监听
      deep: true
    }
  },
}
</script>

<style lang="scss">
.el-menu-vertical-demo {
  overflow: auto;
  border-right: solid 1px #1e222d;
  flex: 1;
}
</style>

<style lang="scss" scoped>
.menus {
  box-sizing: border-box;
  padding-top: 30px;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.bottoms {
  height: 70px;
  box-sizing: border-box;
  padding-top: 20px;
  .icon {
    float: right;
    margin-right: 20px;
  }
}
</style>