const obj1 = {
    name: 'Sreeraj',
    place: 'Bangalore'
}


function myfunction() {

    const {
        name,
        place
    } = obj1;


    console.log(name,place);
}


function myFunction2() {

    const {
        name,
        ...others
    } = obj1

    console.log(name, others);
}


myfunction();
myFunction2();


var s1 = {
    name: 'sreeraj',
    place: 'bangalore'
}

var s2 = {
    name: 'sreeram',
    place: 'kollam'
}


function abc() {

    var{
        name,
        place
    } = s1

    var{
        name : name2,
        place : place2
    } = s2

    console.log(name, place, name2, place2);
}

abc();