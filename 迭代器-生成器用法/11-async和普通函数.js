//async和普通函数不同,async里面会返回promise,并且可以执行里面的then方法
//async与普通函数返回一个throw new Error,后续代码不会执行。
async function foo(){
   console.log('aa')
   console.log('bb')
   console.log('cc')
   //return 返回三个不同的值
   //return undefined

   //会return对象一个thenable方法
  return {
    then:function(resolve,reject){
      resolve('aaa')
    }
   
  }
  //会返回一个promise
  return new Promise((resolve,reject)=>{
       resolve('aa')
    })
  
  }
foo().then(res=>{
    console.log(res)//return 会返回undefined
})



