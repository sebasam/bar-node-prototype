exports.successResponse = (res, msg) => {
    return res.status(200).json({
        ok: true,
        msg
    })
}

exports.successResponseToken = (res, msg, token) => {
    return res.status(200).json({
        ok: true,
        msg,
        token
    })
}

exports.pullResponse = (res, data) => {
    return res.status(200).json({
        ok: true,
        data
    })
}

exports.createResponse = (res, msg) => {
    return res.status(201).json({
        ok: true,
        msg
    })
}

exports.serverErrorResponse = (res, msg) => {
    return res.status(500).json({
        ok: false,
        msg
    })
}

exports.badResponse = (res, msg) => {
    return res.status(400).json({
        ok: false,
        msg
    })
}

exports.notFound = (res, msg) => {
    return res.status(404).json({
        ok: false,
        msg: msg
    })
}