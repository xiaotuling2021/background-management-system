<template>
    <div>
        <div class="sidebar-top">
            <div>山东老饭馆后台管理系统</div>
            <div>退出</div>
        </div>
        <div class="sidebar-cont">
            <el-menu>
                <el-menu-item index="1">菜单一</el-menu-item>
                <el-menu-item index="2">菜单二</el-menu-item>
                <el-menu-item index="3">菜单三</el-menu-item>
                <el-sub-menu index="4">
                    <template #title>菜单四</template>
                    <el-menu-item index="4-1">菜单4-1</el-menu-item>
                    <el-menu-item index="4-2">菜单4-2</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

</style>