console.log('Requesting 1');

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) =>{
        return data.json();
    })
    .then((data) =>{
        console.log(data);
    })