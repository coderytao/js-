//解构数组主要是对顺序的访问
var name=[0,2,4]
//在es5中访问
var item1=name[0];
var item2=name[1];
var item3=name[2];

//第一种对数组的解构类似于上面的es5写法
var [item1,item2,item3]=name;
//第二种解构后面的元素
var [, , item2]=name
console.log(item2)

//解构出一个元素,后面的元素放到一个新数组中
var [itema,...newnamse]=name

//默认解构
var [item1,item2,item3,item4='aaa']=name



