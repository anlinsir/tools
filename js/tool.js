//查看字符串字节长度
function bytesLength(str,num){
    num = num || 0
    for(var i in str){
        num += str.charCodeAt(i) <= 255 ? 1 : 2
    }
    return num
}