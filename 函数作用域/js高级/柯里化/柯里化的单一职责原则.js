//只传入一个参数并且一步步的调用
function sum(x){
    x=x+2;
    return function(y){
        y=y+2;
        return function(z){
            z=z*2;
            return x+y+z
        }
    }

}
console.log(sum(10)(20)(30))