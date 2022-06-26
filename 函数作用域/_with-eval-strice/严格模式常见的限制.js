'use strict'

/*1=>禁止意外创建全局变量
message="hello world"
console.log(message)

//2=>不允许函数有相同的参数名称
function foo(x,y,x){
    console.log(x,y,x)
}
foo(10,20,10)

//3静默错误
true.name='abc'
Nan=123
*/
//4 with语句不允许使用

//5 不允许使用原先的八进制格式
var num=0x2345
var num2=0x456;

//6eval 函数不会向上引用变量了
var jsString='var message=hello'
eval(jsString)