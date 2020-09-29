const { getUsers, getUserBy } = require('../repositories/userDAO');
const { HttpError } = require('../utils/http-error');


const listUsersService = () => {
    const list = getUsers()
    
    if(!list.length) {
        throw new HttpError('Users not found!', 404)
    }

    return list
}

const getUserService = (data) => {
    const user = getUserBy(data.id)

    if(!user) {
        throw new HttpError('User not found!', 404)
    }

    return user
}

module.exports = {
    listUsersService,
    getUserService
}