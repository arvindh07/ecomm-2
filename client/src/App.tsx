import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import RequireAuth from "./pages/RequireAuth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth />,
    children: [{
      path: "/",
      element: <Home />
    }]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
        <Toaster position="top-right" />
      </Provider>
    </>
  )
}

export default App
