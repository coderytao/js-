//设置三种状态
var PROMISE_STATUS_PEDDING='pedding'
var PROMISE_STATUS_FULLING='fulling'
var PROMISE_STATUS_REJECT='reject'


class HYpromise{
    constructor(executor){
      //首先这里设置成pedding状态,并且将value和reason都设置成undefined
      this.status=PROMISE_STATUS_PEDDING
       this.value=undefined
       this.reason=undefined
       this.onFulfilledcallbacks=[]
       this.onRejectedcallbacks=[]

     const resolve=(value) => {
        //如果这里为pedding状态,则将它改变为fullind状态
       if(this.status===PROMISE_STATUS_PEDDING){
         this.status= PROMISE_STATUS_FULLING
         //延迟调用
         queueMicrotask(()=>{
          this.value=value
        

          //遍历所有的函数
          this.onFulfilledcallbacks.forEach(fn=>{
            fn(this.value)
          })
         })
       
       }
       //调用onFulfilled状态
      
      }
      const reject=(reason)=>{
  //如果这里为pedding状态,则将它改变为reject状态
  if(this.status=== PROMISE_STATUS_PEDDING){
    this.status=PROMISE_STATUS_REJECT
    queueMicrotask(()=>{
      this.reason=reason
      
      this.onRejectedcallbacks.forEach(fn=>{
        fn(this.reason)
      })
    })
    
  }
  //调用onRejected()状态
 
      }
      executor(resolve,reject)
    }
//执行then方法
  then(onFulfilled,onRejected){
    //将成功的回调放到数组中
      this.onFulfilledcallbacks.push(onFulfilled)
      //将失败的回调放到数组中
      this.onRejectedcallbacks.push(onRejected)
  }
    
   
  

   
}

const promise=new HYpromise((resolve,reject)=>{
 resolve('hello world')
})

promise.then((res)=>{
  console.log(res)
})

//解决then方法的多次和并调用,就是将所有的能调用resolve都放到一个数组里面进行调用

promise.then(res=>{
  console.log(res)
})


promise.then(res=>{
  console.log(res)
})

//少个settimeout
