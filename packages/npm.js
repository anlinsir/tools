//clipboard -- 复制文本
//npm install clipboard --save
//import Clipboard from 'clipboard'
// <button id="copyAddress" :data-clipboard-text="recharge.address" @click="copyAddress">复制地址</button>
export const copyAddress = () => {
    var clipboard = new Clipboard('#copyAddress')

    clipboard.on('success',e =>{
        
        clipboard.destroy() //使用destroy可以清楚缓存
    })
    clipboard.on('error',e =>{
        alert('failed')
        clipboard.destroy()
    }) 
} 
  