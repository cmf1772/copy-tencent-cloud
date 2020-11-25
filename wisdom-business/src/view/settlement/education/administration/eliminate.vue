<template>
  <div class="settings">
    <p class="text">消课设置</p>
    <el-form ref="form"
             :model="form"
             label-width="120px">
      <el-form-item label="消课规则:">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="请假算消课"
                       name="type"></el-checkbox>
          <el-checkbox label="未到算消课"
                       name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="取消规则:">
        <el-radio-group v-model="form.resource">
          <el-radio label="限制"></el-radio>
          <el-radio label="不限制"></el-radio>
        </el-radio-group>
        <div class="flexRC">
          <p class="text">课程开始前</p>
          <el-input v-model="form.name"
                    size="mini"
                    style="width: 150px"></el-input>
          <p class="text">小时可以签到， 课程结束后</p>
          <el-input v-model="form.name"
                    size="mini"
                    style="width: 150px"></el-input>
          <p class="text">小时停止签到</p>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        startTime: '',
        endTime: '',
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
