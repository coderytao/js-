//then方法的几种状态

//第一:当return 访问没有值的时候就会出现undefiend
/*const promise=new Promise((resolve,reject)=>{
    resolve('hello world')
})

promise.then(res=>{
   
}).then(res=>{
    return  console.log(res)//如果这里返回一个return就会包裹一个promise 
})*/

//第二:当return 返回的是一个new promise 的时候,这里就会取代以前的promise
/*const promise=new Promise((resolve,reject)=>{
    resolve('你好阿,李银河')
})



promise.then(res=>{
    //这里会形成一个新的回调,会取代前面的Promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('你好阿,coderwhy')
          
        },3000)
       
       
    })
}).then(res=>{
    console.log(res)
})*/

//当返回的是一个对象,并且该对象实现了thenable,这里也会取代以前的值
const promise=new Promise((resolve,reject)=>{
    resolve('你好阿,小黎老师')
})

promise.then(res=>{
    return {
        then:function(resolve,reject){
            resolve(22)
        }
    }
}).then(res=>{
    console.log(res)
})

