//在es6当中,有一个概念叫作暂时性死区
//使用let,const声明之前,变量都是不可以被访问到的

var foo='foo'

{
    console.log(foo)//这里访问不到
    let foo='name'
}
function bar(){
    
    console.log(foo)
    let foo='myname'
}
bar()