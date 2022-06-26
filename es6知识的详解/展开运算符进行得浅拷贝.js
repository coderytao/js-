//浅拷贝:复制前一份代码得属性和方法.
//1:在创建info对象时,会在堆内存中创建一个info得0xooo,
//2:而info里面有name:why和创建friend地址:oaxxx;friend有一个属性为name:'kobe' 
//3:执行第9行代码时:又在堆内存中创建一个obj得0xb00,由于是展开运算符,它得指针指向friend地址oaxxx。name:'why'会覆盖'codewhy'
//4:所以执行第12行代码时修改为james,info得name也会修改。
const info={
    name:'why',
    friend:{name:'kobe'}
}

const obj={...info,name:'codewhy'}

obj.friend.name="james"
console.log(obj.friend.name)