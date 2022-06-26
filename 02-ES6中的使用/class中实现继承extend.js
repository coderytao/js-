//Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
//Object.setPrototypeOf(obj, prototype)
//object.createObject.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    running(){
        console.log(this.name)
    }
    eating(){
        console.log(this.age)
    }
}

//用extends关键字实现继承,student为子类
class Student extends Person{
    constructor(name,age,vue){
        //子类的构造方法中,在使用this之前
        //子类继承父类的时候,super关键字必须放在this的前面
        
       
        //super的两个用法1:调用父类的构造方法
        super(name,age)

        

        this.vue=vue;
    }
    //父类参数的复用
    running(){
        //              2:调用父类的某一个方法
        super.running()
        console.log('我在跑步')
    }
}

var stu=new Student('洪涛',20,'car')

console.log(stu)