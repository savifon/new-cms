import React from "react";

const Form = (props) => {
    const { title } = props;

    return (
        <>
            <h1>Form</h1>
            <p>{title}</p>
        </>
    );
};

export default Form;
