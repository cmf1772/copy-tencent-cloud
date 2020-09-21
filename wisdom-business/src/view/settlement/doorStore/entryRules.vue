<template>
  <div class="entryRules"
       style="    overflow: auto;">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="用户管理"
                   name="first">
        <div class="bg_color"
             style="padding: 10px">
          <p class="minText">说明：1、进店规则仅作用于多网店模式和导流模式；单网店模式下，买家无差别进入商家店</p>
          <p class="minText"
             style="margin: 5px 0 0 35px">2、层级区分优先级，当上一层级有推荐结果后，则不会再执行下个层级的判断。</p>
        </div>
        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级一：客户有归属门店</p>
          <div class="flexRC mt">
            <el-radio v-model="radio"
                      class="flexRC mr"
                      style="width: 200px"
                      label="1">
              <p class="minText">优先进入客户归属门店</p>
            </el-radio>
            <el-radio v-model="radio"
                      class="flexRC"
                      label="2">
              <p class="minText">忽略归属门店，从层级二开始推荐门店</p>
            </el-radio>
          </div>
          <p class="minText mt">1,归属门店的明细，请进入 客户-客户管理-客户资料 中进行查看并设置</p>
          <p class="minText mt mb">2,设置"优先进入客户归属门店"时，买家不允许切换其他门店。</p>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级二：客户在扫码或点击链接时，二维码或链接包含有指定门店参数</p>
          <p class="minText mt">1、商家从门店后台获取的链接，带门店参数。直接投放链接或二维码，买家可通过扫码或点击链接直接进入带参门店。</p>
          <p class="minText mt mb">2、单网店模式，买家无差别进入商家店。</p>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级三：客户最近访问的门店是隔离门店</p>
          <p class="minText mt">1、当客户通过扫码进入隔离门店后。买家二次进入商城，则直接进入之前已访问过的隔离门店。</p>
          <p class="minText mt mb">2、门店的隔离状态在 门店隔离 中进行设置。</p>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级四：人群定向推荐</p>
          <div class="flex mt">
            <p class="minText">是否需要推荐店</p>
            <div class="flexColumn ">
              <el-radio v-model="radio"
                        class="flexRC ml"
                        style="width: 200px"
                        label="1">
                <p class="minText"><span class="text">不需要 不需要推荐店，</span> </p>
              </el-radio>
              <el-radio v-model="radio"
                        class="flexRC ml mt"
                        style="width: 200px"
                        label="1">
                <p class="minText"><span class="text">需要</span> </p>
              </el-radio>
              <el-select v-model="shopValue"
                         class="mt"
                         style="width: 130px"
                         size="mini"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="智慧零售"
                           value="1"></el-option>
                <el-option label="交易时间"
                           value="2"></el-option>
              </el-select>
            </div>
          </div>
          <div class="flex mt">
            <p class="minText">优先进入推荐店地区</p>
            <div class="flexColumn ml">
              <p class="minText s"
                 style="color: #2589FF">编辑</p>
              <p class="minText mt">1、当买家定位于选择区域时，系统将推荐店的网店作为买家默认进入的门店；其他地区的买家，按距离推荐门店；</p>
              <p class="minText mt">2、该设置项仅作用于多网店模式；导流模式和单网店模式无需该设置项；</p>
            </div>
          </div>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级五：区域隔离推荐</p>
          <p class="minText mt">1、当隔离区域设置指定推荐地区，买家定位于指定地区时，系统将推荐该区域内最近的门店；</p>
          <p class="minText mt mb">2、当买家位于已隔离区域中的某个门店时，买家只能在该区域内切换门店；</p>
          <p class="minText mt mb">3、区域隔离请进入 门店-进店规则-区域隔离 中设置</p>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级六：LBS定位推荐</p>
          <p class="minText mt">1、多网店模式下，系统会根据买家的当前定位，推荐服务范围内最近的门店；</p>
          <p class="minText mt mb">2、导流模式下，买家将直接进入导流门店。</p>
        </div>

        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text">层级七：无门店推荐结果，直接进入指定页面</p>
          <div class="flex mt">
            <p class="minText">指定页面</p>
            <div class="flexColumn ">
              <div class="flexRC">
                <el-radio v-model="radio"
                          class="flexRC ml"
                          style="width: 200px"
                          label="1">
                  <p class="minText">进入门店列表</p>
                </el-radio>
                <el-radio v-model="radio"
                          class="flexRC"
                          style="width: 200px"
                          label="2">
                  <p class="minText">进入指定页面</p>
                </el-radio>
                <el-radio v-model="radio"
                          class="flexRC"
                          style="width: 200px"
                          label="3">
                  <p class="minText">进入个人中心</p>
                </el-radio>
              </div>
              <p class="mt minText">多网店模式下，系统无推荐结果，则买家直接进入指定页面</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理"
                   name="second">
        <div class="flexColumn conent_box"
             style="flex: 1">
          <div class="bg_color"
               style="padding: 10px">
            <p class="minText">说明：1、当商家没有为隔离区域设置指定推荐地区时，系统按正常进店规则进行推荐；当买家进入的门店隶属于某个隔离区域时，只能在该区域内切换门店。</p>
            <p class="minText"
               style="margin-top: 5px">2、当商家为隔离区域设置指定推荐地区，且买家定位于指定地区时，系统将推荐该区域内最近的门店；当买家切换门店时，只能在该区域内切换门店。</p>
          </div>
          <div class="c_box">
            <div class="flexJC ">
              <el-button size="mini"
                         type="primary"
                         plain>新增隔离区域</el-button>
            </div>
          </div>

          <div class="table">
            <el-table :data="tableData"
                      stripe
                      style="width: 100%">
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="隔离区域"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="指定推荐地区">
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
      </el-tab-pane>
      <el-tab-pane label="角色管理"
                   name="third">
        <div class="flexColumn conent_box"
             style="flex: 1">
          <div class="c_box">
            <div class="flexJC ">
              <div class="mb">
                <el-button size="mini">开启门店隔离</el-button>
                <el-button size="mini">关闭门店隔离</el-button>
                <el-select v-model="stateValue"
                           class="ml mr"
                           style="width: 100px; margin-left: 0"
                           size="mini"
                           clearable
                           placeholder="请选择">

                  <el-option label="隔离状态"
                             value="1"></el-option>
                  <el-option label="已隔离"
                             value="2"></el-option>
                  <el-option label="未隔离"
                             value="3"></el-option>
                </el-select>
              </div>
              <div class="">
                <el-input placeholder="请输入内容"
                          style="width: 300px"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml">
                  <el-select v-model="sleValue"
                             style="width: 100px"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="按地区筛选"
                               value="1"></el-option>
                    <el-option label="按区域筛选"
                               value="2"></el-option>
                  </el-select>
                </el-input>
                <el-input placeholder="请输入内容"
                          style="width: 300px"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml">
                  <el-select v-model="sleValue"
                             style="width: 100px"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="门店名称"
                               value="1"></el-option>
                    <el-option label="门店编码"
                               value="2"></el-option>
                    <el-option label="门店具体位置"
                               value="1"></el-option>
                  </el-select>
                  <el-button slot="append"
                             size="mini"
                             icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>

          </div>

          <div class="table">
            <el-table :data="tableData"
                      stripe
                      style="width: 100%">
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="门店编号"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店名称">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店地址">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店排序">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店状态">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="隔离状态">
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
                    <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'entryRules',
  data () {
    return {
      activeName: 'first',
      radio: '1',
      shopValue: '1',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      stateValue: '1',
    }
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>