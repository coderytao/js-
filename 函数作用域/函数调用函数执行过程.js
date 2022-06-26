//全局执行上下文GEC(global excution context)全局执行上下文:执行全局代码
//函数执行上下文FEC(function excution context)函数执行上下文:执行函数代码

//作用域链:每一个执行上下文会被关联到一个变量对象中(variable object vo) 在源码中的变量和函数声明会被作为属性添加到vo中,对于函数来说参数也会被添加到vo中



//面试题1
/*var message='hello global';

function foo(){
    console.log(message)
}

function bar(){
    var message="hello bar";
    foo()
}

bar()
//1=>1 开始执行代码:=>vo:go go{  message:hello gloobal foo:Oxa00 bar:Oxb00}

//3 开始函数执行代码:=>vo:AO{ message:hello bar }

//9 foo { AO:无 scope chain:parentScope message hello global} 函数的作用域在编译阶段已明确


//面试题2
var n=100;
function foo(){
    n=200;
}
foo()
console.log(n)
//2=>go{ name:undefined foo:0x000} 开始执行代码:n=100; =>函数栈:vo=200;找不到就去vo找,由于函数体n=200所以就是200 


//面试题3 
function foo(){
    console.log(m)
    var m=200;
    console.log(m)
}
var m=100;
foo()
//3 vo=>go{ foo:0xooo n=100} 函数执行上下文:编译阶段:函数体里面 var n =undefined ;console.log(undefined) var n=200 console.log(n=200)

//面试题3 
var n=100;
function foo1(){
    console.log(n)
}

function foo2(){
    var n=200;
    console.log(n)
    foo1()
}

foo2()

console.log(n)

//编译阶段:go{ n=unfined ,foo1:0xoo 作用域:window foo2:0x001 作用域:window}

//执行:go{n=100} 函数执行上下文:foo1(vo:unfined n=100) 编译阶段:foo2(n:unfined )执行代码:n:200 
*/
var a=100;

function foo3(){
    console.log(a)
    return 
    var a=100; //return 依然有a
}
foo3()
//go{ a=100; foo3:ox00x} a:unfined; 

function foo(){
    m=100;//m为全局变量
    var a=b=10;
   // var a=10;
   // b=10
}

foo()
console.log(m)//100

//内存管理=>分配申请内存 2:管理内存 3:不使用释放内存