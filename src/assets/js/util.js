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
