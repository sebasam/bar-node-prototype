const jwt = require('jsonwebtoken')

exports.generateToken = (userData = {}) => {
    try {
        const payload = { userData }
        const secret = process.env.SECRET_KEY
        const token = jwt.sign(payload, secret, {
            expiresIn: '6h'
        })

        return token
    } catch(error) {
        console.log('generateToken error', error)

        return false
    }
}