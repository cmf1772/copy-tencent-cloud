<template>
  <div class="b_page" :style="{ height: heights }">
    <div class="b_pageInter">
      <el-table :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="uid"
                lazy
                :load="childrenData"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                :max-height="tableHeight">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column prop="menu_name"
                         label="菜单名称"
                         sortable
                         width="180">
        </el-table-column>
        <el-table-column prop="menu_url"
                         label="地址"> </el-table-column>
        <el-table-column prop="address"
                         label="添加菜单">
          <template>
            <el-button type="text">添加菜单</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="text"
                       style="color: #f00"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalData">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [],
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      tableData: [],
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      props: { 
        checkStrictly: true, 
        emitPath: false,
        lazy: true, 
        value: 'uid', 
        label: 'category_name', 
        children: 'children',
        lazyLoad: ((node, resolve) => {
          this.$newApi.getSubList({
            uid: node.data.uid,
            token: JSON.parse(this.$store.state.token).token,
          }).then(val => {
            resolve(val.data)
          })
        })
      },
    };
  },
  mounted () {
    var inHeight = document.getElementsByClassName("b_pageInter");
    this.tableHeight =
      window.innerHeight - 100 - inHeight[0].clientHeight + "px";
    this.create()
  },
  methods: {
    create () {
      this.$newApi.getMenuList({
        menu_id:'0',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data
        res.data.forEach(item => {
          item.hasChildren = true
        })
        this.tableData = res.data
      })
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {  
      this.page_size = val
      this.create()
    },
    handleEdit () { },
    handleDelete () { },
    childrenData (tree, treeNode, resolve) {
      this.$newApi.getMenuAuthList({
        group_id: tree.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(val => {
        val.data.forEach(item => {
          item.hasChildren = true
        })
        resolve(val.data)
      })
    },
    dataConvert(obj) {
      // let data = []
      // if(JSON.stringify(obj) != "{}") {
      //     for(var i in obj) {
      //         var uu = {
      //             menu_id: obj[i].menu_id,
      //             menu_name: obj[i].menu_name,
      //             menu_order: obj[i].menu_order,
      //             menu_url: obj[i].menu_url,
      //             uid: obj[i].uid,
      //             hasChildren: true,
      //             children: this.dataConvert(obj[i].sub)
      //         }
      //         data.push(uu);
      //     }
      // }
      // this.arr.push(data);
      // console.log(this.arr)
    }
  }
};
</script>

<style lang="scss" scoped>
.b_page {
  overflow: auto;
}
</style>
