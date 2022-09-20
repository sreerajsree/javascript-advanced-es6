const myObj = {
    a: 100,
    b: 200,
    c: function () {
        console.log(this);
    }
}

const yourObj = {
    a: 200,
    b: 300
}

var aa = myObj.c;
aa.call(myObj)
