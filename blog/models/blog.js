const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    topic: {
        type: String,
        trim: true,
        required: true
    },
    desc: {
        type: String,
        trim: true,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
    // date: {
    //     type: Date,
    //     trim: true,
    // }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;