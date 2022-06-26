'use strict'

//在严格模式下,默认绑定的函数只执行函数会指向undefined
function foo(){
    console.log(this)
}

var obj={
    name:'why',
    foo:foo
}
obj.foo()
//settimeout的this指向window
setTimeout(function(){
    console.log(this)//window
},3000)