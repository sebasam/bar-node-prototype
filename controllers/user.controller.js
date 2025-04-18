const generateToken  = require('./../middlewares/jwtGenerate')
const userService = require('./../services/user.service')
const response = require('./../utils/response')

exports.pushUser = async(req, res) => {
    try {
        const user = await userService.pushUserService(req.body)
        if(user == '') {

            return response.createResponse(res, 'User created!')
        }

        return response.badResponse(res, user)
    } catch(error) {
        console.log('pushUser error', error)

        return response.serverErrorResponse(res, error)
    } 
}

exports.loginUser  = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await userService.pushUserService(req.body)
        if(user == '') {
            const token = await generateToken(email, password)
            return response.successResponseToken(res, 'Welcome!', token)
        }

        return response.badResponse(res, user)

    } catch(error) {
        console.log('loginUser error', error)

        return response.serverErrorResponse(res, error)
    }
}