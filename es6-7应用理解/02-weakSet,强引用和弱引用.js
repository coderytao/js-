//强引用:在GC(垃圾回收),如果在内存中能够被另一对象引用的话,GC就不会引用它.
//弱引用:在GC中,不管你是否存在,如果你没有被强引用指向的话,就会被GC回收掉


//利用weakset创建出来的只能用对象类型,不能是基本数据类型
//weakset是弱引用

//利用set创建的对象是强引用
const set=new Set()


const con=new WeakSet()

let obj={
    name:'why'
}

set.add(obj)
//weakSet的引用图5有



