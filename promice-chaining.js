console.log('Requesting 1');

fetch('c')
    .then((data) =>{
        return data.json();
    })
    .then((data) =>{
        console.log(data);
    })