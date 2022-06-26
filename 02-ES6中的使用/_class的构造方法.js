//类的声明
class Person{
    //类的构造方法
    //注意:一个类中只能有一个构造函数
    //1:在内存中创建一个对象moni={};
    //2:将类的原型prototype赋值给创建出来的对象moin._proto_=Person.prototype
    //3:将对象赋值给函数的this:new绑定this =moin;
    //4:执行函数体中的代码
    //自动返回创建出来的代码
  constructor(name,age){

  }  
}
var p=new Person()

function Banner(){
    this.name=this.name
}
Banner.prototype.saying=function(){

}
var con=new Banner()

//函数:banner => 原型对象:prototype;
//实列:con=>原型对象:prototype;