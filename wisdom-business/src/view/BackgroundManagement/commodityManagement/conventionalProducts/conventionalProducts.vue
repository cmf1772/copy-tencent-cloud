<template>
  <div class="notGoods">
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        添加分类
      </el-button>
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  row-key="id"
                  :load="load"
                  ref="table"
                  lazy
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="category_name"
                           label="分类名称"
                           width="180">

          </el-table-column>
          <el-table-column prop="category_rank"
                           show-overflow-tooltip
                           label="顺序">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="copyCategoryItem(scope.$index, scope.row)">复制</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delCategoryItem(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="page_size"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notGoods',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      page_size: 10,
      total: 1, //总页数
    }
  },

  mounted () {
    this.getCgCategoryPageList()
  },

  methods: {
    load (tree, treeNode, resolve) {
      console.log(tree, treeNode)
      this.$api.getSubList({
        uid: tree.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        res.data.forEach(item => {
          item['hasChildren'] = true
          item['id'] = item.uid
          item['parent'] = tree.uid
        })
        resolve(res.data)
      })
    },

    // 分装删除
    delCategoryItem (i, r) {
      console.log(this.tableData)
      this.$api.delCategoryItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getCgCategoryPageList()
        this.deleteLazyTableItem(r)
      })
    },

    deleteLazyTableItem (item) {
      const store = this.$refs.table.store;
      if (item.parent != -1) {
        let parentRow = store.states.data.find(child => child.id == item.parent);
        if (!parentRow) {
          const keys = Object.keys(store.states.lazyTreeNodeMap);
          for (let i = 0; i < keys.length; i++) {
            parentRow = store.states.lazyTreeNodeMap[keys[i]].find(child => child.id == item.parent);
            if (parentRow) {
              break;
            }
          }
        }
        parentRow.childrenCount--;
        const parent = store.states.lazyTreeNodeMap[item.parent];
        const index = parent.findIndex(child => child.id == item.id);
        parent.splice(index, 1);
      }
      else {
        const parent = store.states.data;
        const index = parent.findIndex(child => child.id == item.id);
        parent.splice(index, 1);
      }
    },

    copyCategoryItem (i, r) {
      this.$api.copyCategoryItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: '复制成功',
          type: 'success'
        });
        res.data['hasChildren'] = true
        res.data['id'] = res.data.uid
        res.data['parent'] = r.uid
        this.getCgCategoryPageList()
        this.findNewParent(r.uid, res.data)
      })
    },

    // 查找新的父节点及数据后，添加子节点
    findNewParent (parentId, newItemData) {
      const store = this.$refs.table.store;
      // 首先在最外层里面找
      let parentRow = store.states.data.find(item => item.id === parentId);
      if (parentRow) {
        parentRow.childrenCount++;
      }
      // 不在最外层
      else {
        const keys = Object.keys(store.states.lazyTreeNodeMap);
        for (let i = 0; i < keys.length; i++) {
          parentRow = store.states.lazyTreeNodeMap[keys[i]].find(item => item.id == parentId);
          if (parentRow) {
            break;
          }
        }
        if (parentRow) {
          parentRow.childrenCount++;
        }
      }
      const parentTreeNode = store.states.treeData[parentId];
      this.addLazyTableItemToParent(parentTreeNode, parentId, newItemData);
    },

    // 把数据加到父级节点上去
    addLazyTableItemToParent (parentTreeNode, parentId, newItemData) {
      debugger
      const store = this.$refs.table.store;
      // 如果在已加载过的节点的子节点中
      if (parentTreeNode) {
        // 如果该节点已加载
        if (parentTreeNode.loaded) {
          store.states.lazyTreeNodeMap[parentId].push(newItemData);
        }
      }
    },


    getCgCategoryPageList () {
      this.$api.getCgCategoryPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.items.forEach(item => {
          item['hasChildren'] = true
          item['id'] = item.uid
        })
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    add () {
      this.$router.push('/conventionalProducts/editConventional?nameType=新建商品分类')

    },

    edit (i, r) {
      this.$router.push({
        path: '/conventionalProducts/editConventional',
        query: {
          uid: r.uid
        }
      })
    },

    look () {
      this.$router.push('/marketHome/details')
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getCgCategoryPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getCgCategoryPageList()
    },
  }
}
</script>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.notGoods {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
