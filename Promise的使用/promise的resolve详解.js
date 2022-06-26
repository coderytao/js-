//状态的变化

//1:传入一个普通的值或者对象pending->fulfilled
new Promise((resolve,reject)=>{
    resolve('hello world') 
}).then(res=>{
   console.log(res)
},err=>{
   console.log(err)
})
//2:传入一个promise
//那么当前的promise的状态会由传入的promise决定相当于状态进行了移交
const newpromise=new Promise((resolve,reject)=>{
   reject('err message') //这里的状态就会覆盖原先的resolve,所以会打印err message
})
new Promise((resolve,reject)=>{
    resolve(newpromise) 
}).then(res=>{
   console.log(res)
},err=>{
   console.log(err)
})

//3:如果传入的是一个对象,并且这个对象有一个then方法决定后续的方法
new Promise((resolve,reject)=>{
   const obj={
       then:function(resolve,reject){
          resolve('resolve message')
       }
   }
   resolve(obj)
}).then(res=>{
   console.log(res)
},err=>{
   console.log(err)
})

