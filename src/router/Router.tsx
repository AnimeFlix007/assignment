import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "../pages/login";
import { useContext } from "react";
import { UserContextState } from "../context/UserContext";
import Home from "../pages/home";

export default function Router() {
  const ctx = useContext(UserContextState)
  const router = createBrowserRouter([
    {
      path: "/",
      element: ctx.user ? <Home /> : <Navigate to="/login" replace={true} />,
    },
    {
      path: "/login",
      element: ctx.user ? <Navigate to="/" replace={true} /> : <Login /> ,
    },
  ]);
  return <RouterProvider router={router} />;
}
