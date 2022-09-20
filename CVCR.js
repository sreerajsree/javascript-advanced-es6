function one(){
    var a = 100;
    two(a);
    console.log('one', a);
}


function two(a){
    a = a + 1;
    console.log('two', a);
}

one();



//call by reference



function three(){
    var b = {
        value: 100,
    }
    four(b)
    console.log('three', b.value);
}

function four(b){
    b.value = b.value + 1;
    console.log('four', b.value);
}

three();