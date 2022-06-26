/*
js的判断有什么值是false和true
null ,undefiend,nan ;false  true=>0 ' '
1:js的数据类型有哪些?
number,boolean,null,undefined,string,对象,数组.
2:ajax如何使用
var xhr=new xmlhttprequest;
xhr.open()//发送请求
xhr.send()
xhr.onload=function(){
    if(xhr.readyState==4){
        if(xhr.status>200&&xhr.status<400){
            console.log(xhr.resposetext)
        }
    }
}
3:判断数据是否为nan,
typeof 用于检测number类型
4：js中null和undefi的区别
null表示一个值被定义但访问是空值,undefied表示没有给值赋值
undefiend:调用函数时,应该提供参数
5闭包是什么,有什么特性,对页面会有什么影响
闭包就是在一个函数内部创建另一个函数,并且函数内部的变量会访问到外部.
能够扩大作用域的范围
如果函数内部的值没有被引用会会造成内存泄漏

6:什么是事件的委托,如何确定事件源
事件的委托就是利用事件冒泡,只指定一个时间处理程序,管理某一类型的值。

7:什么是事件冒泡
一个事件触发后，会在子元素和父元素之间传播.

8:创建函数的方式;
//函数对象
var bar =new function(){}
//函数声明
function(){

}
//函数表达式
var bar =function(){}

9:创建对象的几种方式
//对象
var sum=new object()
sum.name="hong"
//对象字面量
var obj={
    name:'hong'
}
//new 
function Person(name){
    this.name=name;
    Person.prototype.say=function(){

    }
}

var obj=new Person(18)

obj={
    name:'20'
}
10:===和==的区别
===表示左边和右边的值类型相同 ==值相同
11:如何区分数组和对象
方法一:通过es6的array.isarray来区别
array.isarray([]);true;
array.isarray({});false;
方法二:通过instanceof来区别
[].instanceof array//true;
{}.instanceof array//false;
instanceof运算符用来判断是否为一个类的实列
12:如何判断两个对象相等
es6中有方法判断
let obj1={
    a:1
}
let obj2={
    a:1
}
console.log(Object.is(obj1,obj2))/false

13:列举三种强制类型转换和两种隐式转换
强制:tostring() string()
转化为:Number,parselnt(),parsefloat()
转化为:boolean()

隐式:拼接字符串:
var str=""+18;

14javascript如何获取当前日期:
方法:var date=new date()
date.getMonth()+1,
data.getFullYear();
data.getDay();
date=getFullYear()

15:伪数组:具有length属性
        :按索引方式存储数据
        :不具有数组的push.pop等方法

16:如何遍历对象的属性
var obj={
    name:'hong',
    age:20
}
var why={}
for(var i in obj){
    //hasproperty是否有自身属性
    if(obj.hasownproperty&&typeof obj[i]!=function){
        why[i]=obj[i]
    }
    console.log(obj[i])
}
17如何给原生绑定两个点击事件
var btn=document.queryselector('.id')
btn.addEventlistener('click',function(){
      alert('1')
});
btn.addEventlistener('click',function(){
   alert('2')
})
18:如何实现数组的随机排序:
var arr=[1,2,3,4,5,6,7]
function random(con){
   for(var i=0;i<=arr.lenght;i++){
       var array=[];
       var parint=parselnt(Math.floor*arr.length)
       var tepm=con[parint]
       arr[parint]=arr[i];
       arr[i]=temp
   }

}
random(arr)
19:javascript中的作用域
作用域:就是变量的有效范围内,在一定的空间可以对数据进行访问和存储；
局部作用域:一般只固定的代码块可以访问到,其他作用域无法访问
块级作用域:凡是固定的代码块可以划分的变量的作用域

20:什么是作用域链:当代码在一个坏境中执行时,会创建变量对象的一个作用域链,由子级作用域返回父级作用域中寻找变量。

21:src和href的区别是什么
src：指向外部资源的位置,指向的内容将会嵌入到文档中标签所在位置。
href:指向网络资源所在位置,建立和当前所在元素或文档链接之间的位置。

22：什么是dom？
w3c组织推荐处理可扩展标志语言的标准编程的接口;
w3c：核心dom：针对任何结构化文档的标准模型;
xmldom:针对xml文档的标准模型

24:dom结构操作添加,移除,移动,复制和查找结点.
1:创建新节点:
createElment;
createNode;创建一个节点
2:添加,移除,替换,插入;
appendchild.从父节点
removechild,
replaceChild
insertbefore
3:查找
getelementByid,getelementsBytagname,queryselcet,getelementBytagname,queryselectAl

25:dom的事件模型:
dom事件模型:
dom事件模型分为两种:捕获阶段,冒泡阶段;
事件冒泡:在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或事件返回true,那么这个事件会向这个对象的的父级传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者到达了对象层次的最顶层，即document对象。
事件捕获:在一个对象上触发同类型的事件会由根元素开始触发,由内向外传播,一直到目标元素。

事件传播:先捕获在冒泡。

26:阻止冒泡的方法
w3c方法是:event.stopProagation()事件
          event.preventDefalt()

27:event对象的常见引用:
event.stopProPagation()阻止冒泡
event.preventDefalut//阻止默认行为
event.target       

28:什么是bom？
浏览器对象模型,是将我们使用的浏览器抽象成对象模型


29：什么是dom?
dom属性是能够设置或改变html的值
*/