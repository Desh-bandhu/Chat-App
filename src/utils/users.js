const users = []

const addUser = ({ id, username, room } ) => {
    //Clean the data
    username = username.trim().toLowerCase(),
    room = room.trim().toLowerCase()

    //Validate the data
    if(!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //Checking for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }

}

//index -1 means nhi mila aur agar 0, 1 ha to uska index
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id )

    if(index != -1) {
        return users.splice(index, 1)[0]
    }
}

//Create getUser
const getUser = (id) => {
    return users.find((user) =>  user.id === id )

}

//Create getUsersInRoom
const  getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

