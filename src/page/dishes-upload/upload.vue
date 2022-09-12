<template>
    <div class="ordering">
      <el-breadcrumb :separator-icon="icon">
      <el-breadcrumb-item :to="{name:'dishes'}">菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加菜品</el-breadcrumb-item>
      </el-breadcrumb>


      <div class="content-view-ten">
        <!-- 菜单类目 -->
        <div class="image-view-title">
          <div class="image-list">菜单类目</div>
            <el-select v-model="catevalue" class="m-2" placeholder="请选择桌号" size="large">
                    <el-option
                      v-for="item in cate"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
            </el-select>
        </div>
        <!-- 菜品名称 -->
        <div class="image-view-title">
            <div class="image-list">菜品名称</div>
            <el-input v-model="name" placeholder="请输入菜品名称" clearable />
        </div>
        <!-- 菜品价格(元) -->
        <div class="image-view-title">
            <div class="image-list">菜品价格(元)</div>
            <div>
                <el-input type="number" v-model="unitprice" placeholder="请输入菜品价格" clearable />
                <el-select v-model="compvalue" class="m-2" placeholder="请选择单位" size="large">
                    <el-option
                      v-for="item in company"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                </el-select>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ArrowRight } from '@element-plus/icons-vue'
import {shallowRef,reactive,toRefs} from 'vue'
export default {
    setup() {
        const icon = shallowRef(ArrowRight)
        const oper_data = reactive({
            catevalue:'',//选中的菜品类目
            name:'',//菜品名称
            unitprice:'',//输入的价格
            compvalue:'',//选中的单位
            cate:[
                {
                    label:'1',
                    value:'1'
                },
                {
                    label:'2',
                    value:'2'
                },
            ],
            company:[
                {
                    label:'1',
                    value:'1'
                },
                {
                    label:'2',
                    value:'2'
                },
            ],
        })
        return {icon,...toRefs(oper_data)}
    },
}
</script>

<style scoped>

</style>