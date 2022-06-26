//if,switch,for语句中都有自己得块级作用域
{

}

if(true){
   let 
}
//举例:
//function demo形成块级作用域没有就去for里面得找到i
for(let i=0;i<10;i++){
    function demo(){
       console.log(i)
    }
}
//举例二
//function demo形成块级作用域,但因为是var定义i就去全局找到i,全局里面得i为10.因为i已经执行完毕.
for(var i=0;i<10;i++){
    function demo(){
        console.log(i)
    }
}