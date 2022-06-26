//foo是否为纯函数?
//纯函数的理解=>1:输入相同的值,输出想同的值。2=>不会修改变量和参数.
function foo(num1,num2){
    return num1*2+num2*num2

}
foo()
//foo是

//baz不是。
function baz(info){
    info.age=100;
}
var obj={name:'why',age:18}
baz(obj)
console.log(obj)