const users = require('../data/users');

// declaring the query functions that get resolved by the resolver

const getAllUsers = () => {
    return users;
}

const getUserById = (id) => {
    return users.find((user) => user.id === id);
}
const getUserByUsername = (username) => {
    return users.find((user) => user.username === username);
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserByUsername
}