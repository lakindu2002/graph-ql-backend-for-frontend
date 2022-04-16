const users = require('../data/users');

export const getAllUsers = () => {
    return users;
}

export const getUserById = (id) => {
    return users.find((user) => user.id === id);
}

export const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
}