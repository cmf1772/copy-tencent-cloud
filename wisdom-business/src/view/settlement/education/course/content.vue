<template>
  <div class="content flexColumn">
    <p class="text">课程管理</p>

    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="bg_color minText"
           style="padding: 10px">
        iOS系统微信小程序内将无法购买和支付知识付费商品。<span class="s blueColor">查看产品优化调整详情</span>
      </div>

      <div class="flexJC">
        <div style="width: 31%"
             class="flexC c_box">
          <p class="text"
             style="font-size: 18px">图文</p>
          <p class="minText mt">可以添加文字和图片的单篇内容</p>
          <el-button type="primary"
                     class="mt"
                     size="mini">立即新建</el-button>
        </div>
        <div style="width: 31%"
             class="flexC c_box">
          <p class="text"
             style="font-size: 18px">图文</p>
          <p class="minText mt">可以添加文字和图片的单篇内容</p>
          <el-button type="primary"
                     class="mt"
                     size="mini">立即新建</el-button>
        </div>
        <div style="width: 31%"
             class="flexC c_box">
          <p class="text"
             style="font-size: 18px">图文</p>
          <p class="minText mt">可以添加文字和图片的单篇内容</p>
          <el-button type="primary"
                     class="mt"
                     size="mini">立即新建</el-button>
        </div>
      </div>

      <div class="c_box flexRC">
        <p class="mr minText mb">内容名称：</p>
        <el-input placeholder="请输入关键字"
                  size="mini"
                  style="width: 180px"
                  v-model="search"
                  class="ml mr">
        </el-input>
        <p class="ml mr minText mb">出售状态：</p>
        <el-select v-model="search"
                   clearable
                   class="ml mr mb"
                   size="mini"
                   placeholder="请选择">
          <el-option label="出售中"
                     value="1">
          </el-option>
          <el-option label="已停售"
                     value="2">
          </el-option>
        </el-select>
        <p class="ml mr minText mb">出售状态：</p>
        <el-select v-model="search"
                   clearable
                   class="ml mr mb"
                   size="mini"
                   placeholder="请选择">
          <el-option label="全部"
                     value="1">
          </el-option>
          <el-option label="图文"
                     value="2">
          </el-option>
          <el-option label="音频"
                     value="3">
          </el-option>
          <el-option label="视频"
                     value="4">
          </el-option>
        </el-select>
        <p class="ml mr minText mb">销售方式：</p>
        <el-select v-model="search"
                   clearable
                   class="ml mr mb"
                   size="mini"
                   placeholder="请选择">
          <el-option label="全部"
                     value="1">
          </el-option>
          <el-option label="仅单篇销售"
                     value="2">
          </el-option>
          <el-option label="仅专栏销售"
                     value="3">
          </el-option>
          <el-option label="单篇或专栏销售"
                     value="4">
          </el-option>
        </el-select>
        <p class="ml mr minText mb">课程分组：</p>
        <el-select v-model="search"
                   clearable
                   class="mr"
                   size="mini"
                   placeholder="请选择">
          <el-option label="全部"
                     value="1">
          </el-option>
          <el-option label="店铺中隐藏"
                     value="2">
          </el-option>
        </el-select>
        <el-button size="mini"
                   class="mr">筛选</el-button>
        <el-button size="mini"
                   class="mr">重置筛选条件</el-button>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="内容"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="价格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="出售状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开售时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销量">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联专栏">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="序号">
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
  name: 'content',
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
