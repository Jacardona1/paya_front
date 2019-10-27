import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
install (Vue, options) {


    Vue.prototype.$userLogin = async (token) => {
        const parameter = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/auth/user',
            headers: {
                Authorization: "Bearer " + token
            }
        }
        console.log(parameter)
        const response = await Vue.prototype.axios(parameter);
        return response.data
    }


    }
}