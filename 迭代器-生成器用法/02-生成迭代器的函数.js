
var names=[1,2,2]
var car=[6,7,8]
//创建一个有限的迭代器
function createArrayInterator(arr){
   let index=0;
      return {
    next:function(){
        
        if(index<names.length){
            return {done:false,value:[arr++]}
        }
        else{
            return {done:true ,value:undefined}
        }
       }
    }
   
}
const go=createArrayInterator(...names)
console.log(go.next())
console.log(go.next())
const nums=createArrayInterator(...car)
console.log(nums.next())


//创建一个无限的迭代器
function Array(){
    let index=0
    return {
      next:function(){
          return { done:false,value:index++}
      }
    }
}



