// 放置所有的请求接口
const url = "http://element.thexxdd.cn/api/"

const urls = class{
    static m() {
        // 注册接口
        const register = `${url}register`
        // 登录接口
        const login = `${url}login`
        // 用户列表
        const pulluserlist = `${url}pulluserlist`
        // 获取桌号
        const gettable = `${url}gettable`
        // 获取订单
        const obtainorder = `${url}obtainorder`
        // 获取详细菜单
        const vieworder = `${url}vieworder`

        return {register,login,pulluserlist,gettable,obtainorder,vieworder}
    }
}

export default urls