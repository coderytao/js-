var obj={
    name:'why',
    age:18,
    _address:'北京时'
}
//1:隐藏某一个私有属性被希望直接被外界使用和赋值
//2:如果我们希望截获某一个属性它访问和设置值的过程时,也会使用存储属性描述符
Object.defineProperty(obj,'address',{
      enumerable:true,//表示是否通过for in循环
      configurable:true,//表示是否通过delete 循环该属性
      get:function(){
            return this._address//这里的address调用的时obj对象
      },
      set:function(value){
            this._address=value
      }
})
console.log(obj.address)
obj._address='杭州市'