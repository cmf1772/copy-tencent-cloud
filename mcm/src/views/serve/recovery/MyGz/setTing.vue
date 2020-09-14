<template>
  <div class="geSetUp">
    <div class="top">
      <van-nav-bar title="分类设置"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight"><template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png"
               alt="">
        </template>
        <template #right>
          <p>{{$route.query.flId ? '编辑' : '保存'}}</p>
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <van-cell-group>
        <van-cell title="分类名称"
                  @click="clickShow"
                  :value="cate ? cate : '请输入分类名称'" />
        <van-field v-model="unit"
                   input-align="right"
                   label="计量单位"
                   :disabled='$route.query.flId ? true : false'
                   placeholder="请输入计量单位" />
        <van-field v-model="prize"
                   input-align="right"
                   type="number"
                   label="回收价格"
                   placeholder="请输入回收价格" />
      </van-cell-group>
      <van-action-sheet v-model="show"
                        cancel-text="取消"
                        :actions="actions"
                        @select="onSelect" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'geSetUp',

  data () {
    return {
      show: false,
      cate: '',
      cate_id: '',
      unit: '',
      prize: '',
      actions: [],
    };
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    clickShow () {
      if (this.$route.query.flId) {
        return false
      }
      this.show = true
    },

    getRecoveryCate () {
      this.$api.serve.recovery.getRecoveryCate({
        level: 1,
        parent_id: 0
      })
        .then(res => {
          this.actions = res
          if (this.$route.query.flId) {
            this.info()
          }
        })
    },

    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      this.cate = item.name
      this.cate_id = item.id
    },

    info () {
      this.$api.serve.recovery.getEquipmentCate({
        identification: this.$route.query.identification,
        id: this.$route.query.flId
      })
        .then(res => {
          this.cate = res[0].name
          this.cate_id = res[0].cate_id
          this.unit = res[0].unit
          this.prize = res[0].prize
        })
    },

    onClickRight () {
      if (this.$route.query.flId) {
        this.$api.serve.recovery.modEquipmentCate({
          "id": this.$route.query.flId,
          "prize": this.prize
        })
          .then(res => {
            // this.list = res
            this.$toast.success("编辑成功");
            setTimeout(() => {
              this.$router.push('/serve/recovery/gzSetUp?id=' + this.$route.query.id + '&identification=' + this.$route.query.identification)
            }, 1000)

          })
      } else {
        this.$api.serve.recovery.setCate({
          "equipment_id": Number(this.$route.query.id),
          "cate_id": this.cate_id + '',
          "unit": this.unit,
          "prize": this.prize
        })
          .then(res => {
            // this.list = res
            this.$toast.success("新增成功");
            setTimeout(() => {
              this.$router.push('/serve/recovery/gzSetUp?id=' + this.$route.query.id + '&identification=' + this.$route.query.identification)
            }, 1000)

          })
      }

    },
  },

  mounted () {
    this.getRecoveryCate()
  }
}
</script>

<style lang="scss" scoped>
.content {
}
</style>