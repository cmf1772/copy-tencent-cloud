<template>
  <div class="menu" :style="{ height: heights }">
    <div class="man_top">
      <el-button type="primary"
                 size="medium"
                 @click="newToen">保存</el-button>
      <el-button type="primary"
                 size="medium"
                 @click="del">删除菜单</el-button>
    </div>
    <div class="table_bottom">
      <div class="flex">
        <el-table
          :span-method="objectSpanMethod"
          style="width: 100%"
          :max-height="tableHeight"
          :data="tableData1"
        > 
          <el-table-column label="一级菜单1" align="center">
            <el-table-column align="center" label="名称" prop="pName"> 
              <template slot-scope="scope">
                <el-input v-model="scope.row.pName"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="pUrl" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.pUrl"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="二级菜单1" align="center">
            <el-table-column prop="name" align="center" label="名称">
              <template slot-scope="scope">
                <el-input v-model="scope.row.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="url" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.url"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-table
          :span-method="objectSpanMethod"
          style="width: 100%"
          :max-height="tableHeight"
          :data="tableData2"
        > 
           <el-table-column label="一级菜单1" align="center">
            <el-table-column align="center" label="名称" prop="pName"> 
              <template slot-scope="scope">
                <el-input v-model="scope.row.pName"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="pUrl" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.pUrl"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="二级菜单1" align="center">
            <el-table-column prop="name" align="center" label="名称">
              <template slot-scope="scope">
                <el-input v-model="scope.row.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="url" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.url"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-table
          :span-method="objectSpanMethod"
          style="width: 100%"
          :max-height="tableHeight"
          :data="tableData3"
        > 
          <el-table-column label="一级菜单1" align="center">
            <el-table-column align="center" label="名称" prop="pName"> 
              <template slot-scope="scope">
                <el-input v-model="scope.row.pName"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="pUrl" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.pUrl"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="二级菜单1" align="center">
            <el-table-column prop="name" align="center" label="名称">
              <template slot-scope="scope">
                <el-input v-model="scope.row.name"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="url" align="center" label="链接">
              <template slot-scope="scope">
                <el-input v-model="scope.row.url"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",

  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 180 + "px",
      name: "",
      tableData1: [],
      tableData2: [],
      tableData3: []
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getWxMenuList({  
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.menu.menu.button.forEach((item, index) => {
          if(item.sub_button !== []) {
            let arr = []
            item.sub_button.forEach((itm, idx) => {
              itm.pName = item.name
              arr.push(itm)
            })
            if(index == 0) {
              this.tableData1 = arr
            } else if(index == 1) {
              this.tableData2 = arr
            } else if(index == 2) {
              this.tableData3 = arr
            }
          }
          else {
            let tableData =  [{},{},{},{},{}]
            tableData.forEach((im, ix) => {
              im.url = item.url ? item.url : ''
              im.name = item.name
            })
            if(index == 0) {
              this.tableData1 = tableData
            } else if(index == 1) {
              this.tableData2 = tableData
            } else if(index == 2) {
              this.tableData3 = tableData
            }
          }
        })
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        if (rowIndex === 0) {
          return {
            rowspan: 5,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    del() {
      this.$newApi.delWxMenuItem({  
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    newToen() {
      let obj1 = {
        name: '',
        sub_button: []
      }
      obj1.name = this.tableData1[0].pName
      if(this.tableData1[0].pUrl != undefined) {
        obj1.url = this.tableData1[0].pUrl
      }
      this.tableData1.forEach((item, index) => {
        let objs = {
          name: item.name,
          type: item.type,
          url: item.url
        }
        obj1.sub_button.push(objs)
      })

      let obj2 = {
        name: '',
        sub_button: []
      }
      obj2.name = this.tableData2[0].pName
      if(this.tableData2[0].pUrl != undefined) {
        obj2.url = this.tableData2[0].pUrl
      }
      this.tableData2.forEach((item, index) => {
        let objs = {
          name: item.name,
          type: item.type,
          url: item.url
        }
        obj2.sub_button.push(objs)
      })

      let obj3 = {
        name: '',
        sub_button: []
      }
      obj3.name = this.tableData3[0].pName
      if(this.tableData3[0].pUrl != undefined) {
        obj3.url = this.tableData3[0].pUrl
      }
      this.tableData3.forEach((item, index) => {
        let objs = {
          name: item.name,
          type: item.type,
          url: item.url
        }
        obj3.sub_button.push(objs)
      })
      var object = {button: [obj1, obj2, obj3]}
      this.$newApi.addMenuItem({
        json_menu: JSON.stringify(object),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .man_top{
    padding: 10px 0;
    background: #fff;
    text-align: right;
    .el-button{
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    overflow: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
