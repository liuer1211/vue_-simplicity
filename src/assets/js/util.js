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
