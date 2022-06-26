class Person{
    constructor(name,age){
           this.name=name

    }
    eating(){
      console.log(this.name)

    }
    //类的访问器
    get(){
        //拦截操作
        return this.name//访问值
    }
    set(newvalue){
        this.name=newvalue//设置值
    }
}
var p=new Person('xiaohong')
console.log(p.name='xiaobing')