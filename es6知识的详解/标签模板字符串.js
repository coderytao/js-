//第一个参数依然是模板字符串中的整个字符串,只是被切成多份,放到一个数组中
//第二个参数是模板字符串
function foo(m,n,x){
    console.log(m,n,x)
}
const name='why';
const age=18;
//{'hello ,'wo','rld}
foo `hello ${name}wo${age}rld`
//模板字符串会被传到一个数组中去
//['hello','wo','rld'] why age
//第一个参数是模板字符串被切成多份
//第二个 why ,第三个是age