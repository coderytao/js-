//在循环遍历中const和let的值区别

const  names=['abc','bap','you']
//这里不能用const,因为const定义的值不能被修改.

for(const i=0;i<5;i++){
    console.log(names[i])
}
//每用const创建一个i都会形成一个块级作用域
{
  const i=0;
  console.log(i)
}
{
  //这里会执行i++的操作,但是由于是const定义i的值不能被修改
    const i=1;
    console.log(i)
}

//es6的第二种遍历方式,这里定义的i值没有被修改
for(const i of name){
    console.log(i)
}