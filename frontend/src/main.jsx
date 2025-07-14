import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/SignIn.jsx";
import Workspace from "./pages/Workspace.jsx";
import CarsPage from "./pages/CarsPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/SignIn",
    element : <SignIn/>
  },
  {
    path : '/explore',
    element : <Workspace/>
  },
  {
    path : "/Cars",
    element : <CarsPage/>
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
          <Toaster position="top-center"/>

    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>
);
