import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, [loading]);

    const login = (email, password) => {
        if (email === "admin@example.com" && password === "abc123") {
            const loggedUser = JSON.stringify({
                id: 1,
                email: email,
                name: "Admin",
                permission: 1,
            });

            localStorage.setItem("user", loggedUser);
            setUser(loggedUser);

            navigate("/");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);

        navigate("login");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default { AuthContext };
