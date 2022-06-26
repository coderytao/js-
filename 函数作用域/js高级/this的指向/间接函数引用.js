var obj1={
    name:'obj1',
    foo:function(){
        console.log(this)
    }
}
var obj2={
    name:'obj2'
}
(obj2.bar=obj1.foo)()//没有加引号不能执行,这里将于obj2合在一起了。想运行就去掉括号