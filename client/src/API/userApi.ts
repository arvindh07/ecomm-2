import { API_DOMAIN, AUTH_STATUS_URL, LOGIN_URL, SIGNUP_URL } from "./endpoints"
import { toastMessage } from "../utils/helpers";

export const loginUser = async (email: string, password: string) => {
    const url = API_DOMAIN + LOGIN_URL;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            email,
            password
        })
    });
    const json = await response.json();
    toastMessage(json?.status, json?.message);
    return json?.status;
}

export const registerUser = async (name: string, email: string, password: string) => {
    const url = API_DOMAIN + SIGNUP_URL;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    const json = await response.json();
    toastMessage(json?.status, json?.message);
}

export const checkAuthUser = async () => {
    const res = await fetch(API_DOMAIN + AUTH_STATUS_URL, {
        credentials: 'include'
    }); 
    return await res.json();
}