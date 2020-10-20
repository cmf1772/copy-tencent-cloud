<template>
  <div class="Classification flexColumn">
    <div class="flexJC">
      <p class="text">页面列表</p>
    </div>
    <div style="flex: 1"
         class="conent_box flexColumn">
      <div class="c_box ">
        <div class="flexJC ">
          <div>
            <el-select v-model="all"
                       size="mini"
                       style="width: 100px"
                       placeholder="请选择">
              <el-option label="全部门店"
                         value="1"></el-option>
              <el-option label="智慧临售"
                         value="2"></el-option>
            </el-select>
            <el-select v-model="grade"
                       size="mini"
                       style="width: 100px"
                       placeholder="请选择">
              <el-option label="评价等级"
                         value="1"></el-option>
              <el-option label="好评"
                         value="2"></el-option>
              <el-option label="中评"
                         value="3"></el-option>
              <el-option label="差评"
                         value="4"></el-option>
            </el-select>
          </div>
          <el-input placeholder="请输入内容"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="商品名称"
                         value="1"></el-option>
              <el-option label="订单编号"
                         value="2"></el-option>
              <el-option label="商品名称"
                         value="3"></el-option>
              <el-option label="用户昵称"
                         value="4"></el-option>
              <el-option label="用户昵称"
                         value="5"></el-option>
              <el-option label="收货人姓名"
                         value="6"></el-option>
              <el-option label="收货人手机号"
                         value="7"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="mt">
          <el-select v-model="evaluate"
                     size="mini"
                     style="width: 100px"
                     placeholder="请选择">
            <el-option label="评价方式"
                       value="1"></el-option>
            <el-option label="主动评论"
                       value="2"></el-option>
            <el-option label="自动评论"
                       value="3"></el-option>
          </el-select>
          <el-select v-model="evaluate_content"
                     size="mini"
                     style="width: 100px"
                     placeholder="请选择">
            <el-option label="评论内容"
                       value="1"></el-option>
            <el-option label="仅文字"
                       value="2"></el-option>
            <el-option label="有图"
                       value="3"></el-option>
            <el-option label="有视频"
                       value="4"></el-option>
          </el-select>
          <el-select v-model="reply"
                     size="mini"
                     style="width: 100px"
                     placeholder="请选择">
            <el-option label="全部回复"
                       value="1"></el-option>
            <el-option label="已回复"
                       value="2"></el-option>
            <el-option label="未回复"
                       value="3"></el-option>
          </el-select>
        </div>

        <div class="mt">
          <el-select v-model="selected"
                     size="mini"
                     style="width: 100px"
                     placeholder="请选择">
            <el-option label="精选状态"
                       value="1"></el-option>
            <el-option label="未精选"
                       value="2"></el-option>
            <el-option label="已精选"
                       value="3"></el-option>
          </el-select>
          <el-select v-model="display"
                     size="mini"
                     style="width: 100px"
                     placeholder="请选择">
            <el-option label="显示状态"
                       value="1"></el-option>
            <el-option label="已隐藏"
                       value="2"></el-option>
            <el-option label="显示中"
                       value="3"></el-option>
          </el-select>
        </div>

        <div class="mt">
          <el-button size="mini">批量设置</el-button>
          <el-button size="mini">导出</el-button>
        </div>
      </div>
      <div class="table"
           style="flex: 1">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="评论内容"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="商品信息">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="270"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">投放</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
        <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Classification',

  data () {
    return {
      sleValue: '1',
      all: '1',
      grade: '1',
      evaluate: '1',
      evaluate_content: '1',
      reply: '1',
      selected: '1',
      display: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>