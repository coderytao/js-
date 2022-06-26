//async用来声明一个异步函数

async function foo(){
   console.log('aaa')
   console.log('bbb')
   console.log('ccc')
   console.log('ddd')
}
console.log('myname')
foo()//如果是普通的表达式,这里的异步函数跟普通函数没有什么区别
console.log('youname')