//catch的使用
const promise =new Promise((resolve,reject)=>{
    reject('throw err')
})

promise.then(res=>{

}).then(res=>{
    throw new Error('then enable')
}).catch(err=>{
    //这里会显示最近的抛出异常
    console.log('err')
})