
//需求:封装一个类classroom的可迭代对象,平且能push一个名字进去
class Classroom{
   constructor(address,name,student){
       this.address=address
       this.name=name
       this.student=student
   }
   line(newstudnet){
    this.student.push(newstudnet)
   }
   [Symbol.iterator](){
       let index=0
       return{
           next:()=>{
             if(index<this.student.length){
                 return{ done:false,value:this.student[index++]}
             }
             else{
                 return{ done:true,value:undefined}
             }
           }
       }
   }
}

const classroom=new Classroom('高三1班','理科班',['小涛','小陈'])
classroom.line('小白')

for(const i of classroom){
    console.log(i)
}

//在函数上封装一个迭代器
function Classroom1(address,name,student){
    this.address=address
    this.name=name
    this.student=student
}
Classroom1.prototype.entey=function(newstudnet){
    this.student.push(newstudnet)
}


Classroom1.prototype[Symbol.iterator]=function(){
    let index=0
    return{
        next:()=>{
          if(index<this.student.length){
              return{ done:false,value:this.student[index++]}
          }
          else{
              return{ done:true,value:undefined}
          }
        }
    }
}
const myname=new Classroom1('高三1班','理科班',['小涛','小陈'])
myname.entey('小洪')
for(const i of myname){
    console.log(i)
}