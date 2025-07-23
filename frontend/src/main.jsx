import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router"; 
import { Toaster } from "react-hot-toast";


import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Workspace from "./pages/Workspace.jsx";
import CarsPage from "./pages/CarsPage.jsx";
import CarDetails from "./pages/CarDetails.jsx";


import { CarDetailContext } from "./context/CarContext.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";
import { UserContext } from "./context/usercontext.js";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/SignUp", element: <SignUp /> },
  { path: "/SignIn", element: <SignIn /> },
  { path: "/explore", element: <Workspace /> },
  { path: "/Cars", element: <CarsPage /> },
  { path: "/Cars/:id", element: <CarDetails /> },
  { path: "/cart" , element : <CartPage/>},
  { path: "/favourites" , element : <FavouritePage/> }, 
]);

const RootApp = () => {
  const [CarDetailData, setCarDetailData] = useState({});
  const [UserData, setUserData] = useState()

  return (
    <StrictMode>
      <UserContext.Provider value={{UserData, setUserData}}>
      <CarDetailContext.Provider value={{ CarDetailData, setCarDetailData }}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </CarDetailContext.Provider>
      </UserContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootApp />);