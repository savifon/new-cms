import React from "react";

const Dashboard = () => {
    const arr = [];
    for (var i = 1; i <= 12; i++) {
        arr.push(i.toString());
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {arr.map((item) => (
                <div
                    key={item}
                    className="bg-slate-600 text-white flex flex-col gap-5 p-4 rounded-md"
                >
                    <span className="text-xl font-bold">Card {item}</span>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Harum accusantium...
                    </span>
                </div>
            ))}
            <div className="h-[299999px]">asd</div>
        </div>
    );
};

export default Dashboard;
