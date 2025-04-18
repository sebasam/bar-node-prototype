const tableServices = require('./../services/table.service')
const response = require('./../utils/response')

exports.pushTable = async(req, res) =>{
    try {
        const table = await tableServices.pushTableService(req.body)
        if(table == '') {
            return response.createResponse(res, 'Table created!')
        }
        
        return response.badResponse(res, table)
    } catch(error) {
        console.log('pushTable error', error)

        return response.serverErrorResponse(res, error)
    }
}

exports.liberateTable = async(req, res) =>{
    try {
        const table = await tableServices.liberateTableService(req.params.id)
        if(table == '') {
            return response.createResponse(res, 'Table updated!')
        }

        return response.badResponse(res, table)
    } catch(error) {
        console.log('liberateTable error', error)

        return response.serverErrorResponse(res, error)
    }
}

exports.reserveTable = async(req, res) =>{
    try {
        const table = await tableServices.reserveTableService(req.params.id)
        if(table == '') {

            return response.createResponse(res, 'Table reserved!')
        }

        return response.badResponse(res, table)

    } catch(error) {
        console.log('reserveTable error', error)

        return response.serverErrorResponse(res, error)
    }
}