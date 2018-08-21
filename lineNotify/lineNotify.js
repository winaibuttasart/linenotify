const request = require('request')
const config = require('../config/config')

const sendText = (msg) => {
    return new Promise((resolve, reject) => {
        request.post({
            headers: config.lineNotify.headers,
            url: config.lineNotify.lineUrl,
            form: {
                message: msg
            }
        }, (error, response, body) => {
            if (error) {
                console.log('error in sendText')
                resolve(err)
            }
            resolve(body)
        })
    })
}
const sendPicture = (msg, imageThumbnail, imageFullsize) => {
    return new Promise((resolve, reject) => {
        request.post({
            headers: config.lineNotify.headers,
            url: config.lineNotify.lineUrl,
            form: {
                message: `${msg} ${imageThumbnail}`,
                imageThumbnail: imageThumbnail,
                imageFullsize: imageFullsize
            }
        }, (error, response, body) => {
            if (error) {
                console.log('error in sendPicture')
                resolve(err)
            }
            resolve(body)
        })
    })
}
const sendSticker = (msg, stickerPackageId, stickerId) => {
    return new Promise((resolve, reject) => {
        request.post({
            headers: config.lineNotify.headers,
            url: config.lineNotify.lineUrl,
            form: {
                message: msg,
                stickerPackageId: stickerPackageId,
                stickerId: stickerId
            }
        }, (error, response, body) => {
            if (error) {
                console.log('error in sendSticker')
                resolve(err)
            }
            resolve(body)
        })
    })
}

module.exports = { sendText, sendPicture, sendSticker };