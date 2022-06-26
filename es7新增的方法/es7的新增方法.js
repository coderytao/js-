const names=['abc','cba','nba']
//当indexof不等于-1时就包含cba
if(names.indexOf('cba') !==-1){
console.log('包含cba')
}

//es7的includes方法,1表示索引
if(names.includes('cba','1')){
    console.log('包含cba')
}