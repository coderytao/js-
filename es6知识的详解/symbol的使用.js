//1:symbol的用法:在es6,为了避免重复相同的属性名,进行优化.
var obj={
    name:'why',
    friend:{name:'kobe'},
    age:18
}
obj['name']='james'//这里会覆盖obj的name
console.log(obj)
//2:es6中symbol的使用
 const s1=Symbol()
 const s2=Symbol()
 console.log(s1==s2)//每一个创建的symbol会不同.这里显示的时false
 //3:es2019(es10)中,symbol还有个描述符
 const s3=Symbol('AAA')
 console.log(s3.description)//打印AAA
//Symbol值作为key

const obj={
    [s1]:'abc',//将创建的s1作为属性名
    [s2]:'cba'
}

//4:新增属性
obj[s3]='nba'

//5:获取Symbol的方式为:Object.defineProPerty方式
const s4=Symbol()
Object.defineProperty(obj,s4,{
    enumerable:true,
    value:'mba',
    writable:true
})
//这里获取obj[s1]的值,不能通过obj.s1来获取。
console.log(obj[s1],obj[s2])


