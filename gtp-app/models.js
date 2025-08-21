const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');

const Result = new mongoose.Schema ({
    id: {
        type: Number,
        unique: true,
    },
    time: {
        type: String,
        required: true,
    },
    messageType: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

Result.plugin(autoIncrement, {model: 'Result', field: 'id', startAt: 1, incrementBy: 1});


module.exports = mongoose.model('Result',Result);