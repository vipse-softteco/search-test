import http from "../index";

export const getUsers = () => http.get("/users");
