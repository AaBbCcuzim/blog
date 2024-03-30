# ES8

## async 和 await

**async 和 await 两种语法结合可以让异步代码像同步代码一样**

### async

```
async function fn(){
return new Promise((resolve,reject)=>{
        
    });
}
```

- **返回的结果不是一个** `Promise`类型对象，返回的结果就是成功 `Promise`对象
- **抛出错误，返回的结果是一个失败的** `Promise`
- **返回的结果如果是一个** `Promise`对象，则状态与该对象一致

### await

```
const p = new Promise((resolve,reject)=>{
        
});

async function main(){
    try{
        let result = await p;
        console.log(result);
    } catch(e) {
        console.log(e);
    }

}
```

- `await`必须写在 `async`函数中
- `await`右侧的表达式一般为 `promise`对象
- `await`返回的是 `promise`成功的值
- `await`的 `promise`失败了，就会抛出异常，需要通过 `try...catch`捕获处理
