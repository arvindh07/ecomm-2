import toast from "react-hot-toast";

export const toastMessage = (status: string, message: string) => {
    switch (status) {
        case "Ok":
            toast.success(message);
            break;
        case "User exists":
            toast.error(message);
            break;
        case "Invalid password":
            toast.error(message);
            break;
        case "err":
            toast.error(message);
            break;
        case "Ok-Register":
            toast.success(message);
            break;
        default:
            break;
    }
}