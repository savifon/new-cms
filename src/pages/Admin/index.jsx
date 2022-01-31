import React from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Admin = (props) => {
    const module = props.module;

    return (
        <>
            <Header />
            <div className="flex">
                <Menu />

                <div className="p-4 w-[80vw]">
                    <h1>Admin</h1>
                    <p>{module}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
