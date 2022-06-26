function foo(){
    console.log(this)
}

foo.apply('abc')
foo.apply({})

//apply/call/bind :当传入null/undefined时,自动将this绑定成全局对象
foo.apply(null)//打印的是window
foo.apply(undefined)//打印的是window

var bar=foo.bind(null)//打印的是window
bar()