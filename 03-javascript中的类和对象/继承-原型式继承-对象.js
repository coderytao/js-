//就是将一个对象继承到另一个对象里面
var obj={
    age:19,
    name:'codewhy'
}


//原型式继承
function createObject2(o){
    function Fn(){

    }
    Fn.prototype=o;
    var newobj=new Fn()

    return newobj
}
var info=new createObject2(obj)

//2原型式继承函数
function createObject1(o){
    var newobj={}
    Object.setPrototypeOf((newobj,o))
    return newobj
}
var car=new createObject1(obj)