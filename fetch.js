
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
fetch('http://example.com/movies.')

  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });


// fetch('https://jsonplaceholder.typicode."/products"',{
//     method:"GET",
    
// })


// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// console.log('success', data);
// })
// .catch(function (error) {
// console.log('error', error);
// });



fetch('http://example.com/movies.')
fetch('http://example.com/movies.')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
