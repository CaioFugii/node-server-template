const { HttpError } = require("./http-error");

const validateObject = async (object, schema) => {
    const options = { abortEarly: false }

    return await schema.validate(object, options).catch((err) => {
        throw new HttpError(err.errors, 400)
    });
}

stringRegex = {
    lowerCase : /[a-z]/,
    upperCase : /[A-Z]/,
    onlyAlphabets: /^[a-zA-Z_ ]*$/,
    number : /[0-9]/,
    special : /[$@$!%*#?&]/,
    phoneNumber: /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
}

module.exports = {
    validateObject,
    stringRegex
}