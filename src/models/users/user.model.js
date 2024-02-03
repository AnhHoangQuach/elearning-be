const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'account',
    },
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    birthday: {
        type: String,
        default: null,
    },
    // true: male
    gender: {
        type: Boolean,
        default: true,
    },
    phone: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: '/images/default-avatar.jpeg'
    }
},
    {
        timestamps: true
    }
)

const UserModel = mongoose.model('user', userSchema, 'users');
module.exports = UserModel