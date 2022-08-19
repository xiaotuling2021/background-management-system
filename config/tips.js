// 公共弹窗
import { ElMessage } from 'element-plus'

const tips = class{
    constructor(message=message,type="success") {
        this.message = message
        this.type = type
    }
    mess_age() {
        ElMessage({
            message: this.message,
            type: this.type,
            duration: 1500
          })
    }
}
export default tips