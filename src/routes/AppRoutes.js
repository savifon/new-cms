import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Admin from "../pages/Admin";

import { AuthProvider, AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando...</div>;
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Private>
                                <Admin />
                            </Private>
                        }
                    />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
