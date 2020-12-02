<template>
  <div class="rule">
    <p class="text">积分权益</p>
    <div class="flexJC conent_box"
         style="padding: 30px 0;">
      <div style="width: 15%;">
        <p class="text">可用积分</p>
        <p class="minText"
           style="font-size: 18px; color:#000">0</p>
      </div>
      <div style="width: 15%">
        <p class="text">保护期内积分</p>
        <p class="minText"
           style="font-size: 18px; color:#000">0</p>
      </div>
      <div style="width: 15%">
        <p class="text">累计消耗积分</p>
        <p class="minText"
           style="font-size: 18px; color:#000">0</p>
      </div>
      <div style="width: 15%">
        <p class="text blueColor">查看更多</p>
      </div>
    </div>

    <div class="c_box">
      设置通用积分规则
    </div>

    <div class=""
         style="flex: 1">
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="规则名称"
                         width="180">
        </el-table-column>
        <el-table-column prop="gz"
                         show-overflow-tooltip
                         label="规则详情">
        </el-table-column>
        <el-table-column prop="time"
                         show-overflow-tooltip
                         label="更新时间">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor right20">设置</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="c_box">
      自定义积分规则
    </div>

    <div>
      <el-button size="mini"
                 class="ml"
                 plain>新建积分规则</el-button>
      <div class="table"
           style="flex: 1">
        <el-table :data="tableDatas"
                  :style="{'width': width + 'px'}">
          <el-table-column prop="name"
                           fixed
                           show-overflow-tooltip
                           label="权益卡名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltips
                           label="领取条件">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="有效期">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="权益">
          </el-table-column>
          <el-table-column prop="address"
                           fixed="right"
                           show-overflow-tooltip
                           label="操作">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box mt">
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
  name: 'rule',
  data () {
    return {
      tableData: [{
        name: '积分有效期',
        gz: '永久有效',
        time: '-'
      }, {
        name: '积分获取上限',
        gz: '-',
        time: '-'
      }, {
        name: '积分保护期',
        gz: '-',
        time: '-'
      }, {
        name: '积分名称自定义',
        gz: '-',
        time: '-'
      }, {
        name: '积分兑换比例',
        gz: '-',
        time: '-'
      }, {
        name: '积分抵现',
        gz: '-',
        time: '-'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.rule {
  overflow: auto;
}
</style>
