function createarray(){
    var arr=new Array(1024*1024).fill(1)//创建1024*1024个数组并填充1一共为4m
    return function(){
        console.log(arr.length)
    }
}

var arrayfun=[];
for(var i=0;i<100;i++){
    arrayfun.push(createarray())//400m

}

setTimeout(()=>{
    console.log('定时器执行')
    arrayfun=null//清除缓存
})