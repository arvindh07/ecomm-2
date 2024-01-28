import toast from "react-hot-toast";
import { API_DOMAIN, LOGIN_URL } from "./endpoints"

export const loginUser = async (email: string, password: string) => {
    const url = API_DOMAIN + LOGIN_URL;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const json = await response.json();
    console.log(json);
    switch (json?.status) {
        case "Ok":
            toast.success(json?.message);
            break;
        case "User exists":
            toast.error(json?.message);
            break;
        case "Invalid password":
            toast.error(json?.message);
            break;
        default:
            break;
    }
}