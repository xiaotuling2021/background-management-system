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
        // 图片上传接口
        const uploadres = `${url}uploadres`
        // 获取菜品类目
        const obtaincate = `${url}obtaincate`
        // 获取菜品单位
        const obtainunit = `${url}obtainunit`
        // 添加菜品单位
        const dishunit = `${url}dishunit`
        // 提交菜品
        const putdishes = `${url}putdishes`
        // 获取菜品数据
        const obtaindishes = `${url}obtaindishes`
        // 下架菜品
        const fromsale = `${url}fromsale`
        // 编辑菜品
        const editdishes = `${url}editdishes`

        return {register,login,pulluserlist,gettable,obtainorder,vieworder,uploadres,
            obtaincate,obtainunit,dishunit,putdishes,obtaindishes,fromsale,editdishes}
    }
}

export default urls