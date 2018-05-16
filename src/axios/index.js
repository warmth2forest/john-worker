import axios from 'axios'
import router from '../router/index.js'
/*
axios.interceptors.response.use( (response) => {
    return response
},  (err) => {
    console.log(err.response.status)
          // Do something with response error
    if(err.response.status === 403){
        router.push({ 
          	path: '/403', 
        }); 
    }
    if(err.response.status === 404){
        router.push({ 
          	path: '/404', 
        }); 
    }
    if(err.response.status > 499){
        router.push({
          	path: '/500', 
        });
    }
})
*/

export default axios