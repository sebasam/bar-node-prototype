const Product = require('./../models/Product')

exports.pushProductService = async(body) => {
    let isSuccess = ''
    try {
        await Product.create(body)
    } catch(error) {
        console.log('pushProductService', error)
        isSuccess = error.message
    }

    return isSuccess
}