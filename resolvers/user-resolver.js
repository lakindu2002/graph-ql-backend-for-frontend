const users = require('../data/users');

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