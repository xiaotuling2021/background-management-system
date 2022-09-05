<template>
    <div class="ordering">
        <div class="heading">用户列表</div>
        <div>
          <el-table :data="res" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
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