import React from "react";

const User = (props) => {
    const { title, data } = props;
    console.log(data.id);

    if (data) {
        return (
            <>
                <h1>Form</h1>
                <p>{title}</p>

                <br />

                <form
                    action=""
                    className="flex items-start flex-wrap gap-x-[10px] gap-y-[15px]"
                >
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
                            value={data.user_name}
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <label htmlFor="full_name" className="flex flex-col">
                        Nome completo
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            value={data.full_name}
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <label htmlFor="email" className="flex flex-col">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <label htmlFor="password" className="flex flex-col">
                        Senha
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <label htmlFor="id_users_group" className="flex flex-col">
                        Grupo
                        <input
                            type="text"
                            name="id_users_group"
                            id="id_users_group"
                            value={data.id_users_group}
                            className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white font-semibold p-2 rounded-md w-[300px] border-2 border-gray-900 hover:bg-gray-900 hover:border-gray-600 hover:shadow-xl transition-all"
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
