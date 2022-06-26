const names=['bac','nba','why']

//1:函数调用时
function foo(x,y,z){
    console.log(x,y,z)
}
foo(...names)//打印:bac,nba,why

//2:构造数组时
const newnames=[...names]
console.log(newnames)//形成一个newnames数组=>bac,nba,why


