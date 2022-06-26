//解构对象的话没有顺序,这里主要对key值的访问.
var obj={
//  key:'属性'
    name:'xiaohong',
    age:'18',
    address:'广州'
}
//解构对象
var {name}=obj
console.log(name)
//解构对象没有顺序
var {age,name,address}=obj

console.log(age,name,address)

//解构对key进行重申,此时的age的变量名就变为mycon

var {age:mycon}=obj
console.log(mycon)
//对重申的变量名进行赋值
var {age:mylove='我的car'}=obj
console.log(mylove)//这里打印的是'我的car'
//es5的应用
function foo(info){
    console.log(info.name,info.age)
}
//es6的应用
foo(obj)
function bar({name,age}){
    console.log(name,age)
}
foo(obj)
