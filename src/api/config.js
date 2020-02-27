import axios from 'axios';

var instance = axios.create({
    baseURL: process.env.VUE_APP_API + "api",
  })

export default instance;
