//在es6以前中对象{key:value}中的key只能存储字面量,数组是不能将对象来作为key的

const obj1={name:'why'}
//const obj2={name:'kobe'}

/*const info={
 [obj1]:'aaa',
 [obj2]:'bbb'
}*/

//2:map是允许我们对象类型来作为key的
//
const map=new Map()
map.set(obj1,'aaa')
map.set(obj2,'bbb')
map.set(1,'ccc')
console.log(map)

const map2=new Map([obj1],'aaa',[obj2],'bbb')
console.log(map2)

//3:常见的属性和方法
console.log(size)

//map.has()//判断map的长度

//map.set()

//map.delete()//删除某一个属性

