import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="text-center bg-gray-100 p-2">
                <h1>Copyright © {new Date().getFullYear()} NewCMS</h1>
            </footer>
        </>
    );
};

export default Footer;
