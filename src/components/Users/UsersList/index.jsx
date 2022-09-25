import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../Table/Table";
import { getUser, getUsers } from "../../../api/userService";

const Users = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [setUsers]);

    const fetchUsers = async () => {
        setLoading(true);
        await getUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const setUser = async (id) => {
        setLoading(true);
        await getUser(id).then(({ data }) => {
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
