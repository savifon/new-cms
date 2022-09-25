import api from "./api";

export const getUsers = async () => {
    return api.get("users");
};

export const getUser = async (id) => {
    return api.get("users", {
        params: {
            id: id,
        },
    });
};

export const updateUser = async (id, data) => {
    return api.put(`users/${id}`, data);
};
