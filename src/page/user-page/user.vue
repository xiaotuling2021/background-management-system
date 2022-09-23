<template>
    <div class="ordering" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="heading">用户列表</div>
        <div>
          <el-table :data="user_array" style="width: 100%">
            <el-table-column prop="time" label="注册时间" align="center" min-width="100" />
            <el-table-column prop="name" label="姓名" align="center" min-width="100" />
            <el-table-column label="头像" align="center" min-width="100">
                <!-- 头像 -->       
                <template #default="scope">
                        <el-image style="width: 40px; height: 40px;" 
                              :src="scope.row.head" 
                              fit="cover" 
                              :preview-src-list="[scope.row.head]" 
                              :hide-on-click-modal ="true"
                              lazy
                              :preview-teleported="true"
                              >
                        </el-image>
                </template>    
            </el-table-column>
            <el-table-column prop="sex" label="性别" align="center" min-width="100" />
            <el-table-column prop="position" label="职业" align="center" min-width="100" />
          </el-table>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next"
			 :total="total"
			 :hide-on-single-page="true"
			 @current-change="currentchange"
			 />
        </div>
    </div>
</template>

<script>
import {reactive,onMounted,getCurrentInstance,toRefs,ref} from 'vue'
export default {
    setup() {
        const {proxy} = getCurrentInstance()
        const fullscreenLoading = ref(true)
        const open_data = reactive({
            user_array:[],//表格数据
            total:0,//数据总条数
            page: 0
    })
        onMounted(()=>{
            userlist()
        })
        async function userlist() {
            try {
                const res = await new proxy.$request(proxy.$urls.m().pulluserlist + '?page=' + open_data.page).modeget()
                open_data.user_array = res.data.data.result
                open_data.total = res.data.data.total
                fullscreenLoading.value = false
            }catch(e) {
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }
        function currentchange(e) {
            open_data.page = e-1
            userlist()
        } 
        return {...toRefs(open_data),currentchange,fullscreenLoading}
    },
}
</script>

<style scoped="scoped">
  ::v-deep .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
  	background-color: #00be06;
  	color: #fff;
  }
  .el-pagination {
      margin-left: 550px;
  }
</style>
