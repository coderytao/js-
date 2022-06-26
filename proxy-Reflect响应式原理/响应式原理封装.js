//利用类的封装来进行响应式
class Depend{
   constructor(){
       //创建数组让他们自动执行
       this.reactiveFns=[]
   }
   addDepend(reactiveFns){
       //进行回调,当一个属性改变时就添加daoreaciveFns
       this.reactiveFns.push(reactiveFns)
   }
   notify(){
       this.reactiveFns.forEach(fns=>{
            fns()
       })
   }
}
//封装一个获取depend函数
const targetMap=new WeakMap()
function getDepend(target,key){
    const map=targetMap.get(target)
    if(!map){
        map=new Map()
        targetMap.set(target,map)
    }
    //根据key获取depend对象
    const depend=map.get(key)

    //如果没有值就新建一个depend
    if(!depend){
        depend=new Depend()
        map.set(key,depend)
    }
    return depend
}

//监听对象的属性用new Proxy当对象的属性发生变化的时候,这样就不会自己手动的取监听了
const objProxy=new Proxy(obj,{
  get:function(target,key,receiver){
     return Reflect(target,key,receiver)
  },


    set:function(target,key,receiver){
         Reflect(target,key,receiver)
         //当对象发生变化的这里就用Depend.notitfy()
       
//在这里执行
     const depend=getDepend(target,key)
     depend.notify()
    }
   
  
    
})

//封装第一个响应式
const depend=new Depend()
function wathFns(fn){
    depend.addDepend(fn)
}

//对象的响应式
const obj={
    name:'why',//depned对象
    age:18//depend对象
}
//监听第一个响应式
wathFns(function(){
    const newName=objProxy.name
    console.log('你好阿,李银河')
})

//监听第二个响应式
wathFns(function(){
    console.log(objProxy.name,'demo function --------')
})

objProxy.name='xiaohong'