const axios = require('axios');
axios.defaults.baseURL = "https://cuddly-system-6r7955qwj5724r7q-8002.app.github.dev/";


const testLogin = ()=>{
  axios.post("/api/users/login",{
    email:"nandigamharsha@gmail.com",
    password:"Sj@15634"
  }).then(res=>{
    console.log(res);

  }).catch(error=>console.log("error"));
}


testLogin();