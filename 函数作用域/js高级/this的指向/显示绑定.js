//显示绑定就是加了个bind,apply,call。
function foo(){
    console.log('函数被调用',this)

}
//foo直接调用call/apply调用的不同在不this绑定的不同

var obj={
    name:'why'
}
foo.call(obj)//绑定到obj
foo.apply(obj)
foo.apply('aaa')//绑定到字符串aaa中

//call和apply的不同
function sum(num,num2){
   console.log( num+num2,this)
}
foo.call('aaa',20,30)//分割字符串
foo.apply('aaa',[20,30])//数组的形式
