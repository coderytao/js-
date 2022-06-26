//每一个函数都有一个prototype属性
//继承的好处:能够将代码进行复用
//父类:公共属性和方法
function Person(){
    this.name='why';
    this.friend='好朋友'
}
Person.prototype.eating=function(){
     console.log(this.name+'eating~')
}
//子类:特有属性和方法
function Student(){
    this.sno=11
}
//这里必须在创建后添加此行代码
Student.prototype=new Person()
Student.prototype.studying=function(){
    console.log(this.name+'studying')
}
var stu=new Student()

console.log(stu.name)
stu.eating

//原型链实现继承的弊端:
//1:第一个弊端:打印stu对象,继承的属性是看不到的.
//console.log(stu.name)

//2:直接修改对象上的属性,是给本对象添加了一个新属性
//stu.name="kobe"
//console.log(stu2.name)

//3:会创建出来两个stu的对象,获取引用,修改引用中的值,会互相影响
//var stu1=new Student()
//var stu2=new Studeng()
//stu1.friends.push('kobe')

//4弊端:在前面实现类的过程中没有传递参数
//var stu3=new Student('lilei',111)