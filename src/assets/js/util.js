// 工具
export const dateUtil = {
  // 转化日期格式yyyy-MM-dd
  formatDateStr: (date) => {
    let MM = '',
      DD = '';
    if (date.getMonth() > 8) {
      MM = (date.getMonth() + 1).toString();
    } else {
      MM = '0' + (date.getMonth() + 1).toString();
    }
    if (date.getDate() > 9) {
      DD = date.getDate().toString();
    } else {
      DD = '0' + date.getDate().toString();
    }
    return date.getFullYear() + '-' + MM + '-' + DD;
  },
  // 字符串截取  https://www.jb51.net/article/74614.htm  https://www.cnblogs.com/liubingyjui/p/10820491.html
  toChangeStr(val) { // 时间转换 10:00 -1000  ； 01:00 - 100 ； 01 - 1； 22 - 22
    // 转字符串
    val = val.toString()
    // 通过: 截取成数组，遍历修改
    let list = val.split(":")
    let newStr = ''
    list.forEach((v,index) => {
      let str = v.substr(0,1) // 表示从start位置开始，截取length长度的字符串
      let st = ''
      // 只对第一个做操作
      if (index === 0) {
        // 如果是0  01 02 。。 如果不是0  1 2 3
        if (str === '0') { // 截取除第一位的所有字符串 转int
          st = v.substr(1, v.length)
        } else { // 直接返回 int
          st = v
        }
      } else {
        st = v
      }
      // 拼接。不论是一个或多个拼接成一个字符串
      newStr = newStr + st
    });
    // 转成int 返回
    return newStr
  }
}

// element-ui 更改工具类
export const eleUtil = {
  // 提示框
  // this.toChangeTip('error','密码不能为空!')
  toChangeTip(data1 = 'error', data2 = '', data3 = '2000', data4 = true, data5 = '30'){
    this.$message({
      type: data1, // 类型
      message: data2, // 内容
      duration: data3, // 豪秒
      center: data4, // is居中
      offset: data5 // 距顶 px
    });
  }
}
