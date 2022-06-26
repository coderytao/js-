function foo(){
    console.log(m)//编译阶段为undefined
    var m=200;
    console.log(m)
}
var m=100;
foo()



var name=["abc","cba","nba"];
var newName1=name.slice(0,3)//slice不会改变原来的值

console.log(newName1),
console.log(name)//还是保持原来的一样abc,cba,nba

//splice在执行的时候,有修改调用的数组对象本身.修改的这个操作有调用
var names=["abc","cba","nba"];
var newName1s=names.splice(1)//splice不会改变原来的值

console.log(newName1s);//生成新的数组


console.log(names)