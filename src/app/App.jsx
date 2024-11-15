import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet
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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout loggedIn={loggedIn} />}>
        <Route element={<GuestRoutes loggedIn={loggedIn} />}> 
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
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
    )
  );

  return <RouterProvider
            router={router}
            future={{
              v7_startTransition: true,
              v7_fetcherPersist: true,
              v7_relativeSplatPath: true,
              v7_normalizeFormMethod: true,
              v7_partialHydration: true,
              v7_skipActionErrorRevalidation: true,
            }}
          />;
};

const MainLayout = ({ loggedIn }) => {
  return (
    <div className={loggedIn ? "container" : "container-loggedout"}>
      {loggedIn ? (
        <>
          <Sidebar />
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
