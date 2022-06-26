//第一种对象字面量的属性名简写
name='why';
age='20'

var obj={
    /*1=>访问外部属性简写一
    name:name,
    age:age*/
    
    name,
    age,
    /*2=>方法名的简写:
    get:function(){

    }*/
    get(){

    },
    //3计算属性名的简写
    [name+'why']:'小明'
}