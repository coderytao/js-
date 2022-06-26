function hyCompose(...fns){

}
function double(m){
    return m*2
}
function squre(n){
    return n*2
}
var newFn=hyCompose(m,n)
newFn(10)