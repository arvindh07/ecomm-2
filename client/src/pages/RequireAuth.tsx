import { useDispatch, useSelector } from "react-redux"
import { StoreState } from "../store/store"
import Login from "./Login";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthUser } from "../API/userApi";
import { userActions } from "../store/slices/userSlice";

const RequireAuth = () => {
    const userLoggedIn = useSelector((store: StoreState) => store.userInfo?.isLoggedIn);
    const dispatch = useDispatch();

    console.log(userLoggedIn);

    useEffect(() => {
        const callAuth = async () => {
            const res: any = await checkAuthUser();
            console.log(res, "R"); 
            if(res?.status === "Ok"){
                dispatch(userActions.loginUser({"email": "a@a.co"}));
            }
        };

        callAuth();
    }, [])

    return (
        <>
            {userLoggedIn ? <Outlet /> : <Login />}
        </>
    )
}

export default RequireAuth