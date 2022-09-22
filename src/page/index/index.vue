<template>
    <div>
        <div class="sidebar-top">
            <div>星巴克后台管理</div>
            <div @click="signOut">退出</div>
        </div>
        <div class="sidebar-cont">
            <el-menu :default-active="ac_index" @select="Select">
              <div v-for="(item,index) in items" :key="index">
                <router-link :to="{path:item.router}">
                  <el-menu-item v-if="item.Subclass.length == 0" :index="item.id">
                      <el-icon>
                          <component :is="item.icon"></component>
                      </el-icon>
                      <span>{{item.title}}</span>
                  </el-menu-item>
                </router-link>

                <el-sub-menu v-if="item.Subclass.length > 0" :index="item.id">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item-group v-for="(two,two_index) in item.Subclass" :key="two_index">
                        <router-link :to="{path:two.router}">
                          <el-menu-item :index="two.id">{{two.title}}</el-menu-item>
                        </router-link>
                    </el-menu-item-group>
                </el-sub-menu>
              </div>
            </el-menu>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import {Watermelon,Pear,Bowl} from '@element-plus/icons-vue'
import { shallowRef,ref, onMounted,reactive} from 'vue'
import {useRouter} from 'vue-router'
export default {
    components: {
        Watermelon,
        Pear,
        Bowl
    },
    setup() {
        const router = useRouter()
        const Array = [
            {
                id:'1',
                icon:Watermelon,
                title:'数据分析',
                router:'data',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'2',
                icon:Pear,
                title:'用户列表',
                router:'userpage',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'3',
                icon:Watermelon,
                title:'订单管理',
                router:'order',
                Subclass:[]//是否有二级，三级菜单
            },
            {
                id:'4',
                icon:Watermelon,
                title:'菜品管理',
                router:'dishes',
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
                        router:'role'
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
        const ac_index = ref('1')
        function Select(index,path) {
          localStorage.setItem('menuid',JSON.stringify(index))    
        }
        onMounted(()=>{
            ac_index.value = JSON.parse(localStorage.getItem('menuid'))
        })

        // 退出
        const signOut = ()=>{
            localStorage.clear()
            router.push({name:'login'})
        }
        return {items,signOut,ac_index,Select}
    },
}
</script>

<style scoped>

</style>