import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const { authenticated, login } = useContext(AuthContext);

    if (authenticated) {
        return <Navigate to="/" />;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const password = data.get("password");

        // login(email, password);
        if (!login(email, password)) {
            alert("erro!");
        }
    };

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="email">Digite seu e-mail</label>
                <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                />

                <label htmlFor="password">Digite sua senha</label>
                <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                />

                <button type="submit">Entrar</button>
            </form>
        </>
    );
};

export default Login;
