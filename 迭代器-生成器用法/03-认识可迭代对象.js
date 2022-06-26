

//创建一个可迭代对象来访问数组,将02-生成器里面的函数封装到一起。

//原生迭代器对象-String,Array,Map,Set,argument。
const interatorObj={
     names:['abc','cba','nba'],
     [Symbol.iterator]:function(){//对象里面有一个symbol.interator的方法
        let index=0;
        return {
            next:()=>{
               
                if(index<this.names.length){
                    return {done:false,value:this.names[index++]}
                }
                else{
                    return {done:true,value:undefined}
                }
            }
        }
     }
}
//const interator=interatorObj[Symbol.interator]()
//console.log(interator.next())

//对象里面有迭代器的,都可以使用for...of函数

for(let i of interatorObj){
    console.log(i)
}