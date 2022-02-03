import React from "react";

const Form = (props) => {
    const { title, data } = props;
    // console.log(data);

    if (data) {
        return (
            <>
                <h1>Form</h1>
                <p>{title}</p>

                <br />

                <form
                    action=""
                    className="flex flex-wrap gap-x-[10px] gap-y-[15px]"
                >
                    {Object.entries(data[0]).map((prop) => (
                        <label
                            key={crypto.randomUUID()}
                            htmlFor={prop[0]}
                            className="flex flex-col"
                        >
                            {prop[0]}
                            <input
                                className="border-2 rounded-md p-2 w-[300px] focus:border-gray-400"
                                type="text"
                                value={prop[1]}
                                name={prop[0]}
                                id={prop[0]}
                            />
                        </label>
                    ))}
                </form>
            </>
        );
    }

    return "Sem dados para exibir no Form.";
};

export default Form;
