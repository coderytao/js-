//函数作为返回值的使用
function foo(){
    function bar(){
        console.log('bar') //函数内部可以在定义函数
    }
    return bar

}
var fn=foo()
fn()


function makeAdder(count){
    function add(num){
        return count+num
    }
    return add //函数返回出去 高阶函数
}

var add5=makeAdder(5) //var add5=function makeAdder(5){ } //add5(){ return 5+5 } 
console.log(add5(5))