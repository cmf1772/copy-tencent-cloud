<template>
  <div class="shopnote flexColumn">
    <p class="text">店铺笔记</p>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="首页"
                   name="first"></el-tab-pane>
      <el-tab-pane label="笔记"
                   name="second"></el-tab-pane>
      <el-tab-pane label="草稿箱"
                   name="third"></el-tab-pane>
      <el-tab-pane label="页面设置"
                   name="fourth"></el-tab-pane>
      <el-tab-pane label="功能设置"
                   name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box flexJC">
        <div class="flexRC">
          <el-button size="mini"
                     class="mr">新建笔记</el-button>
          <el-button size="mini"
                     class="mr ml">倒入文章</el-button>
        </div>
        <div class="flexRC">
          <el-button size="mini"
                     class="mr">扩广笔记</el-button>
          <el-select v-model="search"
                     clearable
                     class="mr"
                     size="mini"
                     placeholder="请选择">
            <el-option label="上新"
                       value="1">
            </el-option>
            <el-option label="掌柜说"
                       value="2">
            </el-option>
            <el-option label="单品介绍"
                       value="3">
            </el-option>
            <el-option label="种草清单"
                       value="4">
            </el-option>
          </el-select>
          <el-input placeholder="请输入关键字"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml mr">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="笔记标题"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="浏览人数/浏览次数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="点赞数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发布时间/状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
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
  name: 'shopnote',
  data () {
    return {
      activeName: 'first',
      search: '',
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
