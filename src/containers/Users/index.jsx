import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../components/Table/Table";

import { supabase } from "../../api/supabaseClient";

const Users = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers();
    }, [setUsers]);

    const getUsers = async () => {
        await supabase
            .from("users")
            .select("id, user_name, full_name, email")
            .order("id", { ascending: true })
            .then(({ data }) => {
                // console.log("Dados: ", data);
                setUsers(data);
                setLoading(false);
            });
    };

    const setUser = async (id) => {
        // const updates = {
        //     id: id,
        //     email: `novo${crypto.randomUUID()}@email.com.br`,
        // };

        // await supabase
        //     .from("users")
        //     .upsert(updates, {
        //         returning: "minimal",
        //     })
        //     .then(({ data }) => {
        //         console.log("Update: ", data);
        //         getUsers();
        //     });

        await supabase
            .from("users")
            .select("*")
            .eq("id", id)
            .then(({ data }) => {
                // console.log(data);
                // navigate("/users/edit", { data: data });
                navigate("/users/edit", { state: { data: data } });
                // setUserUpdate(data);
            });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Table
                data={users}
                title="Users"
                actions={{
                    edit: { function: setUser },
                    del: "/users/?delete&id=emBreve",
                }}
            />
        </>
    );
};

export default Users;
