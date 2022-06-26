//需求一
//从前端返回一个res后端接收一个res
//后端返回之后,前端接收回来在拼接一个aaa,



//后端接收之后,返回数据在返回给前端一个bbb
function fns(address){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
          let names=['小洪','小白','小涛']
          resolve(address)
        },2000)
    })
    
}
/*fns('address').then(res=>{
    console.log(res)
})*/
//第一种方案利用回调地狱进行回调
/*fns('aaa').then(res=>{
    //拼接aaa
    return fns(res+'bbb').then(res=>{
         return fns(res+'ccc').then(res=>{
             console.log(res)
         })
    })
    
})*/
//第二种:promise中的then
/*fns('aaa').then(res=>{
    return fns(res+'bbb')
}).then(res=>{
    return console.log(fns(res+'ccc'))
})*/

//第三种方案利用promise和yield
function* fn(){
  const res= yield fns('aaa')
 
  const res1=yield fns(res+'bbb')

  const res2=yield fns(res1+'ccc')
 console.log(res2)
}
const generator=fn()//这里会返回一个promise对象
generator.next().value.then(res=>{
    generator.next(res).value.then(res=>{
        generator.next(res).value.then(res=>{
            generator.next(res)
        })
    })
})


//第四种方案安装npm install co 解决异步的这种需求
/*function* getData(){
    const res1=yield fns('why')
    const res2=yield fns(res1+'aaa')
}
const co=require('co')
co(getData)*/

//第五种方案利用async,awiat解决
/*async function getData(){
    const res1= await fns('aaa')
    const res2= await fns(res1+'bbb')
    const res3= await fns(res2+'ccc')
    console.log(res3)
}
getData()*/