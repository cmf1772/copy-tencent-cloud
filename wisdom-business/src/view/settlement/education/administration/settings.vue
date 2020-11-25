<template>
  <div class="settings">
    <p class="text">预约设置</p>
    <el-form ref="form"
             :model="form"
             label-width="120px">
      <el-form-item label="预约规则:">
        <el-radio-group v-model="form.resource">
          <el-radio label="限制"></el-radio>
          <el-radio label="不限制"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="取消规则:">
        <el-radio-group v-model="form.resource">
          <el-radio label="允许取消"></el-radio>
          <el-radio label="不允许取消"></el-radio>
        </el-radio-group>
        <div class="flexRC">
          <p class="text">上课前</p>
          <el-input v-model="form.name"
                    size="mini"
                    style="width: 150px"></el-input>
          <p class="text">小时可取消</p>
        </div>
      </el-form-item>
      <el-form-item label="试听名额设置:">
        <el-radio-group v-model="form.resource">
          <el-radio label="不占用上课名额"></el-radio>
          <el-radio label="占用上课名额"></el-radio>
        </el-radio-group>
        <div class="minText">
          日程里有剩余的名额，才允许将试听学员安排进去
        </div>
      </el-form-item>
      <el-form-item label="课程表看板时间:">
        <el-time-select placeholder="起始时间"
                        v-model="startTime"
                        size="mini"
                        :picker-options="{start: '08:30',step: '00:15',end: '18:30'}">
        </el-time-select>
        <el-time-select placeholder="结束时间"
                        v-model="endTime"
                        size="mini"
                        :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}">
        </el-time-select>
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
