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

    useEffect(() => {
        const callAuth = async () => {
            const res: any = await checkAuthUser();
            if(res?.status === "Ok"){
                dispatch(userActions.loginUser({"email": "a@a.co"}));
            } else{
                dispatch(userActions.logoutUser());
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