import "./Table.css";

import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
    const { lastLarger, data, title, tag, money, actions } = props;

    const handleThead = (data) => {
        if (data.length > 0) {
            return (
                <tr
                    key={crypto.randomUUID()}
                    className={`${lastLarger ? "lastLarger" : ""}`}
                >
                    {Object.keys(data[0]).map((prop) => (
                        <th key={crypto.randomUUID()}>{prop}</th>
                    ))}
                    {actions ? <th>Actions</th> : ""}
                </tr>
            );
        }

        return null;
    };

    const handleTbody = (data) => {
        if (data) {
            return (
                <tr key={crypto.randomUUID()}>
                    {Object.entries(data).map((prop) => (
                        <td
                            data-label={prop[0]}
                            key={crypto.randomUUID()}
                            className={`${tag === prop[0] ? "tag" : ""}`}
                        >
                            <span>
                                {`${
                                    money === prop[0]
                                        ? formatCurrency(prop[1])
                                        : prop[1]
                                }`}
                            </span>
                        </td>
                    ))}
                    {actions ? (
                        <td className="space-x-2">
                            {actions.edit ? (
                                <button
                                    className="rounded-md bg-white bg-opacity-10 py-1 px-2"
                                    onClick={() =>
                                        actions.edit.function(data["id"])
                                    }
                                >
                                    Editar
                                </button>
                            ) : (
                                ""
                            )}
                            {actions.del ? (
                                <Link
                                    className="rounded-md bg-white bg-opacity-10 py-1 px-2"
                                    to={actions.del}
                                >
                                    Excluir
                                </Link>
                            ) : (
                                ""
                            )}
                        </td>
                    ) : (
                        ""
                    )}
                </tr>
            );
        }

        return null;
    };

    const formatCurrency = (value) => {
        return (
            "R$ " + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        );
    };

    return (
        <div className="dataTable">
            {data ? (
                <>
                    <div className="headerTable">
                        <h3>{title}</h3>
                        <div>
                            {/* <Pagination />
                            <Search /> */}
                        </div>
                    </div>

                    <table className="table">
                        <thead>{handleThead(data)}</thead>
                        <tbody>{data.map((emp) => handleTbody(emp))}</tbody>
                    </table>
                </>
            ) : (
                <p>Nenhum dado recebido...</p>
            )}
        </div>
    );
};

export default Table;
