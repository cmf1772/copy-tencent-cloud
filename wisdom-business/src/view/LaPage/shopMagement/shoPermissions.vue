<template>
  <div class="permiss_sion" :style="{ height: heights }">
    <el-table :data="tableData" style="width: 100%" :height="tableHeight">
      <el-table-column prop="explain" label="说明" width="180">
      </el-table-column>
      <el-table-column prop="common" label="普通商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.common"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="foster" label="扶植商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.foster"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="standard" label="标准商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.standard"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="expand" label="拓展商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.expand"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="flagship" label="旗舰商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.flagship"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="knowledge" label="知识型商铺">
        <template slot-scope="scope">
          <el-input v-model="scope.row.knowledge"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="bot_btn">
      <el-button type="primary" size="medium">确定</el-button>
      <el-button size="medium">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 210 + "px",
      tableData: [
        {
          explain: "升级费用(元)",
          common: "",
          foster: "",
          standard: "",
          expand: "",
          flagship: "",
          knowledge: ""
        },
        {
          explain: "商品数量(个)",
          common: "",
          foster: "",
          standard: "",
          expand: "",
          flagship: "",
          knowledge: ""
        },
        {
          explain: "商品空间(MB)",
          common: "",
          foster: "",
          standard: "",
          expand: "",
          flagship: "",
          knowledge: ""
        },
        {
          explain: "页面数量(页)",
          common: "",
          foster: "",
          standard: "",
          expand: "",
          flagship: "",
          knowledge: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.permiss_sion {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  height: calc(100% - 50px);
  background: #ffffff;
  .bot_btn {
    margin-top: 10px;
    text-align: center;
  }
}
</style>
