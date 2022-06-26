//2:传入Promise
const promise=Promise.resolve(new Promise((resolve,reject)=>{
    resolve('111')
}))
//类似于
const prom=new Promise((resolve,reject)=>{
    resolve()
})

prom.then(res=>{
    return new Promise((resolve,reject)=>{
        resolve('你好,小涛')
    })
}).then(res=>{
    console.log(res)
})
//reject方法
const p=Promise.reject('rejectd,messageg')

//类似于
new Promise((resolve,reject)=>{
    reject('rejectd,messageeg')
})