//es10中新增Object.fromEntries方法
//将数组格式转化为字符串
const obj={
    name:'lan',
    age:18,
    height:1.99
}
//Object.entires()将对象转化成数组
//Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
const entries=Object.entries(obj)

console.log(entries)


//es10新增Object.fromEntries方法
//Object.fromEntries方法将数组/值转化对象的key,value
const newobj=Object.fromEntries(entries)
console.log(newobj)


//Object.fromEntries的应用场景

const queryString='name=why&age=19&height'

//URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串
const queryprams=new URLSearchParams(queryString)

for(const parm of queryString)
{
    console.log(parm)
}
const paramobj=Object.fromEntries(queryString)//将url解析成对象

