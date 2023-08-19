const axios = require('axios');
axios.defaults.baseURL = "https://localhost:8002";


const testLogin = ()=>{
  axios.post("/api/users/login",{
    email:"nandigamharsha@gmail.com",
    password:"Sj@15634"
  }).then(res=>{
    console.log(res);

  }).catch(error=>console.log("error"));
}


testLogin();