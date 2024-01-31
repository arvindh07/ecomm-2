import { useEffect } from "react"
import Header from "../components/Header"
import { checkAuthUser } from "../API/userApi"


const Home = () => {
  useEffect(() => {
    console.log("mno");
    checkAuthUser();
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home