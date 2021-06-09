/**
 * 隐藏手机号码
 * @param val {Number, String} 转换的字符串对象
 * @param retain {Number} 保留位数
 * @return {String}
 */
//  export privatePhone = function(val,retain = 4){
//     if(!NUMBER(val) || String(val).length !== 11 || retain==0 ) return val;
//     let phone = String(val)
//     let digit = 11 - 3 - retain
//     let reg = new RegExp(`^(\\d{3})\\d{${digit}}(\\d{${retain}})$`)
//     return mobile.replace(reg,`$1${'*'.repeat(digit)}$2`)
// }

// 时间戳转时分秒
function getformatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
  };
  
  function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  };
  
   // 时间过滤
   export function formatDate(time) {
    return getformatDate(new Date(time), "yyyy-MM-dd hh:mm");
  }