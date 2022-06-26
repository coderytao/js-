//相同点:set方法类似于数组,对象,它的作用是给存储数据结构
//不同点:set方法但不类似数组,对象,因为它存储的元素不能有重复
//支持forEach,for of
//1:创建Set结构
const set=new Set()
set.add(10)
set.add(20)
set.add(30)


//2:对数组的去重,可以去掉相同的元素
const arr=[33,44,10,20,60,33]
const arrset=new Set(arr)
const newarr=[...arrset]
console.log(newarr)
//将set方法转换为数组
console.log(Array.from(arrset))

//3:set常见的属性和方法
//size:返回set的个数
console.log(arrset.size)

//4:add方法添加属性
arrset.add(5)

//5:delete删除某个元素
arrset.delete()
