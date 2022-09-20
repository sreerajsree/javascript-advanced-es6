var obj = {
    name: 'sreeraj',
    place: 'bangalore',
    subject : {
        main : 'cs'
    }
}


var {
    subject : {
        main
    }
} = obj;

console.log(main);