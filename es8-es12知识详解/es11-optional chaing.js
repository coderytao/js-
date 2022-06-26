//es11中新增一个方法可选链,主要作用是让我们的代码在进行null和undefind判断时更加清晰和简洁
const info={
    name:'why',
    friend:{
        girlFriend:{
            name:'hmm'
        }
    }
}

//可选链的语法=>info?.friend?.girlFriend?.name
//表示当info?.前面为undefiend时,后面就不再执行
console.log(info?.friend?.girlFriend?.name)