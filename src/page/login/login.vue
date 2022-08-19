<template>
    <div id="backcont">
        <div class="meituan-content">
            <div class="login-cont">
                <div class="meituan-title">扫码点餐商户端</div>
                <div class="meituan-user">
                    <p>账号</p>
                    <el-input class="inptflex" v-model="account" placeholder="请输入账号" clearable />
                </div>
                <div class="meituan-user">
                    <p>密码</p>
                    <el-input class="inptflex" v-model="password" placeholder="请输入密码" clearable show-password />
                </div>
                <!-- 注册和登录按钮的切换 -->
                <div class="reg-view" @click="regi = regi == '登录'?'注册':'登录'"><p>{{regi}}</p></div>
                <!-- 注册和登录按钮 -->
                <el-button v-if="regi == '注册'" @click="signin" type="success" class="meituan-btn">登录</el-button>
                <el-button v-else type="success" @click="register" class="meituan-btn">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive,toRefs,getCurrentInstance, onMounted} from 'vue'
export default {
    setup() {
        const {proxy} = getCurrentInstance()
        const user = reactive({
            account: '',
            password: '',
            regi: '注册'
        })
        const signin = () => {
            console.log(user.account,user.password);
        }
        const register = async() => {
            const obj = {account:user.account,password:user.password}
            const res = await new proxy.$request(proxy.$urls.m().register,obj).modepost()
            console.log(res);
            if (res.status !== 200) {
                new proxy.$tips(res.data.msg,'warning').mess_age()
            }else {
                user.regi = '注册'
            }
        }
        return {...toRefs(user),signin,register}
    }
}
</script>

<style scoped>

</style>