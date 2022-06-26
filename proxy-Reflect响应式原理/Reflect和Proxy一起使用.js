const obj={
    name:'why',
    age:20
}
const objProxy=new Proxy(obj,{
   get:function(target,key){
       console.log('get----')
       //使用Reflect的目的是不在让代理函数objProxy进行访问到obj的基本数据
      return  Reflect.get(target,key)

       
   },
   set:function(target,key){
       console.log('set------')
      return Reflect.set(target,key)
   }
})

console.log(objProxy.name)

objProxy.name='小洪'