import React from "react";
import { Squares2X2Icon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav className="w-[15vw] h-[90vh] box-border flex flex-col items-center md:items-start bg-gray-600 text-white divide-y divide-gray-500 sticky top-[5vh]">
                <Link
                    className="flex items-center gap-2 md:w-full p-2 hover:bg-black hover:bg-opacity-10 transition-all"
                    to="/"
                >
                    <Squares2X2Icon className="h-8 w-8" />
                    <span className="hidden md:block">Dashboard</span>
                </Link>
                <Link
                    className="flex items-center gap-2 md:w-full p-2 hover:bg-black hover:bg-opacity-10 transition-all"
                    to="/users"
                >
                    <UsersIcon className="h-8 w-8" />
                    <span className="hidden md:block">Users</span>
                </Link>
            </nav>
        </>
    );
};

export default Menu;
