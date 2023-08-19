import React from "react";
import ReactDOM from "react-dom/client";
import UserContext from "./context/UserContext.tsx";
import Router from "./router/Router.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContext>
      <ToastContainer />
      <Router />
    </UserContext>
  </React.StrictMode>
);
