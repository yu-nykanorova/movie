import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import PropTypes from "prop-types";

import { Login } from "../pages/auth/login/Login";
import { Sidebar } from "../shared/ui/Sidebar/Sidebar";
import { Home } from "../pages/home/Home";
import { Trending } from "../pages/trending/Trending";
import { Favorites } from "../pages/favorites/Favorites";
import { Player } from "../pages/player/Player";
import { FilmPage } from "../pages/filmPage/FilmPage";
import { NotFound } from "../shared/ui/NotFound/NotFound";
import { SignUp } from "../pages/auth/signup/SignUp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout loggedIn={loggedIn} onLogout={handleLogout} />}>
        <Route element={<GuestRoutes loggedIn={loggedIn} />}> 
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Route>
        <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/filmpage/:id" element={<FilmPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return <RouterProvider router={router} />;
};

const MainLayout = ({ loggedIn, onLogout }) => {

  return (
    <div className={loggedIn ? "container" : "container-loggedout"}>
      {loggedIn ? (
        <>
          <Sidebar onLogout={onLogout} />
          <div className="page">
            <Outlet />
          </div>
        </>
      ) : (
        <Outlet />
      )}  
    </div>
  );
};

const GuestRoutes = ({ loggedIn }) => {
  return loggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

const PrivateRoutes = ({ loggedIn }) => {
  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

App.propTypes = {
  loggedIn: PropTypes.bool,
};

export default App;
