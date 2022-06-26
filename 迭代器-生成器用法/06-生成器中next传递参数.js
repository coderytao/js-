function* foo(mynum){
    const num=10*mynum;
    console.log(num)

    const n=100;
   const m=yield n //这里会被当做返回值 m=4,这里会将n返回一个字面量.
  

    const number=20*m;
    console.log(number)
  const you=  yield number
 

    const sum=30 *you;
   console.log(sum)
    yield
}
//1:第一次:这里必须传递参数
const genterator=foo(6)
genterator.next()//2:第一次:如果这里传递参数就会被当作第一段代码yield的字面量
genterator.next(3)
genterator.next(5)//第三次调用,you为第三次参数。
