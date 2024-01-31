import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";

const appRouter = createBrowserRouter([
  {
    path: "/auth",
    element: <Login />
  },
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <>
      {/* home - login page */}
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
        <Toaster position="top-right" />
      </Provider>
    </>
  )
}

export default App
