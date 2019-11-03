import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
install (Vue, options) {


    Vue.prototype.$userLogin = async (token) => {
        const urlServer = process.env.VUE_APP_URL_SERVER
        const parameter = {
            method: 'get',
            url: urlServer+'user',
            headers: {
                Authorization: "Bearer " + token
            }
        }
        const response = await Vue.prototype.axios(parameter);
        return response.data
    }

    Vue.prototype.$urlServer = process.env.VUE_APP_URL_SERVER;

    }
}
