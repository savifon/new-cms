import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="h-[5vh] box-border bg-gray-100 flex items-center justify-center sticky bottom-0">
                <h1>Copyright © {new Date().getFullYear()} NewCMS</h1>
            </footer>
        </>
    );
};

export default Footer;
