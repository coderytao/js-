//访问器属性:访问器属性不包含数值,它包含的是一对,getter和setter函数
//必须用Object.defineProperty()来定义
var book={
    _year:'2022',
    editor:1
}
Object.defineProperties(book,'year',{
    get:function(){
        return this._year
    },
    set:function(new_year){
        if(new_year!=this._year){
            this._year=new_year;
            this.editor++
        }
    }

});
