import { useSelector } from "react-redux"
import { StoreState } from "../store/store"

const Header = () => {
    const userInfo = useSelector((store: StoreState) => store?.userInfo);
    return (
        <div className="flex justify-between px-8 py-3 border-2">
            {/* logo */}
            {/* action btns */}
            <h2 className="border-2 border-sky-500 bg-sky-5 px-3 py-1 rounded-s-md rounded-tr-md cursor-pointer hover:bg-sky-500 hover:text-white transition">Clothing Store</h2>
            <div>
                {userInfo?.isLoggedIn && <div>
                    <button className="hover:text-sky-400">Logout</button>
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