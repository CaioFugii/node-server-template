const { object, string } = require('yup');
const { validateObject, stringRegex } = require('../utils/yup')
const service = require('../services/userService')

const list = async () => {
    return service.listUsersService()
}

const getUser = async (req) => {
    const { query, reqUser, reqIp } = req
    const schemaRequest = object().shape({
        id: string().required().max(80).matches(stringRegex.number)
    });
        
    const checkedData = await validateObject(query, schemaRequest)

    return service.getUserService(checkedData, reqUser, reqIp)
}


module.exports = {
    list,
    getUser
}