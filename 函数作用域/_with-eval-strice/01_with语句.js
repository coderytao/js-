//with语句:可以形成自己的作用域,但是在严格模式下。with语句不适用
var obj={name:'why',age:19,message:'obj message'}
function foo(){
    function bar(){
        with(obj){
            console.log(name)
        }
    }
    bar()

}

foo()