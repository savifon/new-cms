import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../Table/Table";

import { supabase } from "../../../api/supabaseClient";

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
                setUsers(data);
                setLoading(false);
            });
    };

    const setUser = async (id) => {
        await supabase
            .from("users")
            .select("*")
            .eq("id", id)
            .then(({ data }) => {
                navigate("/users/edit", { state: { data: data[0] } });
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
