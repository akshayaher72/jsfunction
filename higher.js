function apply(m,n,op){

    op(m,n);
}

apply(1,2,function(x,y){
    console.log("Add: ",x+y);
    console.log("Sub: ",x-y);
    console.log("Mult: ",x*y);
})