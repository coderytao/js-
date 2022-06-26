function sum(m,n){
    return m+n
}
//假如在程序中,经常把5和另一个程序相加
function makeAdder(count){
    count=count+count
    return function(num){
        return count+num
    }
}
var adder5=makeAdder(5)
adder5(10)
adder5(15)
adder5(20)