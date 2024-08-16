import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "http://127.0.0.1:3002",
    headers: {
        "Content-Type": "application/json"
    }
})