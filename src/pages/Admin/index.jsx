import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import Dashboard from "../../components/Dashboard";
import Form from "../../components/Form";
import Users from "../../components/Users/UsersList";
import User from "../../components/Users/UsersItem";

const Admin = (props) => {
    const { module, title } = props;
    const location = useLocation();
    const data = location.state?.data;

    const renderModule = (module) => {
        switch (module) {
            case "users":
                return <Users />;

            case "users/edit":
                return (
                    <User
                        title="Preencha os campos abaixo para editar o usuário"
                        data={data}
                    />
                );

            default:
                return <Dashboard />;
        }
    };

    return (
        <>
            <Header />
            <div className="flex">
                <Menu />

                <div className="p-4 w-[85vw] flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <pre>path: {module}</pre>
                    </div>

                    <div>{renderModule(module)}</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
