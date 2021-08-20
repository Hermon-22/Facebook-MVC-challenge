const mongoose = require('mongoose');

const Schema = mongoose.Schema

const feedSchema = new Schema({
    nameField:{
        type:String,
        required: [true,'Name Field is required'],
        maxLength: [15, 'The Name field must be no longer than 15 characters']

    },
    messageField:{
        type:String,
        required: [true, 'Message Field is required'],
        maxLength: [40, 'The Message field must be no longer than 40 characters']
    }
    }, { timestamps: true }
)
const FEED = mongoose.model('FEED', feedSchema)

module.exports = {FEED}