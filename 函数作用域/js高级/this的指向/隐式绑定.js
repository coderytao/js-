//调用的方式时通过某个对象进行调用的
//也就是它的调用位置中,是通过某个对象发起的函数调用
//那个对象调用this就指向谁
var obj={
    name:'why',
    eating:function(){
        console.log(this.name+'吃东西')

    },
    runing:function(){
        console.log(this.name+'跑步')

    }

}
var fn=obj.eating//在吃东西
fn()//此时的this指向window,name没有。默认绑定

//案列二
var obj1={
    name:'obj1',
    foo:function(){
        console.log(this)

    }

}
var obj2={
    name:'obj2',
    bar:obj1.foo
}
obj2.bar()//此时的this指向的时obj2