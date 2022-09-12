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
            <el-table-column prop="name" label="类目" align="center" min-width="100" />
            <el-table-column prop="name" label="菜品名称" align="center" min-width="100" />
            <el-table-column label="商品图片" align="center" min-width="100">
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
            <el-table-column prop="sex" label="价格" align="center" min-width="100" />
            <el-table-column prop="position" label="操作" align="center" min-width="100">
              <template #default="scope">
                      <el-button size="small">编辑</el-button>
                      <el-button size="small">下架</el-button>
              </template>   
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination background layout="prev, pager, next"
			 :total="1000"
			 :hide-on-single-page="true"
			 @current-change="currentchange"
			 />
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        function currentchange() {

        }
        return {currentchange}
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