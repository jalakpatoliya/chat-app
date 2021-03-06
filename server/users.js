let users = []

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const userExisting = users.find(user => (user.id == id && user.room == room));

    if (userExisting) {
        return { error: 'Username already exist' }
    }

    const user = { id, name, room }
    users.push(user)

    return { user };
}

const removeUser = (id) => {
    users = users.filter(user => user.id !== id)
}

const getUser = (id) => users.find(user => user.id === id)

const getUsersInRoom = (room) => users.filter(user => user.room === room)


module.exports = { addUser, removeUser, getUser, getUsersInRoom }