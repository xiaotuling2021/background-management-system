<template>
    <!-- 柱状图、饼状图 -->
    <el-row :gutter="20">
      <el-col :span="12">
          <div class="grid-content">
            <div class="grid_title">菜品销量排行榜</div>
            <div id="Piechart"></div>
          </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
            <div class="grid_title">客户年龄分布</div>
            <div id="Columnar"></div>
          </div>
      </el-col>
  </el-row>
</template>

<script>
import { Pie,Column } from '@antv/g2plot';
import {onMounted,watch} from 'vue'
export default {
    props:{pieChert:Array,hisTogram:Array},
    setup(props) {
        // 饼图
        const pieChart = (data)=>{
          const piePlot = new Pie('Piechart', {
            appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'name',
            radius: 0.8,
            label: {
              type: 'outer',
              content:'{name}{value}'
            },
            interactions: [{ type: 'element-active' }],
          });
          //渲染到html上面
          piePlot.render();
        }
        // 柱状图
        const coLumnar = (data)=>{
          const columnPlot = new Column('Columnar', {
            data,
            xField: 'age',
            yField: 'sales-volume',
            label: {
              // 可手动配置 label 数据标签位置
              position: 'middle', // 'top', 'bottom', 'middle',
              // 配置样式
              style: {
                fill: '#FFFFFF',
                opacity: 0.6,
              },
            },
            xAxis: {
              label: {
                autoHide: true,
                autoRotate: false,
              },
            },
            meta: {
              'age': {
                alias: '类别',
              },
              'sales-volume': {
                alias: '销售额',
              },
            },
          });
          
          columnPlot.render();
        }

        // 需要持续不断的获取数据所以需要watch时间,watch实践里面一个值是绑定的属性
        watch(props,(newval,oldval)=>{
          pieChart(newval.pieChert)
          coLumnar(newval.hisTogram)
        })
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
</style>