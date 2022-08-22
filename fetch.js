
const { request } = require("'https://jsonplaceholder.typicode.com'");

fetch('https://jsonplaceholder.typicode.com/products/fruits')
    .then(response => response.json())
    .then(json => console.log(json));
    console.log(myJson);


    