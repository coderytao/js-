//闭包:一个函数和对周围状态的引用捆绑一起，这样的组合就是闭包.
//一个普通函数:如果可以访问外部作用域自由变量的，那么就是一个闭包.
//上层作用域引用的时候,函数就不会销毁。
function foo(){
    var name="xiaohong"
    var age=18//如果这没有引用时,v8引擎会优化执行垃圾回收
    function bar (){
        console.log('bar',name)
    }
    return bar
}

var f=foo()
f()
f=null//把f指向null避免内存泄漏
/*调用栈=>11行代码:fn:undefined foo:ox00x
编译阶段:var name:undefined 
解析:name:xiaohong   返回bar:ox00x
    var f=ox00x
f访问bar地址:console.log('bar',name) name:自身作用域没有取父级作用域找xiaohong
*/
