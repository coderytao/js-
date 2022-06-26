//1:在当前对象中查找属性
//2:如果找不到,这个时候会去原型链(__proto__对象上查找)

obj={
    name:'why',
    age:18
}
//原型链
obj.__proto__={

};
obj.__proto__.__proto__={
    address:'上海市'
}
console.log(obj.address)