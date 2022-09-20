
//STACK

//stores local variables

//HEAP

//stores object and large data structures




function add(a,b){

    function myAdd(){
        const c = a + b;
        return c;
    }

    return myAdd;
}


function main(){
    const result = add(3,4)
    const val = result();
    console.log(val);
}

main();




var objs = [
    {
        name: 'one',
        msg: 'hello this is one'
    },
    {
        name: 'two',
        msg: 'hello this is two'
    },
    {
        name: 'three',
        msg: 'hello this is three'
    }
];


function main1(){
    objs.forEach((item)=>{
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallback(item.msg);
        document.body.appendChild(bt);
    });
}


function getCallback(arg) {
    return function(){
        alert(arg)
    }
}


main1();
