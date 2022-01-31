import React from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import Users from "../../container/Users";

const Admin = (props) => {
    const { module, title } = props;

    const renderModule = (module) => {
        switch (module) {
            case "users":
                return <Users />;

            default:
                return <p>Nenhum!!!</p>;
        }
    };

    return (
        <>
            <Header />
            <div className="flex">
                <Menu />

                <div className="p-4 w-[80vw]">
                    <h1>{title}</h1>
                    <p>{module}</p>

                    {renderModule(module)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
