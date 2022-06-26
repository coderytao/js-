var PROMISE_STATUS_FULLING='fulling';
var PROMISE_STATUS_PEDDING='pedding';
var PROMISE_STATUS_REJECT='reject';
class Promise{
    constructor(executor){
      this.status=PROMISE_STATUS_FULLING
      this.value=undefined;
      this.status=undefined;
      
      const resolve = (value)=>{
        if(this.status==PROMISE_STATUS_PEDDING){
          queueMicrotask(()=>{
            this.value=value
            this.onFulfilled()
          })
        }

      }
    const reject=(reason)=>{
       if(this.status==PROMISE_STATUS_PEDDING){
        queueMicrotask(()=>{
            this.reason=reason
            this.onRejected()
          })
       }
      }
      executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        this.onFulfilled=onFulfilled
        this.onRejected=onRejected
    }
  
   
}



const con=new Promise((resolve,reject)=>{
     resolve('hello world')
})
con.then(res=>{

},err=>{

})

const coderwhy=new promise((resolve,reject)=>{
    resolve('hello world')
})
coderwhy.then(res=>{
    
},err=>{

}).then(res=>{
   return console.log(res)//undefined这里只会打印最近的promise
}

)

