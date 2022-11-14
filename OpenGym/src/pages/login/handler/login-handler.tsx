import axios from "axios";

export async function login(loginData:{email:string, password:string}) {
    const api = axios.create({
        baseURL: `https://reqres.in/api`
    })
    await api.post("/login", loginData)
}