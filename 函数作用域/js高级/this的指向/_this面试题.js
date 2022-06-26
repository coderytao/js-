//定义函数的时候没有调用时就是全局,案列3
//箭头函数的this本身没有this,就会去上层作用域找.
//第一:如果函数的上层是函数的话,this就是指向函数.第二:如果函数的上层是对象的话,this就指向全局window
var person1={
 name:'person1',
 foo1:function(){
     console.log(this.name)
 },
 foo2:()=>console.log(this.name),
 foo3:function(){
     //person2
     return function(){
         console.log(this.name)

     }
 },
 foo4:function(){
     return ()=>{
         console.log(this.name)
     }
 }
}
var person2={name:'person2'}
person1.foo1();//person1

person1.foo1.call(person2);//person2

person1.foo2()//window

person1.foo2.call(person2);//window箭头函数没有this,就是跑上层作用域找

person1.foo3()()//默认绑定window
person1.foo3.call(person2)()//window(独立函数的调用)return 之后的this返回的是前面的函数,原理(person2)外层是person2的this,然后在自调用一次.
person1.foo3().call(person2)//person2

person1.foo4()();//person1

person1.foo4.call(person2)();//person2
person1.foo4().call(person2);//this的绑定不与call,apply,bind有关