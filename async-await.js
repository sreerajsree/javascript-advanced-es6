console.log('Started');
getValue();
console.log('Ended');


async function getValue(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const jsonData = await data.json();
    console.log(jsonData);
    return jsonData;
}