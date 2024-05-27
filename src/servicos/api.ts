import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.91.136.148:3000"
})