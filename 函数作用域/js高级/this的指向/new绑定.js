//我们通过一个new关键字调用一个函数时候,这个时候this调用这个构造器创建出来的时候
//this=创建出来的对象
//这个过程就是new绑定
function Person(name,age){
    this.name=name;
    this.age=age;
}
var p1=new Person('WHY',20)