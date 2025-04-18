const User = require('./../models/User')
const bcrypt = require('bcrypt')

exports.pushUserService = async(body) => {
    const { email, password, salary, billingCycle, role } = body
    let isSuccess = ''
    try {
        const user = await User.findOne({ email })
        if(user) {
            isSuccess = `${email} is already exist in database`
        } else {
            const salt = bcrypt.genSaltSync()
            const dbUser = new User({
                email,
                password,
                salary,
                billingCycle,
                role
            })
            dbUser.password = bcrypt.hashSync(password, salt)
            await dbUser.save()
        }        
    } catch(error) {
        console.log('pushUserService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}

exports.loginUserService = async(body) => {
    const { email, password } = body
    let isSuccess = ''
    try {
        const dbUser =  await User.findOne({ email })
        if(!dbUser) isSuccess = 'User doesnt exist!!'
        const validatePassword = bcrypt.compareSync(password, dbUser.password)
        if(!validatePassword) isSuccess = 'Incorrect password!!'        
    } catch(error) {
        console.log('loginUserService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}