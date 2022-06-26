class Person{

}

//在js中类只能有一个父类:能继承
function Minxstudent(baseclass){
   return class Student extends baseclass{
       eatding(){
           console.log('hello,world')
       }
   }
}

class Student extends Person{

}
var stu=Minxstudent(Student)//生成新的类
var ns=new stu()
console.log(ns.eatding())