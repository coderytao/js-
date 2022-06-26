//多态的体现:当不同的数据类型执行同一操作的时候,表现出不同的行为,就表现出多态的体现
class Shape {
    get() { }
}
//矩形继承
class Rectangle extends Shape {
    get() {
        return 100
    }
}
//圆形继承
class Circle extends Shape {
    get() {
        return 200
    }
}
var r = new Rectangle()
var c = new Circle()
//shop指定的必须是shop类型
function calcArea(Shape: Shape) {
    console.log(Shape.get())
}
