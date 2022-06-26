//flat()方法会按照一个可指定的深度递归遍历数组,并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
const nums=[10,20,[20,30],[100,50],[[20,45,78]]]

const newNums=nums.flat()//对数组进行降维,本来nums为三维数组给它降成二维数组
console.log(newNums)
const numNums2=nums.flat(2)//对数组进行降维,本来nums为三维数组给它降成一维数组
console.log(numNums2)


//2:flatMap的使用,可以对数组的降维/映射数组.
const nums2=[10,20,30]
//flat的两个参数1:函数,this
const newNums2=nums2.flatMap(item=>{
    return item*2
})

//3:flatMap的应用场景
//需求:取出messages里面的单词,不要空格
//原数组[['hello world '],['hello lyh'],['my name is coderwhy']]
const message=['hello world',' hello lyh','my name is coderwhy']
//const lun=message.slice(' ')
const coder=message.flatMap(items=>{
    console.log( items.split(" "))
})

for(const num of message){
    //slice截取里面的字符串
    const lun=num.split(' ')
    console.log(lun)
    for(const sum of lun)
    {
        console.log(sum)
    }

}



