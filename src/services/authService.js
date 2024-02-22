import {apiService} from "./apiService";
import {urls} from "../constans";

const tokenKey = 'token';

const authService = {
    register(data) {
        return apiService.post(urls.auth.register, data);
    },
    async login(data) {
        const {token} = await apiService.post(urls.auth.login, data);
        console.log(token)
    },
    me() {
        return apiService.get(urls.auth.me)
    },
    setToken(token) {
        localStorage.setItem(tokenKey, token);
    },
    getToken() {
        return localStorage.getItem(tokenKey);
    },
    deleteToken() {
        localStorage.removeItem(tokenKey);
    }
}

export {
    authService
};