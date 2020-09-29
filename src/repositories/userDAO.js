
const getUsers = () => {
    const users = [
        {
            id: 1,
            name: 'Caio Fugii',
            age: 27
        },
        {
            id: 2,
            name: 'Rodrigo Oliveira',
            age: 30
        }
    ]
    return users
}

const getUserBy = (id) => {
    const users = [
        {
            id: 1,
            name: 'Caio Fugii',
            age: 27
        },
        {
            id: 2,
            name: 'Rodrigo Oliveira',
            age: 30
        }
    ]

    return users.find(user => user.id == id)
}


module.exports = {
    getUsers,
    getUserBy
}