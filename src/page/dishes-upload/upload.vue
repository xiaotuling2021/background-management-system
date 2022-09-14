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
            <div class="opload-option">
                <el-input type="number" v-model="unitprice" placeholder="请输入菜品价格" clearable />
                <el-select v-model="compvalue" class="m-2" placeholder="请选择单位" size="large">
                    <el-option
                      v-for="item in company"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                </el-select>
                <el-input v-model="unit" placeholder="请输入自定义单位" clearable />
                <div><el-button type="success" style="width:100%;padding: 12px 20px;">添加自定义单位</el-button></div>
            </div>
        </div>
        <!-- 菜品图片 -->
        <div class="image-view-title">
            <div class="image-list">菜品图片</div>
            <div>
                <!-- <el-upload
                  class="avatar-uploader"
                  
                  :action="img_url"
                  list-type="picture-card"
                  accept=".jpg,.png,.webp,.jpeg,.jfif"
                  :on-preview="onpreview"
                  :on-remove="onremove"
                  :on-success="onsuccess"
                  :on-error="onerror"
                  :on-progress="onprogress"
                  :before-upload="project"
                  :file-list="goodsimage"
                  :limit="1"    
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width:100%;" />
                  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload> -->

                <el-upload
                  :action="img_url"
                  list-type="picture-card"
                  accept=".jpg,.png,.webp,.jpeg,.jfif"
                  :on-preview="onpreview"
                  :on-remove="onremove"
                  :on-success="onsuccess"
                  :on-error="onerror"
                  :on-progress="onprogress"
                  :before-upload="project"
                  :file-list="goodsimage"
                  :limit="1" 
                >
                  <el-icon><Plus /></el-icon>
              
                </el-upload>
              
                <el-dialog v-model="dialogVisible">
                  <img style="width:100%;" w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>



            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ArrowRight,Plus } from '@element-plus/icons-vue'
import {shallowRef,reactive,toRefs,getCurrentInstance,toRaw} from 'vue'
export default {
    components:{
        Plus
    },
    setup() {
        const icon = shallowRef(ArrowRight)
        const {proxy} = getCurrentInstance()
        const img_url = proxy.$urls.m().uploadres
        const oper_data = reactive({
            catevalue:'',//选中的菜品类目
            name:'',//菜品名称
            unitprice:'',//输入的价格
            compvalue:'',//选中的单位
            unit:'',//选中的自定义单位
            dialogVisible:false,
            dialogImageUrl:'',
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
            goodsimage:[]//上传接收的图片
        })

        // 点击文件列表中已上传的文件时的钩子:点击展开大图时触发
        const onpreview = (file)=> {
            oper_data.dialogImageUrl = toRaw(file).url;
            oper_data.dialogVisible = true;
        }
        // 文件列表移除文件时的钩子
        const onremove = (file,fileList)=> {
            oper_data.goodsimage = []
        }
        //文件上传成功时的钩子
        const onsuccess = (res,file,fileList)=> {
            oper_data.goodsimage.push({url:res.data,uid:file.uid})
        }
        //文件上传失败时的钩子
        const onerror = (err,file,fileList)=> {
        }
        //文件上传时的钩子
        const onprogress = (event,file,fileList)=> {
        }
        //上传文件之前的钩子
        const project = (file)=> {
        }
                  






        return {icon,...toRefs(oper_data),img_url,
                onpreview,onremove,onsuccess,onerror,onprogress,project}
    },
}
</script>

<style scoped>
  .opload-option {
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .opload-option div {
    width: 25% !important;
    margin-right: 5px;
  }
</style>