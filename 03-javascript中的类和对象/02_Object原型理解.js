var obj={
    name:'why'
}
//console.log(obj.address)

//到底是找到那一层对象后停止继续查找呢？
//对象字面量obj的原型是[Object:null prototype] {}
//[Object:null prototype]{}就是顶层的原型
console.log(obj.__proto__);

console.log(obj.__proto__.__proto__)