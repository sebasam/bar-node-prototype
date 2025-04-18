const response = require('./../utils/response')
const productServices = require('./../services/product.service')

exports.pushProduct = async(req, res) =>{
    try {
        const product = await productServices.pushProductService(req.body)
        if(product == '') {
            return response.createResponse(res, 'Product created!')
        }

        return response.badResponse(res, product)
    } catch(error) {
        console.log('pushProduct error', error.message)

        return response.serverErrorResponse(res, error.message)
    }
}