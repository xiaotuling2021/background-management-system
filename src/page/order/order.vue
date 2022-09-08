<template>
  <div class="ordering">
    <div class="heading">订单管理</div>
    <div class="query-view">
        <!-- 日期选择器 -->
        <div class="quotation-query">
          <div class="quotation-title">交易时间</div>
          <div>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              unlink-panels
            />
          </div>
        </div>
        <!-- 下拉列表 -->
        <div class="quotation-query">
            <div class="quotation-title">桌号</div>
            <div>
              <el-select v-model="sevalue" class="m-2" placeholder="请选择桌号" size="large">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
        </div>
        <!-- 查询按钮 -->
        <div class="quotation-query">
            <el-button type="success">查询</el-button>
        </div>
    </div>
    <!-- 表格 -->
    <div>
      <el-table :data="table_data" style="width: 100%">
        <el-table-column prop="order_time" label="交易时间" align="center" min-width="100" />
        <el-table-column prop="table_number" label="桌号" align="center" min-width="100" />
        <el-table-column prop="number_of_diners" label="用餐人数" align="center" min-width="100" />
        <el-table-column label="菜单详情" align="center" min-width="100">
            <!-- 头像 -->       
            <template #default="scope">
                    <el-button size="small">详细菜单</el-button>
            </template>    
        </el-table-column>
        <el-table-column prop="sett_amount" label="交易金额" align="center" min-width="100" />
        <el-table-column label="交易状态" align="center" min-width="100">
            <!-- 头像 -->       
            <template #default="scope">
                    <el-button size="small" type="danger">未结账</el-button>
            </template>    
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
         background layout="prev, pager, next"
		 :total="100"
		 :hide-on-single-page="true"
		 @current-change="currentchange"
		 />
    </div>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import Dialog from './component/el-dialog.vue'
export default {
    components: {
        Dialog
    },
    setup() {
        const res = reactive({
            value1:'',
            sevalue:'',
            options:[
                {
                    value:'001',
                    label:'001'
                },
                {
                    value:'002',
                    label:'002'
                }
            ],
            // 表格数据
            table_data:[
                {
                order_time:'2021-10-26 01:19:40',
                table_number:'003',
                number_of_diners:'3',
                sett_amount:100
                },
                {
                order_time:'2021-10-26 01:19:40',
                table_number:'003',
                number_of_diners:'3',
                sett_amount:100
                }
            ]
        })

        function currentchange() {

        }
        return {...toRefs(res),currentchange}
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
