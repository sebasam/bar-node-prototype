const Table = require('./../models/Table')

exports.pushTableService = async(body) => {
    let isSuccess = ''
    try {
        await Table.create(body)
    } catch(error) {
        console.log('pushTableService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}

exports.liberateTableService = async(id) => {
    let isSuccess = ''
    try {
        await Table.findByIdAndUpdate(id, { status: 'available' })
    } catch(error) {
        console.log('liberateTableService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}

exports.reserveTableService = async(id) => {
    let isSuccess = ''
    try {
        await Table.findByIdAndUpdate(id, { status: 'reserved' })
    } catch(error) {
        console.log('reserveTableService Error', error)
        isSuccess = error.message
    }

    return isSuccess
}