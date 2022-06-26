//思路:当obj1的name发生改变时监听obj2nameFn1
//当obj2的name发生改变时监听obj3nameFn2


//对数据的保存
const obj1={
    name:'why',
    height:20,
    address:'深圳市'

}
const obj2={
    name:'hong',
    height:'1.88',
    address:'武汉市'
}
function obj2NameFn1(){
    console.log('打印obj1')
}

function obj3nameFn2(){
    console.log('打印obj2')
}

//1对obj1收集数据结构
//创建weakmap
const weakmap=new WeakMap()

const obj1map=new Map()

//给obj1设置属性
obj1map.set('name',[obj2NameFn1])
weakMap.set(obj1,obj1map)


const obj2map=new Map()
//给obj2设置属性
obj2map.set('age',[obj3nameFn2])
weakMap.set(obj2,obj2map)

//当有一天改变了obj1.name属性
obj1.name="james"
//拿到obj1的对象
const targetmap=weakmap.get(obj1)
//拿到obj1的name属性
const fns=targetmap.get('name')

//遍历fns
fns.forEach(item=>item())


