//迭代器的定义-迭代器是帮助我们对某个数据结构进行遍历的对象

//迭代器也是对一个具体的对象,这个对象需要符合迭代器协议;

//产生迭代器就是要定义一个特定的next方法=>1,next函数无参,2:done:没有遍历最后的参数前面为false,最后一个为true。

//第一种
const names=['coderwhy','myhome','小黎老师','kobe']

const interator={
    next:function(){
        return {done:false,value:'coderwhy'}
        return {done:false,value:'myhome'}
        return {done:false,value:'小黎老师'}
        return {done:false,value:'kobe'}
        return {done:true,value:'undefined'}
    }
}

//第二种
const ma=['coderwhy','myhome','小黎老师','kobe']

let index=0;
const obj={
    next:function(){
        if(index<ma.length){
            return{ done:false,value:ma[index++]}
 
        }
        else{
            return{done:true,value:undefined}
        }
    }
}

console.log(obj.next())//false
console.log(obj.next())//false
console.log(obj.next())//false
console.log(obj.next())//false
console.log(obj.next())//true
