function fun(baseclass){
    class person extends baseclass{
        eating(){
            console.log('我在干饭')
        }
    }
    return person
}

class icon extends item{

}

var mon=fun(icon)
var earth=new mon()
console.log(earth.eating())