// var V_tel = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/ 
// var V_tel_Mu = /^((\+?86)|(\(\+86\)))?(1[012356789][012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/ 
// //电话号码正则
// var V_email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
// //邮箱正则
// var V_En = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
//     V_Cn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
// //中英文 特殊字符判断
// var V_space=/^\s+|\s+$/g    
//     // replace(/\s/g, '')
// // str.replace(/^\s+|\s+$/g, '')
// //替换空格正则
export const V_email = (email) =>{
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)
}
export const ENCN = (string,reg) =>{//判断是否有特殊符号，字符串，判断中文还是英文的
    if(reg){
        if(reg === 'en'){
            if(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(string)){
                return true
            }else{
                return false
            }
        }else if(reg === 'cn'){
            if(/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im.test(string)){
                return true
            }else{
                return false
            }
        }
    }else{
        if(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(string) && /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im.test(string)){
            return true
        }else{
            return false
        }
    }
    
}
export const device_type = () =>{
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return 'Android';
    } else if (isIOS) {
        return 'IOS';
    } else {
        return 'pc';
    }
} 


