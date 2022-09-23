<template>
    <div>
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="grid-content">
              <div class="grid_title">菜品分类销量趋势</div>
              <div id="broken-line"></div>
              <!-- 切换按钮 -->
              <div class="query-time">
                <el-radio-group v-model="sort_value" size="small">
                  <el-radio-button v-for="(item,index) in el_radil" :key="index" :label="item" />
                </el-radio-group>
              </div>
            </div>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import { Line } from '@antv/g2plot';
import {watch,reactive,toRefs,getCurrentInstance} from 'vue'
export default {
    props:{lineChart:Array},
    setup(props) {
        const {proxy} = getCurrentInstance()
        const data_linechart = reactive({
          data:[],
          sort_value:'素菜类',
          el_radil:['素菜类','荤菜类','酒水类','龙虾'],
          line_update:null
        })
        const brokenLine = ()=>{ 
          const line = new Line('broken-line', {
            data:data_linechart.data,
            xField: 'month',
            yField: 'sales-volume',
            label: {},
            point: {
              size: 5,
              shape: 'diamond',
              style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
              },
            },
            tooltip: { showMarkers: false },
            state: {
              active: {
                style: {
                  shadowBlur: 4,
                  stroke: '#000',
                  fill: 'red',
                },
              },
            },
            meta: {
              'year':{alias:'月份'},
              'value':{alias:'销售额'}
            },
            interactions: [{ type: 'marker-active' }],
          });
          
          line.render();
          data_linechart.line_update = line
        }

        // 监听父组件传来的数据
        watch(props,(newval,oldval)=>{
          data_linechart.data = newval.lineChart
          brokenLine()
        })

        // 监听选中哪个分类菜品
        watch(()=>data_linechart.sort_value,(newVal,oldVal)=>{
          Switch()
        })

        // 请求分类菜品切换的数据
        const Switch = async()=>{
          try{
            const res = await new proxy.$request(proxy.$urls.m().switchcate + '?cateid=' + data_linechart.sort_value).modeget()
            data_linechart.line_update.changeData(res.data.data)
          }catch(e){

          }
        }

        return {...toRefs(data_linechart)}
    },
}
</script>

<style scoped>
  .el-row{
    margin-bottom: 20px;
  }
  .grid-content{
    background-color: #fff;
  }
  .grid_title{
    font-weight: 700;
    padding: 10px;
    border-bottom: 1px solid #eee;
    margin-top: 20px;
  }
  .query-time {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
  }
</style>