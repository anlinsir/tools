async function getData() {
    // throw new Error("报错啦")
    try {
        throw new Error("报错啦")
        console.log(123456)
        return response;
    } catch (error) {
        console.log(error);
    }
}

getData()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
// 复制代码如果 async 函数中有 try catch，那么 async 函数将直接捕捉并处理到内部的错误, 不会继续执行后面的代码。而如果 async 函数中没有 try catch，那么错误会导致返回的 Promise 直接转移到 rejected 状态，进而在返回的 Promise.catch() 方法中捕捉到。
// 三、async & await 应用
// 我们再一次封装 ajax 方法~
const Ajax = ({
    method = 'get',
    url = '/',
    data,
    async = true
}) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let res = JSON.parse(xhr.responseText)
                resolve(res)
            }
        }
        xhr.open(method, url, async)
        if (method === 'get') {
            xhr.send();
        }
        if (method === 'post') {
            let type = typeof data
            let header
            if (type === 'string') {
                header = 'application/x-www-form-urlencoded'
            }
            else {
                header = 'application/json'
                data = JSON.stringify(data)
            }
            xhr.setRequestHeader('Content-type', header)
            xhr.send(data);
        }
    })
    
}

Ajax.get = (url) => {
    return Ajax({url})
}


async function getData() {
    try {
        let data = await Ajax.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
        return data;
    } catch (error) {
        console.log(error);
    }
    
}

getData()
.then(res => {
    console.log(res);
})

