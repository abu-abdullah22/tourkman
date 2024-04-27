import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children : PropTypes.node
}