//继承内置内就是继承js的一些内置方法
class Hyarray extends Array{
   fun(){
       this[0]//访问当前的第一个元素
   }
   con(){
       this[this.length-1]//访问当前最后一个元素
   }
}

var arr=new Hyarray(1,2,3)
arr.fun()
