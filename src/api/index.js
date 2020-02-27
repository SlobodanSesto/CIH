import axios from './config.js'

export default {
    testing() {
        console.log(process.env.VUE_APP_API);
        return axios.get('/test');
    }
}