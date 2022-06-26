//生成器是es6新增的一种函数控制,使用的方案,它可以让我们更加灵活的控制函数什么时候继续执行,暂停执行.

//首先创建生成器,它和普通函数不同.区别是在于function后面加一个星号

//如果想要一个返回值,就要在yield后面添加返回值即可.
function* foo(){
   console.log('第一段代码')

   const names='小涛'
   console.log(names)

   yield  names//这个语句能够中止函数的执行和暂停.平且yield上面是第一段代码,返回小涛字符串
console.log('第二段')
   const hong='小洪'
   console.log(hong)

   yield hong//hong以下的第二段代码 ,返回小洪字符串

  console.log('第三段')
   const myname='小白'
   console.log(myname)
   yield //myname的下面的第三段代码
}

//生成器会生成一个可迭代对象,平且可以用next方法
const interator=foo()
interator.next()//执行第一段代码返回值是小涛
console.log(interator.next())//执行第二段代码

