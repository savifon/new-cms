import React from "react";

import Table from "../../components/Table/Table";

const Users = () => {
    const data = [
        {
            name: "Administrador",
            email: "admin@example.com",
            cpf: "11122233344",
            salary: 100000,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Lorem ipsum",
            email: "email@example.com",
            cpf: "11122233344",
            salary: 20000,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Lorem ipsum",
            email: "email@example.com",
            cpf: "11122233344",
            salary: 5000,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            name: "Lorem ipsum",
            email: "email@example.com",
            cpf: "11122233344",
            salary: 7500,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <>
            <Table data={data} title="Users" lastLarger />
        </>
    );
};

export default Users;
