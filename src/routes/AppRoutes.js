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

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route
                        exact
                        path="/"
                        element={
                            <Private>
                                <Admin module="dashboard" />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/users"
                        element={
                            <Private>
                                <Admin module="users" />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/products"
                        element={
                            <Private>
                                <Admin module="products" />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
