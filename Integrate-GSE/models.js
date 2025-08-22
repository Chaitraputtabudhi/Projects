const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');

const resultSchema = new mongoose.Schema ({
    id: {
        type: Number,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

resultSchema.plugin(autoIncrement, {model: 'Result', field: 'id', startAt: 1, incrementBy: 1});


module.exports = mongoose.model('Result',resultSchema);