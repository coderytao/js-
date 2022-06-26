//window对象添加属性:在全局通过var来声明一个变量,事实上会添加一个window属性,但是let,const是不会给window上添加属性的
//在console.log(foo)
//var foo='foo'

//let/和const他们时没有作用域提升的
//foo被创建出来了,但是他们不能被访问
//作用域提升:能提前被访问

console.log(foo)
let foo='foo'//这里不能够访问到foo,因为此时在第9行代码执行时,foo虽然创建出来,但是不被能被访问.