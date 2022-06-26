//箭头函数没有自己的this，箭头函数的this就是上下文中定义的this，因为箭头函数没有自己的this所以不能用做构造函数。
var name="window"
function Person(name){
    this.name=name;
    this.foo1=function(){
        console.log(this.name)

    },
    this.foo2=()=>console.log(this.name)
    this.foo3=function (){
        //return 返回出去就是window
        return function(){
            console.log(this.name)

        }
    },
    this.foo4=function(){
        return ()=>{
            console.log(this.name)
        }
    }
}

var person1=new Person('person1')
var person2=new Person('person2')

person1.foo1()//person1
person.foo1.call(person2)//person2

person1.foo3()()//window
person1.foo3.call(person2)()//window
person1.foo3().call(person2)//person2


person1.foo4()()//person1
person1.foo4.call(person2)()//person2
person1.foo4().call(person2)//person1