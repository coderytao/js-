//函数得剩余参数，剩余参数形同于arguments,但用法不同于arguments。...args上将末尾得参数填入到args数组中
function foo(m,n,...args){
    console.log(m,n)
    console.log(args)

}
foo(20,30,20,10,50)