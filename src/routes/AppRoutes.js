import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    // Navigate,
} from "react-router-dom";

import Login from "../pages/Login";
import Admin from "../pages/Admin";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Admin />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
