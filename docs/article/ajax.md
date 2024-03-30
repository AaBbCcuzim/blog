# AJAX

**AJAX 全称为 Asynchronous JavaScript And XML ，就是异步的 JS 和 XML。通过 AJAX 可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**。AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。**

## xhr

**xhr api 文档：**[xhr](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

## axios

**axios 中文文档：**[axios](http://www.axios-js.com/zh-cn/docs/index.html)

```
// get 请求
axios.get('url',{
    // url 参数
    params: {
        
    },
    // 请求头信息
    headers: {
        
    }
}).then(value => {
    
})

// post 请求
axios.post('url',{
    // 请求体
},{
    // url 参数
    params: {
        
    },
    // 请求头信息
    headers: {
        
    },
}).then(value => {
    
})

// 通用请求
axios({
    url: '',
    // url 参数
    params: {
        
    },
    // 请求头信息
    headers: {
        
    },
    // 请求体信息
    data: {

    }
}).then(value => {
    
})
```
