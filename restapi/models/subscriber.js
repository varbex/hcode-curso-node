const mongoose = require('mongoose')

const _subscriberSchema = mongoose.Schema({
    userName: {
        type : String,
        require: true
    },
    userChanel: {
        type: String,
        require: true
    },
    userDate: {
        type: String,
        require: true,
        defalut:Date.now()
    }
})

module.exports = mongoose.model('subscriber', _subscriberSchema)