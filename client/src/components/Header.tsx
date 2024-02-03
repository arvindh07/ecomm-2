import { useDispatch, useSelector } from "react-redux"
import { StoreState } from "../store/store"
import { logoutUser } from "../API/userApi";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/slices/userSlice";

const Header = () => {
    const userInfo = useSelector((store: StoreState) => store?.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async() => {
        const res = await logoutUser();      
        if(res?.status === "Ok-Logout"){
            dispatch(userActions.logoutUser());
            navigate("/");
        }
    }
    return (
        <div className="flex justify-between px-8 py-3 border-2">
            {/* logo */}
            {/* action btns */}
            <h2 className="border-2 border-sky-500 bg-sky-5 px-3 py-1 rounded-s-md rounded-tr-md cursor-pointer hover:bg-sky-500 hover:text-white transition">Clothing Store</h2>
            <div>
                {userInfo?.isLoggedIn && <div>
                    <button className="hover:text-sky-400" onClick={handleLogout}>Logout</button>
                </div>}
                {!userInfo?.isLoggedIn && <div>
                    <button className="hover:text-sky-400">Login</button>
                    <span className="px-3"> | </span>
                    <button className="hover:text-sky-400">Signup</button>
                </div>}
            </div>
        </div>
    )
}

export default Header