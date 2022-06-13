const axios = require('axios');
const { log } = require('console');

/*axios.post('http://127.0.0.1:3000/product', {
    "name": "Zumo de Uva",
    "category": "Bebida",
    "barcode": "0000-11",
    "price": "4000",
    "image": "https://www.vitarrico.com.co/wp-content/uploads/2019/07/01Bebidas-1.png"
},
{
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
    }
  })
.then((response) => console.log(response.data))
.catch((error) => console.log(error))*/

/*axios.get('http://127.0.0.1:3000/providers')
.then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
})*/

/*axios.post('http://127.0.0.1:3000/signin', {
    "mail":"juandadgj@gmail.com",
    "password": "JdGj1100080400"
}).then((result) => {
    console.log(result.data);
}).catch((err) => {
    console.log(err);
});*/

axios.post('http://127.0.0.1:3000/signup', {
    "name":"Katherin Vanessa",
    "last_name":"Perez Bastidas",
    "document": "1000886868",
    "mail":"vanebastidas112849@gmail.com",
    "password": "salvacion11.",
    "phone": "3108425583"
}).then((result) => {
    console.log(result.data);
}).catch((err) => {
    console.log(err);
});

/*axios.post('http://127.0.0.1:3000/provider', {
    "name":"Lacteos Cadavid SAS",
    "direction":"CARRERA 82 A 27 A 35 AP 108",
    "phone": "6044887508",
    "mail":"lacteos-cadavid@hotmail.com"
},
{
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
    }
  }).then((result) => {
    console.log(result.data);
}).catch((err) => {
    console.log(err);
});*/

/*axios.get('http://127.0.0.1:3000/providers',
{
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzU4NjlmMTY2MjgwNjdkOGRmMDljMiIsImlhdCI6MTY1NTA1OTEyMiwiZXhwIjoxNjU1MTQ1NTIyfQ.LSRKZEEB6xVjkL-bK2T8w-htOZYezCQlAW1gGy5Slac'
    }
  })
.then((response) => {
    console.log(response.data);
}).catch((error) => {
    console.log(error);
});*/