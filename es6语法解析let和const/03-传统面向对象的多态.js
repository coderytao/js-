//多态的体现:不同的数据类型执行同一操作的时候,表现出不同的行为不一样,就体现出多态。
function earth(con){
    console.log(con.get())
}
var obj1={
    name:'why',
    get:function(){
        return 1000;
    }
}
class Person{
    get(){
        return 2000;
    }
}
var p=new Person()
earth(obj1)
earth(p)