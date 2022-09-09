<template>
  <div class="ordering">
    <div class="heading">订单管理</div>
    <div class="query-view">
        <!-- 日期选择器 -->
        <div class="quotation-query">
          <div class="quotation-title">交易时间</div>
          <div>
            <el-date-picker
              v-model="time"
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
                    <el-button size="small" @click="detailed(scope.row._id)">详细菜单</el-button>
            </template>    
        </el-table-column>
        <el-table-column prop="sett_amount" label="交易金额" align="center" min-width="100" />
        <el-table-column label="交易状态" align="center" min-width="100">
            <!-- 头像 -->       
            <template #default="scope">
                    <el-button size="small" type="danger" disabled v-if="scope.row.transac_status == 'success'">已结账</el-button>
                    <el-button size="small" type="danger" v-else>未结账</el-button>
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
    <!-- 弹窗 -->
    <Dialog ref="dialog"></Dialog>
  </div>
</template>

<script>
import {reactive,toRefs,getCurrentInstance,onMounted,ref} from 'vue'
import Dialog from './component/el-dialog.vue'
import qs from 'qs'
export default {
    components: {
        Dialog
    },
    setup() {
        const {proxy} = getCurrentInstance()
        const dialog = ref()
        const oper_data = reactive({
            time:[],//选中的时间
            sevalue:'',//选中的桌号
            options:[],//桌号的数据
            table_data:[],//表格数据
            page: 0,//第一页
            total: 0//数据总的条数
        })

        // 请求数据
        onMounted(()=>{
          get_order()
        })

        async function get_order() {
          const query = qs.stringify({
            page:oper_data.page,
            table_number:oper_data.sevalue,
            order_time:JSON.stringify(oper_data.time)
          })
          try {
            const TAB = new proxy.$request(proxy.$urls.m().gettable).modeget()
            const ORDER = new proxy.$request(proxy.$urls.m().obtainorder + '?' + query).modeget()
            const res = await Promise.all([TAB,ORDER])
            // console.log(res);
            oper_data.options = res[0].data.data
            oper_data.table_data = res[1].data.data.result
            oper_data.total = res[1].data.data.total
          }catch(e) {
            new proxy.$tips('服务器发生错误','error').mess_age()
          }
        }
        // 分页触发事件
        function currentchange(e) {
          // console.log(e);
          oper_data.page = e - 1
          get_order()
        }

        // 点击详细菜单传值给子组件
        const detailed = async(id) => {
          try {
            const res = await new proxy.$request(proxy.$urls.m().vieworder + '?id=' + id).modeget()
            // console.log(res);
            dialog.value.popup(res.data.data)
          }catch(e) {

          }
        }

        return {...toRefs(oper_data),currentchange,detailed,dialog}
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
