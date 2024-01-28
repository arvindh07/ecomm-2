import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";

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
      <Toaster position="top-right" />
    </>
  )
}

export default App
