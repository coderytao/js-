//在es6中之前拼接字符串和其他标识符

const name='why'
const age=18
const height=1.88

//console.log('my name is'+name+')

//es6中使用模板字符串
` ${ name}`//${可填标识符和数字}
const message=`my name is ${name},age is ${age},height is ${height}`

function foo(){
    return age*2
}


console.log(`foo is ${foo()}`)
