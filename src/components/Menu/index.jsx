import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav className="w-[20vw] h-[90vh] flex flex-col bg-gray-600 text-white">
                <Link className="p-2 hover:bg-gray-800 transition-all" to="/">
                    Dashboard
                </Link>
                <Link
                    className="p-2 bg-gray-500 hover:bg-gray-800 transition-all"
                    to="/users"
                >
                    Users
                </Link>
                <Link
                    className="p-2 hover:bg-gray-800 transition-all"
                    to="/products"
                >
                    Products
                </Link>
                <Link
                    className="p-2 bg-gray-500 hover:bg-gray-800 transition-all"
                    to="#"
                >
                    Opção 4
                </Link>
                <Link className="p-2 hover:bg-gray-800 transition-all" to="#">
                    Opção 5
                </Link>
            </nav>
        </>
    );
};

export default Menu;
