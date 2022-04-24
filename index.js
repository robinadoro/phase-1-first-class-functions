function receivesAFunction(chai){
   
    chai();
}
function returnsANamedFunction(){
    return function fn(){
        console.log('function');
    }
}

function returnsAnAnonymousFunction(){
    return  () => 'y'
}