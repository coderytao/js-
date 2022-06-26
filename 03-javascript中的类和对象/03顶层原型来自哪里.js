var obj={
    name:'why',
    age:18
}
var obj2={
    address:'北京市'
}
obj.__proto__=obj2

console.log(Object.prototype)//这里是顶层原型 new Object的所有属性

//每一个函数都有一个prototype的属性