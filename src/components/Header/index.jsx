import React, { useContext } from "react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
    const { logout } = useContext(AuthContext);

    return (
        <>
            <header className="h-[5vh] box-border flex items-center justify-between p-2 bg-gray-700 text-white sticky top-0">
                <h1 className="text-2xl font-bold">NewCMS</h1>
                <div>
                    <button
                        onClick={logout}
                        className="transition-all bg-gray-800 hover:bg-gray-900 text-white p-2 rounded-full"
                    >
                        <PowerIcon className="h-5 w-5" />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
