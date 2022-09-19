<template>
    <div class="ordering">
        <div class="heading">菜品管理</div>
        <div class="button-view">
            <router-link :to="{name:'upload'}">
              <el-button type="success">添加菜品</el-button>
            </router-link>
        </div>
        <div>
          <el-table :data="dish_data" style="width: 100%">
            <el-table-column prop="time" label="创建时间" align="center" min-width="100" />
            <el-table-column prop="category" label="类目" align="center" min-width="100" />
            <el-table-column prop="name" label="菜品名称" align="center" min-width="100" />
            <el-table-column label="商品图片" align="center" min-width="100">
                <!-- 头像 -->       
                <template #default="scope">
                        <el-image style="width: 40px; height: 40px;" 
                              :src="scope.row.image[0].url" 
                              fit="cover" 
                              :preview-src-list="[scope.row.image[0].url]" 
                              :hide-on-click-modal ="true"
                              lazy
                              :preview-teleported="true"
                              >
                        </el-image>
                </template>    
            </el-table-column>
            <el-table-column prop="unitprice" label="价格" align="center" min-width="100" />
            <el-table-column label="操作" align="center" min-width="100">
              <template #default="scope">
                      <el-button size="small" type="primary" @click="Edit(scope.row)">编辑</el-button>
                      <el-button size="small" type="danger" v-if="scope.row.onsale" @click="offthe_Shelf(scope.row.name,scope.row._id,scope.$index)">下架</el-button>
                      <el-button size="small" type="danger" v-else disabled>已下架</el-button>
              </template>   
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination 
            background layout="prev, pager, next"
			      :total="total"
			      :hide-on-single-page="true"
			      @current-change="currentchange"
			    />
        </div>
    </div>
</template>

<script>
import {reactive,toRefs,getCurrentInstance,onMounted} from 'vue'
import {ElMessageBox } from 'element-plus'
import {useRouter} from 'vue-router'
export default {
    setup() {
      const {proxy} = getCurrentInstance()
      const router = useRouter()
      const oper_data = reactive({
        page:0,
        dish_data:[],
        total:0,
      })

      // 请求菜品数据
      onMounted(()=>{
        get_dishes()
      })
      const get_dishes = async() => {
        try{
          const res = await new proxy.$request(proxy.$urls.m().obtaindishes + "?page=" + oper_data.page).modeget()
          console.log(res);
          oper_data.dish_data = res.data.data.result
          oper_data.total = res.data.data.total
        }catch(e){

        }
      }

      // 下架菜品提示框
      const offthe_Shelf = (name,id,index)=>{
        ElMessageBox.confirm(
          `确定对 ${name} 下架吗？`,
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
        ).then(res => {
          console.log('确定');
          Shelf(id,index)
        }).catch(err => {
          console.log('取消');
        })
      }
      // 下架菜品
      const Shelf = async(id,index) => {
        try{
          const res = await new proxy.$request(proxy.$urls.m().fromsale + "?id=" + id).modeget()
          console.log(res);
          oper_data.dish_data[index].onsale = false
        }catch(e){

        }
      }

      // 编辑商品
      const Edit = (scope)=>{
        console.log(scope);
        const val = JSON.stringify(scope)
        router.push({name:'upload',params:{val}})
      }

      // 分页触发
      function currentchange(e) {
        oper_data.page = e - 1
        get_dishes()
      }
      return {currentchange,...toRefs(oper_data),offthe_Shelf,Edit}
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