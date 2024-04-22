import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { Favorites } from "../../pages/favorites/Favorites";
import { Login } from "../../pages/auth/login/Login";
import GuestRoutes from "./GuestRoutes";
import { useState } from "react";
import App from "../../App";
import PrivateRoutes from "./PrivateRoutes";
import { Trending } from "../../pages/trending/Trending";
import { Home } from "../../pages/home/Home";

export const AppRouter = () => {
    const [loggedIn] = useState (true);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App loggedIn={loggedIn} />}>
                <Route element={<GuestRoutes loggedIn={loggedIn} />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                    <Route index={true} path="/" element={<Home />} />
                    <Route index={true} path="/trending" element={<Trending />} />
                    <Route index={true} path="/favorites" element={<Favorites />} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};