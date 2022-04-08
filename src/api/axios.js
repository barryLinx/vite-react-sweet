import axios from "axios"
//const developURL='http://localhost:3443/api';
//const developURL = window.location.port ? : window.location.href+'/api'

// let url={
//   production:window.location.href+'/api',
//   development:'https://heroku-node-sweet.herokuapp.com/api',
// };

export default axios.create({
  baseURL:  'https://heroku-node-sweet.herokuapp.com/api', 
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    },
});

export const axiosPrivate = axios.create({
    baseURL: 'https://heroku-node-sweet.herokuapp.com/api', 
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

// switch(process.env.NODE_ENV) {
//   case 'production':
//     url = window.location.href+'/api';
//     break;
//   case 'development':
//   default:
//     console.log(process.env.NODE_ENV);
//     url = 'http://localhost:3443/api';
// }
//export { baseFeach, axiosPrivate };
//export default axios();

