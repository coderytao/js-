//await返回关键字,并且await必须在async中使用。
//1-await必须跟上一个表达式
/*const genator=new Promise((resolve,reject)=>{

   setTimeout(()=>{
      resolve('222')
   },2000)
})

async function foo(){
   const res= await genator//await这里会返回一个promsie的resolve,当这里执行完才可以继续返回下面代码。
   console.log(res)

   console.log('666')
  
}
foo()*/

//2-跟上其他的值
//await返回其他的三个值
async function foo(){
    //1:跟上其他的普通表达式,相当于返回一个promise
    const res=await 123
    console.log(res)

    //2:thenable方法
    await{
     then:function(resolve,reject){
         resolve(111)
     }
    }
    //3:返回一个promise
    const res1=new Promise((resolve,reject)=>{
        resolve(222)
    })
    console.log(res1)
 }
 foo()