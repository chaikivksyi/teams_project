import api from './settings';
const path = 'users/'

export default {
    login(user) {
        return api.post(`${path}/login`, user);
    },
    register(user) {
        return api.post(`${path}/register`, user)
    },
    // auth() {
    //     return api.post(`${path}/auth`)
    // },
};