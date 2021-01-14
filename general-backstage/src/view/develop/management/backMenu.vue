<template>
  <div :style="{ height: heights }"
       class="b_page">
    <div>
      <el-table :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                lazy
                :load="load"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                default-expand-all
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
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 180 + "px",
      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    };
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$api.getMenuPageList({
        token: JSON.parse(this.$store.state.token).token,
        order_type: "desc",
        order_field: "uid",
      }).then(res => {
        this.tableData = res.data.items
        this.tableData.forEach(item => {
          item['hasChildren'] = true
        })
      })
    },
    handleEdit () { },
    handleDelete () { },
    load (tree, treeNode, resolve) {
      // this.$api.getMenuAuthList({
      //   group_id: tree.uid,
      //   token: JSON.parse(this.$store.state.token).token
      // }).then(res => {
      //   // setTimeout(() => {
      //   //   debugger
      //   //   resolve([res.data])
      //   // }, 1000)

      // })

    }
  }
};
</script>

<style lang="scss" scoped>
.b_page {
  overflow: auto;
}
</style>
