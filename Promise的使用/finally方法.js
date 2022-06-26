//finally方法:表示无论Promise对象无论变成fulfilled还是reject状态,最终都会被执行的代码
//finally方法时不接受参数的,因为无论前面时fulfilled,还是reject状态,它都会执行
const promise=new Promise((resolve,reject)=>{
    reject('reject message')
})
promise.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log('fillage')
})