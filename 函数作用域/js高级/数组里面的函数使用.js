var nums=[10,4,6,100]
var arr=[]
//当函数属于某个对象时就称为方法
var arr=nums.filter(function(value,index,array){
    if(value%2==0){
        return arr.push(value)
    }
})

//map :映射相当于赋值数组
var newNum2=nums.map(function(value,index,array){
    return value*2
})
console.log(newNum2)

//find:查找元素
nums.find(function(item){
    return item==12//找到就返回出去
})

//reduce:prevalue是上一次的值
nums.reduce(function(prevalue,item){
    return prevalue+item
},0)//init初始化的值
//prevalue:0 item:10
//prevalue:10 item:4
//prevale:14 item:6
 
