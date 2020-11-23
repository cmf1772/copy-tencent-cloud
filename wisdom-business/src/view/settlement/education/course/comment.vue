<template>
  <div class="comment flex">
    <div class="lefts">
      <div class="flexJC">
        <p class="text">全部内容</p>
        <el-select v-model="search"
                   clearable
                   style="width: 150px"
                   size="mini"
                   placeholder="">
          <el-option label="上架时间"
                     value="1">
          </el-option>
          <el-option label="最新留言"
                     value="2">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="rights">
      <el-select v-model="search"
                 clearable
                 style="width: 150px"
                 size="mini"
                 placeholder="">
        <el-option label="上架时间"
                   value="1">
        </el-option>
        <el-option label="最新留言"
                   value="2">
        </el-option>
      </el-select>
      <p class="text mt mb">全部留言</p>
      <div class="flexCC mt boxs minText">
        暂无留言
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment'
}
</script>

<style lang="scss" scope>
.lefts {
  width: 22%;
  border-right: solid 1px #ccc;
  box-sizing: border-box;
  padding: 20px;
}
.rights {
  flex: 1;
  box-sizing: border-box;
  padding: 20px;
}
.boxs {
  width: 100%;
  height: 250px;
  border: solid 1px #ccc;
}
</style>
 