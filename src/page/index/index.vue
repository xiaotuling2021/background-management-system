<template>
    <div>
        <div class="sidebar-top">
            <div>老饭馆后台管理系统</div>
            <div>退出</div>
        </div>
        <div class="sidebar-cont">
            <el-menu>
              <div v-for="(item,index) in items" :key="index">
                <el-menu-item v-if="item.Subclass.length == 0" :index="item.id">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{item.title}}</span>
                </el-menu-item>

                <el-sub-menu v-if="item.Subclass.length > 0" :index="item.id">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group v-for="(two,two_index) in item.Subclass" :key="two_index">
                        <el-menu-item :index="two.id">{{two.title}}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
              </div>
            </el-menu>
        </div>
    </div>
</template>

<script>
import {Watermelon,Pear,Bowl} from '@element-plus/icons-vue'
import { shallowRef,reactive } from 'vue'
export default {
    components: {
        Watermelon,
        Pear,
        Bowl
    },
    setup() {
        const Array = [
            {
                id:'1',
                icon:Watermelon,
                title:'数据分析',
                router:'',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'2',
                icon:Pear,
                title:'用户列表',
                router:'',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'3',
                icon:Watermelon,
                title:'订单管理',
                router:'',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'4',
                icon:Watermelon,
                title:'菜品管理',
                router:'',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'5',
                icon:Watermelon,
                title:'员工管理',
                router:'',
                Subclass:[
                    {
                        id:'5-1',
                        title:'员工详情',
                        router:''
                    },
                    {
                        id:'5-2',
                        title:'其它页面',
                        router:''
                    },
                ]//是否有二级，三级菜单
            },
        ]
        const items = shallowRef(Array)
        return {items}
    },
}
</script>

<style scoped>

</style>