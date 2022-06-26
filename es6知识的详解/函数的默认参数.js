//在es5中写默认值会出现两种错误
//1:假如把0传进去,打印的依然是'aa',因为0为假
//2:传入空字符串也会出现错误
function bar(m,n){
    m=m||'aa',
    n=n||'bb'
}
bar(0,'')

//es6中为了优化两种写法
//es6中传入m默认参数为aa,n为bb
function foo(m='aa',n='bb'){
    console.log(m,n)
}
foo(0,'')


//2:也可以通过对象参数和默认值以及解构
function printf({name,age}={name:'aa',age:18}){
    console.log(name,age)

}
printf(0,'')//这里依然打印的是aa和18

//对象的解构,依然打印的是19,18
function count({name='19',age=18}={}){
    console.log(name,age)
}
count('0','kong')

//4.有默认值得最好放在最后
function why(x,y,z=10){
    console.log(x,y,z)
}
why()