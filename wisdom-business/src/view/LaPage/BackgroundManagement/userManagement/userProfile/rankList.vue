<template>
  <div class="recommendedSettings">
    <div class="top_button">
      <el-button type="primary"
                @click="add()">
          添加等级
        </el-button>
    </div>

    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
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
          <el-table-column prop="group_name"
                           show-overflow-tooltip
                           label="等级名称">
          </el-table-column>
          <el-table-column prop="max_points"
                           show-overflow-tooltip
                           label="积分上限">
          </el-table-column>
          <el-table-column prop="min_points"
                           show-overflow-tooltip
                           label="积分下限">
          </el-table-column>
          <el-table-column prop="is_admin"
                           show-overflow-tooltip
                           label="等级类型">
            <template slot-scope="scope">
              <span> 
                {{scope.row.is_admin ? '管理员等级' : '会员等级'}}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="is_tg"
                           show-overflow-tooltip
                           label="是否推广等级">
              <template slot-scope="scope">
                <span> 
                  {{scope.row.is_tg ? '是' : '否'}}
                </span>
              </template>
          </el-table-column>
          <el-table-column prop="degree"
                           show-overflow-tooltip
                           label="等级高低">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           width="100px"
                           label="操作">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
    </div>

    <el-dialog
      :title="addType ? '添加等级' : '编辑等级'"
      :visible.sync="dialogVisible"
      center
      width="50%">
      <el-form ref="form" :model="form" label-width="120px">
        <div class="form_fix">
          <el-form-item label="等级名称">
            <el-input v-model="form.group_name"></el-input>
          </el-form-item>
          <el-form-item label="等级高低">
            <el-input v-model="form.degree"></el-input>
          </el-form-item>
        </div>
        <div class="form_fix">
          <el-form-item label="积分上限">
            <el-input v-model="form.max_points"></el-input>
          </el-form-item>
          <el-form-item label="积分下限">
            <el-input v-model="form.min_points"></el-input>
          </el-form-item>
        </div>
        <div class="form_fix">
          <el-form-item label="等级类型">
            <el-radio-group v-model="form.is_admin">
              <el-radio label="0">会员等级</el-radio>
              <el-radio label="1">管理员等级</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否推广等级">
            <el-radio-group v-model="form.is_tg">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="权限设置">
            <el-checkbox-group v-model="form.checkList">
              <dl class="ul_cen" v-for="(item, index) in checkData" :key="index">
                <dd>{{index}}</dd>
                <dt>
                  <el-checkbox v-for="(itm, idx) in checkData[index]" :key="idx" :label="itm.value">{{itm.name}}</el-checkbox>
                </dt>
              </dl>
            </el-checkbox-group>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="submit">立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'recommendedSettings',

  data () {
    return {
      form: {
        checkList: []
      },
      addType: true,
      dialogVisible: false,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      checkData: {
        '首页': [
          {
            name: '管理首页',
            value: 'admin'
          },
          {
            name: '后台浏览',
            value: 'index'
          },
          {
            name: '更新缓存',
            value: 'cache'
          },
          {
            name: '数据备份',
            value: 'database'
          }
        ],
        '商铺设置': [
          {
            name: '商铺设置',
            value: 'settings'
          },
          {
            name: '保留域名',
            value: 'subdomain'
          },
          {
            name: '商铺认证',
            value: 'sup_check'
          },
          {
            name: '域名设置',
            value: 'tld'
          }
        ],
        '分类设置': [
          {
            name: '分类设置',
            value: 'category'
          }
        ],
        '商品管理': [
          {
            name: '常规销售',
            value: 'goods'
          },
          {
            name: '下架商品',
            value: 'downgd'
          },
          {
            name: '团购商品',
            value: 'groupgd'
          },
          {
            name: '限时秒杀',
            value: 'salegd'
          },
          {
            name: '拍卖商品',
            value: 'auction'
          },
          {
            name: '展示商品',
            value: 'showgd'
          },
          {
            name: '积分汇商品',
            value: 'changegd'
          },
          {
            name: '入库商品',
            value: 'goods_storage'
          },
          {
            name: '品牌管理',
            value: 'brand'
          },
          {
            name: '销售型商品咨询',
            value: 'comment'
          },
          {
            name: '展示型商品咨询',
            value: 'consult'
          }
        ],
        '交易管理': [
          {
            name: '订单管理',
            value: 'order'
          },
          {
            name: '退货通道',
            value: 'back_order'
          },
          {
            name: '提现申请',
            value: 'withdraw'
          },
          {
            name: '收款设置',
            value: 'payment'
          },
          {
            name: '消保明细',
            value: 'xb_money'
          }
        ],
        '营销中心': [
          {
            name: '专题页面',
            value: 'onsale_page'
          },
          {
            name: '首页楼层',
            value: 'index_floor'
          },
          {
            name: '优惠券管理',
            value: 'coupon'
          },
          {
            name: '广告管理',
            value: 'rcm_ad'
          }
        ],
        '会员管理': [
          {
            name: '会员管理',
            value: 'member'
          },
          {
            name: '积分明细',
            value: 'member_point'
          },
          {
            name: '资金明细',
            value: 'member_money'
          },
          {
            name: '会员等级',
            value: 'grade'
          }
        ],
        '商铺装修': [
          {
            name: '友情连接',
            value: 'links'
          },
          {
            name: '页面管理',
            value: 'page'
          },
          {
            name: '导航管理',
            value: 'navigation'
          },
          {
            name: '资讯系统',
            value: 'board'
          },
          {
            name: '轮转广告',
            value: 'cycle'
          },
          {
            name: '手机轮转广告',
            value: 'wapcycle'
          },
          {
            name: '弹窗广告',
            value: 'popup'
          },
          {
            name: '模板购买',
            value: 'tpl'
          }
        ],
        '数据分析': [
          {
            name: '商铺排行',
            value: 'shop_rank'
          },
          {
            name: '商品排行',
            value: 'sale_rank'
          },
          {
            name: '会员消费排行',
            value: 'consume_rank'
          }
        ],
        '商铺管理': [
          {
            name: '商铺管理',
            value: 'supplier'
          },
          {
            name: '下级商铺',
            value: 'dsupplier'
          },
          {
            name: '商铺权限',
            value: 'member_set'
          },
          {
            name: '搜索地区',
            value: 'search_area'
          },
          {
            name: '买卖评价',
            value: 'sup_msg'
          },
          {
            name: '托管管理',
            value: 'sup_apply'
          },
          {
            name: '升级审核',
            value: 'shop_update'
          }
        ],
        '拓展管理': [
          {
            name: '后台菜单',
            value: 'admin_menu'
          },
          {
            name: '图片管理',
            value: 'pics'
          },
          {
            name: '短信发送',
            value: 'sendsms'
          },
          {
            name: '邮件群发',
            value: 'sendmail'
          },
          {
            name: '托管管理',
            value: 'sup_apply'
          },
          {
            name: '后台管理日志',
            value: 'admin_log'
          },
          {
            name: '任务运行日志',
            value: 'task_log'
          }
        ],
      }
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getLevelList({
        page: this.currentPage,
        page_size: this.page_size,
        group_name: '',
        is_admin: '',
        is_tg: '',
        order_type: 'desc',
        order_field: 'group_id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    cancel() {
      this.dialogVisible = false
      this.form = {
        checkList: [],
        group_name: '',
        degree: '',
        max_points: '',
        min_points: '',
        is_admin: '',
        is_tg: ''
      }
    },

    submit() {
      let arr = ''
      this.form.checkList.forEach((item, index) => {
        if(index == 0) {
          arr = item
        }
        else{
          arr = arr + ',' + item
        }
      })
      if(!this.form.group_name) {
        return false
      }
      if(this.addType) {
        this.$newApi.addLevelItem({
          group_name: this.form.group_name,
          degree: this.form.degree,
          max_points: this.form.max_points,
          min_points: this.form.min_points,
          is_admin: this.form.is_admin,
          is_tg: this.form.is_tg,
          rank: arr,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
          this.dialogVisible = false
          this.form = {
            checkList: [],
            group_name: '',
            degree: '',
            max_points: '',
            min_points: '',
            is_admin: '',
            is_tg: ''
          }
          this.create()
        })
      } else {
        this.$newApi.setLevelItem({
          group_id: this.form.group_id,
          group_name: this.form.group_name,
          degree: this.form.degree,
          max_points: this.form.max_points,
          min_points: this.form.min_points,
          is_admin: this.form.is_admin,
          is_tg: this.form.is_tg,
          rank: arr,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.dialogVisible = false
          this.form = {
            checkList: [],
            group_name: '',
            degree: '',
            max_points: '',
            min_points: '',
            is_admin: '',
            is_tg: ''
          }
          this.create()
        })
      }

    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delLevelItem({
        group_id: row.group_id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.create()
      })
    },

    add () {
      this.dialogVisible = true
      this.addType = true
    },
    editor (index, row) {
      this.dialogVisible = true
      this.addType = false
      this.$newApi.getLevelItem({
        uid: row.group_id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$set(this.form, 'degree', res.data.degree)
        this.$set(this.form, 'group_name', res.data.group_name)
        this.$set(this.form, 'is_admin', String(res.data.is_admin))
        this.$set(this.form, 'is_tg', String(res.data.is_tg))
        this.$set(this.form, 'max_points', res.data.max_points)
        this.$set(this.form, 'min_points', res.data.min_points)
        this.$set(this.form, 'checkList', res.data.rank)
        this.$set(this.form, 'group_id', res.data.group_id)
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
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-form{
  margin-right: 40px;
  .form_fix{
    display: flex;
    .el-form-item{
      width: 50%;
    }
  }
}

.el-table {
  flex: 1;
  overflow: auto;

  /deep/ .el-input__inner {
    border-color: #fff !important ;
  }
}

.recommendedSettings {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    // display: flex;
    // justify-content: space-between;
  }

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

  .ul_cen{
    display: flex;
    dd{
      width: 80px;
      font-weight: 600;
      color: #000;
    }
    dt{
      flex: 1;
    }
  }

  .el-checkbox-group{
    font-size: 14px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
