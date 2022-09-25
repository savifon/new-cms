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
                                <Admin module="dashboard" title="Dashboard" />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/users"
                        element={
                            <Private>
                                <Admin module="users" title="Usuários" />
                            </Private>
                        }
                    />
                    <Route
                        exact
                        path="/users/edit"
                        element={
                            <Private>
                                <Admin
                                    module="users/edit"
                                    title="Editar Usuário"
                                />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default AppRoutes;
