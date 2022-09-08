<template>
  <el-dialog
   v-model="res.dialogTableVisible"
   title="详细菜单"
   width="31.25rem"
  >
    <div class="menu-padd">
        <div class="Menu-details menu-span">
            <span>第一次下单</span>
        </div>
        <div>
            <div class="Menu-details menu-margin">
                <span>家常鲫鱼</span>
                <span>1000g</span>
                <span>7份</span>
            </div>
        </div>
    </div>
  </el-dialog>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup() {
       const res = reactive({
        dialogTableVisible:true
       })
       return {res} 
    },
}
</script>

<style scoped>

</style>