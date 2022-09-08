// 放置所有的请求接口
const url = "http://element.thexxdd.cn/api"

const urls = class{
    static m() {
        // 注册接口
        const register = `${url}/register`
        // 登录接口
        const login = `${url}/login`
        // 用户列表
        const pulluserlist = `${url}/pulluserlist`

        return {register,login,pulluserlist}
    }
}

export default urls