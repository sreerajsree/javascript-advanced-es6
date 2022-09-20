

const values = [1,2,3,4,5,6]

values.forEach(function (val){
    console.log('Hello World', val)
})






//functions with no names are called anonymous function



//Hoisting

myFunction(100)

function myFunction(val){
    console.log('Hello Me =', val)
}

const fn = function (val){
    console.log('Hello Me =', val)
}


fn(200)

//


const fn1 = function (a,b){
    return (a+b);
}

//with arrow function
const fn2 = (a,b) => {
    return (a*b);
}

//returning only one value
const fn3 = (a,b) => a-b

//one argument
const fn4 = a => a + 100

const add = fn1(3,2)
const mutiply = fn2(3,2)
const subtract = fn3(5,2)
const plus = fn4(100)


console.log(add, mutiply, subtract, plus)