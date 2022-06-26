//yield*后面必须接能够被迭代的数组,或者一些方法.
const names=['abc','cba','aaa']

function* createArrayinterator(arr){
    //古老的第一种写法
     let index=0
     return {
         next:()=>{
           if(index<arr.length){
               return{done:false,value:arr[index++]}
           }
           else{
               return{done:true,value:undefined}
           }
         }
     }

     //第二种写法:用生成器来替代迭代器,因为yield这里会返回一个对象return{done:false,value:arr[index++]}
     /*let index=0
     yield  arr[index++]
     yield  arr[index++]
     yield  arr[index++]
     yield  arr[index++]*/

     /*第三中写法,由于生成器也可以用for循环,所以。
     for(item of arr){
         console.log(item)
     }*/

     //第四种写法,让你直接返回yield对象中的value。
    /* yield 'abc'
     yield 'cba'
     yield 'aaa'*/
   
}

const mycar=createArrayinterator(names)
console.log(mycar.next())
console.log(mycar.next())
console.log(mycar.next())
console.log(mycar.next())


//创建一个函数,这个函数可以迭代一个范围内的数字

//10 ,20
function createRange(start,end){
  let index=start

  return{
      next:()=>{
          if(index<end){
              return {done:false,value:Math.round(Math.random()*(end-index))+index++}
          }
          else{
              return{done:true,value:undefined}
          }
      }
  }

}
const ranginterarot=createRange(10,20)
console.log(ranginterarot.next())
console.log(ranginterarot.next())
console.log(ranginterarot.next())
console.log(ranginterarot.next())
console.log(ranginterarot.next())

