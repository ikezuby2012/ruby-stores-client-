import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/user";

class AuthService {

    async signup(name, email, password, passwordConfirm) {
        try {
            const res = await axios.post(API_URL + "/signup", {
                name, email, password, passwordConfirm
            });
            if (res.data.token) {
                localStorage.getItem("token", JSON.stringify(res.data.token));
            }
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err.response.data);
            // console.log(message);
            return undefined;
        }
    }

    async login(email, password) {
        try {
            const res = await axios.post(API_URL + "/login", {
                email, password
            });
            if (res.data.token) {
                localStorage.getItem("token", JSON.stringify(res.data.token));
                console.log(res.data.token);
            }
            return res.data;
        } catch (err) {
            console.log(err.response.data);
            return undefined;
            // this should return undefined
            //its just another way of handling a very useless error 
            // sure there will be a fix in the future
        }
    }

    async logout() {
        try {
            await axios.get(`${API_URL}/logout`);
        } catch (err) {
            console.log(err.response.message);
        }
        localStorage.removeItem("user");
    }
}

export default new AuthService();