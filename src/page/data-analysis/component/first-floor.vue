<template>
    <!-- 柱状图、饼状图 -->
    <el-row :gutter="20">
      <el-col :span="12">
          <div class="grid-content">
            <div class="grid_title">菜品销量排行榜</div>
            <div id="Piechart"></div>
          </div>
      </el-col>
      <el-col :span="12"><div>2</div></el-col>
  </el-row>
</template>

<script>
import { Pie } from '@antv/g2plot';
import {onMounted} from 'vue'
export default {
    setup() {
        onMounted(()=>{
            pieChart()
        })
        // 饼图
        const pieChart = ()=>{
          const data = [
            { type: '分类一', value: 27 },
            { type: '分类二', value: 25 },
            { type: '分类三', value: 18 },
            { type: '分类四', value: 15 },
            { type: '分类五', value: 10 },
            { type: '其他', value: 5 },
          ];
          
          const piePlot = new Pie('Piechart', {
            appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'type',
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