export const  upper = (string) => {//大写
    return string.toLocaleUpperCase()
}

export const  lower = (string) => {//小写
    return string.toLocaleLowerCase()
}

export const  StrRep = (string,replaceString,afterRreplaceString) => {//字符串替换
    let type = typeof(replaceString)
    console.log(type)
    switch (type){//判断类型
        case 'string'://字符串类型直接替换
         return   string.replace(replaceString,afterRreplaceString)
        break;

        case 'object'://是对象类型判断是数组还是正则
            if(replaceString instanceof RegExp){
                return string.replace(replaceString,afterRreplaceString) 
            }else if(replaceString instanceof Array){
                for(var i in replaceString){
                    string.replace(replaceString[i],afterRreplaceString) 
                }
                return string
            }else{
                console.error('请传入字符串或者数组类型')
                return 'error'
            }
        break; 

        default:
            console.error('请传入字符串或者数组类型')
            return 'error'
        break;
    }

}

//上传图片 查看图片原始大小
// var reader = new FileReader();
// var img = new Image();
// let file = e.target.files[0];
//     reader.readAsDataURL(file);
// reader.onloadend = function(event){
//     img.src = event.target.result;
//         img.onload = function(event) {
//             console.log(img.width,img.height);
//         }
// }
//文件大小 1024*1024* 多少M
