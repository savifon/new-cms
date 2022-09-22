import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "../../../api/supabaseClient";

const User = (props) => {
    const { title, data } = props;
    const navigate = useNavigate();
    const [username, setUsername] = useState(data.user_name);
    const [fullName, setFullName] = useState(data.full_name);
    const [email, setEmail] = useState(data.email);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        let response;
        event.preventDefault();
        setLoading(true);

        if (username && fullName && email) {
            response = await supabase
                .from("users")
                .update({
                    user_name: username,
                    full_name: fullName,
                    email: email,
                })
                .eq("id", data.id);
        } else {
            alert("Preencha todos os campos!");
        }

        if (response.status === 200) return navigate("/users");
        alert("Erro ao atualizar usuário!");
        setLoading(false);
    };

    if (data) {
        return (
            <>
                <p>{title}</p>

                <br />

                <form onSubmit={handleSubmit} method="post">
                    <div className="flex items-start flex-wrap gap-x-[10px] gap-y-[15px] mb-3">
                        <input type="hidden" name="id" value={data.id} />

                        <label htmlFor="created_at" className="flex flex-col">
                            Criado em
                            <input
                                disabled
                                type="text"
                                name="created_at"
                                id="created_at"
                                value={data.created_at}
                                className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400 opacity-50"
                            />
                        </label>

                        <label htmlFor="user_name" className="flex flex-col">
                            Nome de usuário
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                            />
                        </label>

                        <label htmlFor="full_name" className="flex flex-col">
                            Nome completo
                            <input
                                type="text"
                                name="full_name"
                                id="full_name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                            />
                        </label>

                        <label htmlFor="email" className="flex flex-col">
                            E-mail
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`
                            ${loading ? "cursor-not-allowed" : "cursor-pointer"}
                            bg-gray-800 text-white font-semibold p-2 rounded-md w-[300px] border-2 border-gray-900 hover:bg-gray-900 hover:border-gray-600 hover:shadow-xl transition-all`}
                        disabled={loading}
                    >
                        Salvar
                    </button>
                </form>
            </>
        );
    }

    return "";
};

export default User;
