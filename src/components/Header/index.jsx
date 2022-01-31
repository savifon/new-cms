import React from "react";

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between p-2 bg-gray-700 text-white sticky">
                <h1 className="text-2xl font-bold">NewCMS</h1>
                <div>
                    <button className="transition-all bg-gray-800 text-white py-1 px-4 rounded-md">
                        Sair
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
