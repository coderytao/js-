//在es6中对let/const/function/class声明的类型是有效的
{
    let foo="why"
    function demo(){
        console.log("demo")
    }
    class Person{}
}

//console.log(foo)//foo is not undefined
// demo()无法访问的原因是:不同浏览器有不同的实现(大部分浏览器为了兼容以前的代码)
//var p=new Person  not a p 
