//每一个函数都有一个prototype属性
//__proto__是每个对象都有的属性
//父类:公共属性和方法
function Person(name,age){
    this.name=name
    this.friend=age
}
Person.prototype.eating=function(){
     console.log(this.name+'eating~')
}
//子类:特有属性和方法
function Student(){
    this.sno=11
    //此时的studeng会继承person的属性
    Person.call(this,name)
}

Student.prototype.studying=function(){
    console.log(this.name+'studying')
}
var stu=new Student('xiaohong','18')
var stu=new Person('xiaofei','20')

console.log(stu.name)
stu.eating
console.log(Array.isArray(stu))
//第一个弊端:Person函数至少被调用了两次
//第二个弊端:stu的原型对象上会多出一些属性
