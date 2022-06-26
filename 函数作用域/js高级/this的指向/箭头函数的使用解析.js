//简写:如果是一个箭头函数,只有一行代码,并且返回一个对象,这个时候如何编写呢？
//箭头函数的作用域指向外层
var bar =()=>{
    return {name:'why',age:18}
}
var bar=()=>({name:'why',age:19})

//案列二:高阶函数中如果只有一个参数的时候,可以直接简写
nums.forEach(item=> console.log(item))