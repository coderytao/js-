function sum(x){
    return function(y){
        return function(z){
            console.log(x+y+z)

        }
    }
}
var result=sum(10)(20)(10)
console.log(result)
//有一个形参（省略小括号）函数体内只有一行代码（省略花括号）
var sum2= x=>y=>z=>{
    return x+y+z
    
}
console.log(sum2(10)(20)(10))