1./*语法：function 用var, let, const来表示参数要希望在第一个等号的后面
2.如果没有参数，需要写一对空的括号
3.只有一个参数，那就直接写，不用加括号
4.参数有多个，需要加一个小括号，参数用逗号隔开
5.函数的主体内容是放在箭头后面，如果语句只有一条，那就直接写，如果语句有多条，需要把他们放在一对大括号里
  */      ///1.没有形参（需要小括号占位）函数体内只有一行代码（省略花括号）
        var fn1_old = function(){
            console.log('fn')
        }

        var fn1_new = () => console.log('fn1_new')
        fn1_new()
        
        //2.有一个形参（省略小括号）函数体内只有一行代码（省略花括号）
        var fn2_new = a => console.log(a)
        fn2_new('一个参数')
        
        //3.有两个或者两个以上形参（省略小括号）函数体内只有一行代码（省略花括号）
        var fn3_new = (a,b) => console.log(a,b)
        fn2_new(1, 2)
        
        //3.有两个或者两个以上形参（省略小括号）函数体内只有多行代码（省略花括号）
        var fn4_new = (a,b) => {
            console.log(a,b)
            return a + b
        }
        var sum = fn4_new(2,4)
        console.log(sum)