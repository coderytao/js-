//创建多个promise获取结果可以通过all拿到
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('你好李银何')
    })


})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('你好,coderwhy')
    })
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('你好,小涛')
    })
})
//promise.all方法这里会拿到上面的三个promise
/*Promise.all([p1,p2,p3,'aaa']).then(res=>{
    console.log(res)
})*/

//当上面的情况有一个为reject的时候,此时的all会变成reject的状态

/*Promise.all([p1,p2,p3,'aaa']).then(res=>{
    console.log(res)
}).catch(err=>{
  console.log(err)
})*/

//当有一个需求:此时有一个reject的时候,我们想要里面的resolve
//此时可以用allSettled:当所有的对象resolve状态执行以后,再去执行reject的状态

Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})


