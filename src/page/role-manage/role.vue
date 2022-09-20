<template>
  <div class="ordering">
    <div class="heading">员工详情</div>
    <div class="query-view">
        <el-button type="success" @click="add_to">添加员工</el-button>
        <el-button type="danger">批量删除</el-button>
    </div>
    <!-- 表格 -->
    <div>
      <el-table :data="table_data" style="width: 100%">
        <el-table-column type="selection" />
        <el-table-column prop="time" label="创建时间" align="center" min-width="100" />
        <el-table-column prop="jobnumber" label="工号" align="center" min-width="100" />
        <el-table-column prop="name" label="姓名" align="center" min-width="100" />
        <el-table-column prop="sex" label="性别" align="center" min-width="100" />
        <el-table-column prop="position" label="职位" align="center" min-width="100" />
        <el-table-column label="是否离职" align="center" min-width="100">
          <template #default="scope">
            <el-switch v-model="scope.row.quit" />
          </template>   
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <el-pagination
      background layout="prev, pager, next"
	  :total="100"
	  :hide-on-single-page="true"
	  @current-change="currentchange"
	/>
    <!-- 弹窗 -->
    <Dialog ref="dialog"></Dialog>
  </div>
</template>

<script>
import {reactive,toRefs,ref} from 'vue'
import Dialog from './component/El-dialog.vue'
export default {
    components:{
        Dialog
    },
    setup() {
        const oper_data = reactive({
            table_data:[],
        })
        const dialog = ref()
        // 调用子组件显示弹窗
        const add_to = ()=>{
            dialog.value.add()
        }

        const currentchange = ()=>{

        }


        return {...toRefs(oper_data),currentchange,add_to,dialog}
    },
}
</script>

<style scoped>
  ::v-deep .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
	background-color: #00be06;
	color: #fff;
  }
  .el-pagination {
    margin-left: 550px;
  }
</style>