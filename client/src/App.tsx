import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  }
])

function App() {
  return (
    <>
      {/* home - login page */}
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
