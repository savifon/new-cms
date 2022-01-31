import React from "react";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

const Admin = (props) => {
    const { module, title } = props;

    return (
        <>
            <Header />
            <div className="flex">
                <Menu />

                <div className="p-4 w-[80vw]">
                    <h1>{title}</h1>
                    <p>{module}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
