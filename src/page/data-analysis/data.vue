<template>
    <div class="ordering" v-loading.fullscreen.lock="fullscreenLoading">
        <div class="heading">数据分析</div>
        <div>
            <firstfloor :pieChert="pieChert" :hisTogram="hisTogram" />
            <Second :lineChart="lineChart" />    
        </div>
    </div>
</template>

<script>
import firstfloor from './component/first-floor.vue'
import Second from './component/second.vue'
import {reactive,getCurrentInstance,onMounted,toRefs,ref} from 'vue'
export default {
    components: {
        firstfloor,
        Second
    },
    setup() {
        const {proxy} = getCurrentInstance()
        const fullscreenLoading = ref(true)
        const ansLysis = reactive({
            pieChert:[],//饼图
            hisTogram:[],//柱状图
            lineChart:[],//折线图
        })
        onMounted(()=>{
            get_data()
        })
        const get_data = async()=>{
            try{
                const res = await new proxy.$request(proxy.$urls.m().analysis).modeget()
                ansLysis.pieChert = res.data.data[0]
                ansLysis.hisTogram = res.data.data[1]
                ansLysis.lineChart = res.data.data[2]
                fullscreenLoading.value = false
            }catch(e){
                new proxy.$tips('服务器发生错误','error').mess_age()
            }
        }

        return {...toRefs(ansLysis),fullscreenLoading}
    },
}
</script>

<style scoped>

</style>