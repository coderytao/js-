function add1(x,y,z){
    return x+y+z
}

//柯里化函数的实现
function hyCurrying(fn){
    function curried(...args){
  //判断当前已经接收的参数的个数,可以参数本身是否已经一致了
  //1当已经传入的参数大于等于需要的参数时,就执行函数.
  if(args.length>=fn.length){
     return fn.apply(this,args)
  }
  else{
      //没有达到个数时,需要返回一个新的函数,继续来接收参数.
      function curried2(...args2){
          //接收到参数后,需要递归调用curried来检查函数的个数是否达到
          return curried.apply(this,[...args,...args2])
      }
      return curried2
  }
    }
    return curried
}
var curryAdd=hyCurrying(add1)//接收一个函数
console.log(curryAdd(10)(20)(10))
/* function hyCurrying(x,y,z)
   function curried(){

   }
   return curried

}
var curryAdd(10)(20)(10)
*/
