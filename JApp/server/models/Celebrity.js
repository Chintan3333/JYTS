const mongoose = require('mongoose');

const CelebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    birthTime: {
        type: String,
        required: true
    },
    birthPlace: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: 'Business'
    },
    dataAccuracy: {
        type: String,
        enum: ['good', 'bad'],
        default: 'good'
    },
    ascendant: {
        sign: {
            type: String,
            required: true
        },
        degree: {
            type: Number,
            required: true
        }
    },
    planets: {
        sun: {
            sign: String,
            house: Number,
            degree: Number
        },
        moon: {
            sign: String,
            house: Number,
            degree: Number
        },
        mars: {
            sign: String,
            house: Number,
            degree: Number
        },
        mercury: {
            sign: String,
            house: Number,
            degree: Number
        },
        jupiter: {
            sign: String,
            house: Number,
            degree: Number
        },
        venus: {
            sign: String,
            house: Number,
            degree: Number
        },
        saturn: {
            sign: String,
            house: Number,
            degree: Number
        },
        rahu: {
            sign: String,
            house: Number,
            degree: Number
        },
        ketu: {
            sign: String,
            house: Number,
            degree: Number
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Celebrity', CelebritySchema); 