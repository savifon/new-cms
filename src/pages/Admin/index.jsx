import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import Form from "../../components/Form";
import Users from "../../components/Users";

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
                    <Form
                        title="FORM PARA EDITAR USUÁRIO! (em breve completo)"
                        data={data}
                    />
                );

            default:
                return <p>Nada aqui ainda (em desenvolvimento!)</p>;
        }
    };

    return (
        <>
            <Header />
            <div className="flex">
                <Menu />

                <div className="p-4 w-[80vw]">
                    <h1>Título: {title}</h1>
                    <p>Módulo: {module}</p>

                    <br />
                    <hr />
                    <p>Módulo renderizado:</p>
                    <hr />
                    <br />
                    {renderModule(module)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
