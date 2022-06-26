const obj={
    _name:'why',
    get name(){
        return this._name
    },
    set name(newvalue){
        this._name=newvalue
    }
}
//receiver的作用就是不让this指向obj,而是让this指向代理对象objProxy
//如果没有recevier的话this就会指向obj
const objProxy=new Proxy(obj,{
    get:function(target,key,receiver){
        console.log('get-----',receiver)
        console.log(receiver===objProxy)
      return   Reflect.get(target,key,receiver)

    },
    set:function(target,key,value,receiver)
    {
        console.log('set-----',receiver)
       return Reflect.set(target,key,value,receiver)
    }
})
console.log(objProxy.name)
objProxy.name='kobeing'
