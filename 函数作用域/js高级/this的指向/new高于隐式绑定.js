var obj={
    name:'obj',
    foo:function(){
        console.log(this)
    }
}
//new的优先级高于隐式绑定
var f=new obj.foo()

//案列二=>new的关键字不能和apply/call一起绑定

//new bind
function foo(){
    console.log(this)

}
var bar=foo.bind('aaa')
var obj=new bar()

//结论=>new绑定>显示绑定>隐式绑定>默认绑定