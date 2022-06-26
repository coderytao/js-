function foo(){
    var name='why'
    var age=18//这里就造册闭包的内存泄漏
    function bar(){
        debugger
        console.log(name)//此时能够引用到上层作用域时name可以访问到,但从v8角度性能来看age会被销毁。
        //但从另一个角度来看如果打印了console.log(age),此时的age不会被销毁。
    }
    return bar
}
var fn=foo()
fn()