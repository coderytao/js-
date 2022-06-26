//原生的自己调用的函数
//弊端:如果别人拿到的话,定义形参会形成错误
function requestData(url,success,failtrue){
    setTimeout(()=>{
        if(url==='coderwhy'){
            //返回成功
            //如果url为coderwhy就成功
            const message='小洪'
            console.log(message)
            success(message)//形参
        }else{
            //请求失败
            console.log('请求失败')
            failtrue()//形参
        }

    },3000)

}
requestData('coderwhy',(res)=>{
   console.log(res)
},(err)=()=>{
    console.log(err)
})