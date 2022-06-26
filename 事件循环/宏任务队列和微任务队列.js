//规范:
//1：mian script中的代码优先执行
//2：在执行任何宏任务执行前,必须先保证微任务队列清空,如果不为空,那么就优先执行微任务队列中的任务(回调)

//mian script 2:new promise会被加入mian script 3:调完resolve后的promise.then后在接一个promsie会被加入微任务队列中。
//宏任务:callback ,定时器,ajax,dom,ui-Rendering  settimeout里面有东西,也会被规范。
//微任务:queueMicrotask, Promise.then mutation Observer Api  
//async调用异步函数时,异步里面的代码不会作为异步,就会当做mian script ,而当最后return为undefined后面的代码被加入微任务队列中


/*main script       微任务                        宏任务
  Promsie1          Promise1.then                setTimeout1  
  console.log       queueMicrotask               setTimeout2
  Promise2          Promise2.then       
*/
setTimeout(()=>{
console.log('helloworld')
},1000)

queueMicrotask(()=>{
    const hello='你好'
})

const tao=new Promise((resolve,reject)=>{
    resolve('执行代码')
})

tao.then(res=>{
    console.log(res)
})

function foo(){
 console.log('11')   
}


function bar(){
    foo()
    console.log('你好')
}
bar



