//案例一=>隐式绑定
var obj={
    name:'obj',
    foo:function(){
        console.log(this)
    }
}

//1.call/apply的显示绑定高于隐式绑定
obj.foo.apply('abc')//打印的是abc
obj.foo.call('abc')//打印的是abc


//案列二=>bind隐式绑定
var bar=obj.foo.bind('cba')
bar()//打印的是cba

//案列三
function foo(){
    console.log(this)
}
var obj={
    name:'obj',
    foo:foo.bind('aaa')
}
obj.foo()//打印的是aaa

