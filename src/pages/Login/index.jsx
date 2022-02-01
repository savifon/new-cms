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

        if (!login(email, password)) {
            alert("erro!");
        }
    };

    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center h-screen">
                <h1 className="text-3xl font-semibold">Seja bem-vindo(a)</h1>

                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="flex flex-col gap-5 items-center"
                >
                    <label
                        htmlFor="email"
                        className="flex flex-col text-center"
                    >
                        Digite seu e-mail
                        <input
                            required
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="email"
                            value="admin@example.com"
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <label
                        htmlFor="password"
                        className="flex flex-col text-center"
                    >
                        Digite sua senha
                        <input
                            required
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="password"
                            value="abc123"
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white font-semibold p-2 rounded-md w-[300px] border-2 border-gray-900 hover:bg-gray-900 hover:border-gray-600 hover:shadow-xl transition-all"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
