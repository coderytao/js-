//var let ,const 的区别一
//注意事项一:const 本质上是传递的值不可以被修改
//但是如果传递的一个引用类型,可以通过引用找到对应的对象,去修改对象内部的属性.
/*
const obj={
    foo:'foo'
}

 obj.foo='aaa'可以修改,但是不能修改obj={}的本身地址
*/

//注意事项二:const和let申明时,所定义的值不能被重复声明
/*
const name="aaa"
const name="bbb"

*/
