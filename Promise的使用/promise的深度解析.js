function foo(){
   return new Promise((resolve,reject)=>{
       resolve('小洪')
   }
       
   )
}

const fooPromise=foo()
fooPromise.then((res)=>{
    console.log(res)
},(err)=>{

})