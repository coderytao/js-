const obj={name:'obj1'}

const map=new Map()
//set() 方法为 Map 对象添加或更新一个指定了键（key）和值（value）的（新）键值对。
map.set(obj,'aaa')

const weakMap=new WeakMap()

weakMap.set(obj,'aaa')

//区别二:weakMap.set()弱引用 不能使用基本数据类型

//常见方法
//1:weakMap.get方法获取键值对的值
console.log(weakMap.get(obj))

//2:delete方法
console.log(weakMap.delete(obj))//删除键值对

//3:不能使用forEach方法不能遍历
