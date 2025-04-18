const orderServices = require('./../services/order.service')
const response = require('./../utils/response')

let io;
exports.initializeSocket = (socketIoInstance) => {
    io = socketIoInstance;
};

exports.pushOrder = async(req, res) =>{
    try {
        const order = await orderServices.pushOrderService(req.body)
        if(order == '') {
            io.emit('new-order', {
                message: 'New order created',
                order: req.body
            });
            return response.createResponse(res, 'Order created!')
        }

        return response.badResponse(res, order)
    } catch(error) {
        console.log('pushOrder error', error)

        return response.serverErrorResponse(res, error)
    }
}

exports.closeOrder = async(req, res) =>{
    try {
        const order = await orderServices.closeOrderService(req.params.id)
        if(order == '') {
            return response.createResponse(res, 'the order has been closed!')
        }

        return response.badResponse(res, order)
    } catch(error) {
        console.log('closeOrder error', error)

        return response.serverErrorResponse(res, error)
    }
}