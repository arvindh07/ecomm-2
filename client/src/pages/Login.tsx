import { useState } from "react"
import { loginUser } from "../API/userApi";

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password")); 
    loginUser(formData.get("email") as string, formData.get("password") as string);
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