//在es6中新增一个Proxy类,这个类从名字就可以看出,适用于帮助我们创建一个代理.
//作用:我们希望监听一个对象的相关操作,那么我们就可以先创建一个代理对象(proxy)
//对该对象的所有操作,都可以代理来完成,代理对象可以监听我们想要对原型对象进行那些操作.

const obj={
    name:'why',
    age:18

}



//创建代理对象Proxy,就是将obj对象属性给Proxy对象代理。
//第一个参数为代理那个对象,第二个代理对象的操作方法
const objProxy=new Proxy(obj,{
    //使用get方法访问对象的属性值
    
    //get的三个参数:1:target=>目标对象,2:key=>获取对象的key
    get:function(target,key){
        //直接返回对象的属性值
       // console.log(target[key])
       console.log(`访问的属性是${key}`,target)
        return target[key]

    },

    //set方法设置对象的属性值
    //get的三个参数:1:target=>目标对象,2:key=>获取对象的key,3:设置新的属性
    set:function(target,key,newvalue){
        console.log(`监听到对象${key}属性被设置值`,target)
        target[key]=newvalue

    },
    //监听in的捕获器判断哪个属性是否存在
has:function(target,key){
    console.log(`监听到对象的${key}属性in操作`,target)
    return key in target
}, 
//删除某一个属性
deleteProperty:function(target,key){
    delete target[key]
},
//监听对象1的_proto_
getPrototypeOf(target,key){
   console.log(target.prototype.name)
}
})

  

    

//比如访问新的属性,必须访问值get才生效
console.log(objProxy.name)
console.log(objProxy.age)
//设置新的属性
objProxy.name='小洪';
objProxy.age=21

