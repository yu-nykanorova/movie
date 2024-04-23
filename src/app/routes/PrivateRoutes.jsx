<<<<<<< HEAD
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({loggedIn}) => {
    return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

=======
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({loggedIn}) => {
    return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

>>>>>>> ea9b5e5fc51b3d5bf85c1cb30654ebff3ccf8fa2
export default PrivateRoutes;