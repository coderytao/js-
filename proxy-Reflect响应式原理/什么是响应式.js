//响应式就是当一个基本数据类型的属性被修改时,以前原有的属性也会被修改

//对象的响应式
const obj={
    name:'why',
    age:18
}
const newName=obj.name
console.log(obj.name)

obj.name='kobe'//当它被修改的时候newname也会随之随之修改