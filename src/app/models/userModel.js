const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, max: 20 },
        password: { type: String, max: 20 },
        fullname: { type: String, max: 50 },
        avatar: { type: String, max: 50 },
        level: { type: Number, default: 0 },
    },
    {
        collection: 'users',
    },
    { timestamps: true },
);

module.exports = mongoose.model('User', User);
