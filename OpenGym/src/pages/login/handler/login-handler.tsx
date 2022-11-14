import axios from "axios";

export async function login(loginData:{email:string, password:string}) {
    const api = axios.create({
        baseURL: `https://opengym.eu/api`
    })
    await api.post("/login", loginData)
}