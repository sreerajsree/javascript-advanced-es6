const arr = [
    {
        name : 'sreeraj',
        place : 'bangalore',
        rank : 5
    },
    {
        name : 'sreeraj1',
        place : 'bangalore1',
        rank : 8
    },
    {
        name : 'sreeraj2',
        place : 'bangalore2',
        rank : 4
    },
    {
        name : 'sreeraj3',
        place : 'bangalore3',
        rank : 3
    },
    {
        name : 'sreeram',
        place : 'kollam',
        rank : 7
    }
];

//foreach//

arr.forEach((item, index) => {
    // console.log(index);
    // console.log(item)
    // console.log(item.name);
});


//find//

var find = arr.find((item) => {
    return item.name === 'sreeraj';
});

//console.log(find);

var find1 = arr.find((item) => {
    return item.rank < 5;
});

//console.log(find1);

//filter//

var filter = arr.filter((item) => {
    return item.rank < 5;
});

//console.log(filter);



//map//


var map = arr.map((item) => {
    return item.name;
});

//console.log(map);



//reduce//


var reduce = arr.reduce((total,item) => {
    return total + item.rank;
}, 0);


console.log(reduce);



