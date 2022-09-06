<template>
    <div class="ordering">
        <div class="heading">用户列表</div>
        <div>
          <el-table :data="res" style="width: 100%">
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
                              preview-teleported="true"
                              >
                        </el-image>
                </template>    
            </el-table-column>
            <el-table-column prop="sex" label="性别" align="center" min-width="100" />
            <el-table-column prop="position" label="职业" align="center" min-width="100" />
          </el-table>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup() {
        const res = reactive([{
            time:'2021-10-11',
            name:'马云',
            head:'https://diancan-1252107261.cos.ap-chengdu.myqcloud.com/vue-element/1636910485866-7057020.jfif',
            sex:'男',
            position:'董事长'
        }])
        return {res}
    },
}
</script>