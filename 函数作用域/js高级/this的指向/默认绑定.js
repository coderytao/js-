//独立的函数调用我们可以理解成函数没有被绑定到某个对象上进行调用
//this的指向不跟函数的定义有关,跟函数调用的主题有关

//案列一
function foo(){
    console.log(this)//window
}
foo()
//案列二
function fo(){
    console.log(this)

}
function fn(){
    console.log(this)
    fo()
}
function fm(){
    console.log(this)
    fn()
}
//全是window

//案列三
var obj={
    name:'why',
    foo:function(){
        console.log(this)
    }
}
var bar=obj.foo
bar()//window

//案列四
function foo(){
    console.log(this)
}
var obj={
    name:'why',
    fo:foo
}
var bar=obj.fo
bar()//window

//案例五
function foo(){
    function bar(){
        console.log(this
            )

    }
    return bar
}
var fn=foo()
fn()//window

var obj={
    name:'why',
    eating:fn
}
obj.eating()//此时的this为obj