import { useState } from "react"
import { loginUser, registerUser } from "../API/userApi";
import { toastMessage } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/slices/userSlice";

const Login = () => {
  const [login, _] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if(login) {
      const response = await loginUser(formData.get("email") as string, formData.get("password") as string);
      console.log(response, "res");
      if(response === "Ok"){
        dispatch(userActions.loginUser({email: "a@a.co"}))
        navigate("/");
      }
    } else{
      const password = formData.get("password");
      const confirm_password = formData.get("confirm_password");
      if(password !== confirm_password){
        toastMessage("err", "Passwords do not match");
        return;
      }
      const response: any = await registerUser(formData.get("name") as string, formData.get("email") as string, formData.get("password") as string);
      if(response?.status === "Ok"){
        dispatch(userActions.loginUser({email: "a@a.co"}))
        navigate("/");
      }
    }
  }

  return (
    <div className="bg-cyan-50/10 w-full h-screen flex justify-center items-center">
      <div className="w-2/6 flex flex-col px-16 py-20 border-2 border-cyan-500 rounded-xl shadow-2xl">
        <form action="" onSubmit={(e) => handleSubmit(e)} className="w-full">
          <h2 className="font__poppins text-4xl mb-8 text-center text-cyan-600 drop-shadow-xl font-semibold tracking-widest">Welcome</h2>
          {!login && <input
            className="w-full px-3 py-2 my-2 border-none outline outline-1 outline-black/15 
          focus:outline-black text-md"
            type="text"
            name="name"
            placeholder="Username"
            required />}
          <input
            className="w-full px-3 py-2 my-2 border-none outline outline-1 outline-black/15 
          focus:outline-black text-md"
            type="text"
            name="email"
            placeholder="Email"
            required />
          <input
            className="w-full px-3 py-2 my-2 border-none outline outline-1 outline-black/15 
          focus:outline-black text-md"
            type="password"
            name="password"
            placeholder="Password"
            required />
          {!login && <input
            className="w-full px-3 py-2 my-2 border-none outline outline-1 outline-black/15 
          focus:outline-black text-md"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required />}
          <button className="w-full bg-cyan-400 px-4 py-3 mt-2 hover:bg-cyan-400/80 transition-all
        text-white font-semibold tracking-[6px] text-sm">{login ? "LOGIN" : "SIGNUP"}</button>
        </form>
      </div>
    </div>
  )
}

/*
  login
    -> logo
    -> email
    -> password
    -> login btn

  signup
    -> logo
    -> name
    -> email
    -> password
    -> confirm password
    -> signup btn
*/

export default Login