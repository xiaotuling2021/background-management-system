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
                <el-button v-if="regi == '注册'" @click="signin" type="success" :loading="load" class="meituan-btn">登录</el-button>
                <el-button v-else type="success" @click="register" :loading="load" class="meituan-btn">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive,toRefs,getCurrentInstance, onMounted} from 'vue'
import {useRouter} from 'vue-router'
export default {
    setup() {
        const {proxy} = getCurrentInstance()
        const router = useRouter()
        const user = reactive({
            account: '',
            password: '',
            regi: '注册',
            load: false
        })
        const signin = async() => {
            user.load = true
            try {
              const obj = {account:user.account,password:user.password}
              const res = await new proxy.$request(proxy.$urls.m().login,obj).modepost()
              console.log(res);
              if (res.status !== 200) {
                new proxy.$tips(res.data.msg,'warning').mess_age()
              }else {
                // 跳转到内容页面
                localStorage.setItem('token',res.data.data.token)
                router.push({name:'index'})
              }
              user.load = false
            } catch (e) {
              new proxy.$tips('服务器发生错误','warning').mess_age()
            }
        }
        const register = async() => {
            user.load = true
            try {
              const obj = {account:user.account,password:user.password}
              const res = await new proxy.$request(proxy.$urls.m().register,obj).modepost()
              console.log(res);
              if (res.status !== 200) {
                  new proxy.$tips(res.data.msg,'warning').mess_age()
              }else {
                  user.regi = '注册'
              }
              user.load = false
            } catch (e) {
                console.log('服务器发生错误');
            }
        }
        return {...toRefs(user),signin,register}
    }
}
</script>

<style scoped>

</style>