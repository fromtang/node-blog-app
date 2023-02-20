const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Post = new Schema(
    {
        title: { type: String },
        slug: { type: String, slug: 'title', unique: true },
        image: { type: String },
        description: { type: String },
        content: { type: String },
        category_id: { type: Number },
        user_id: { type: Number },
    },
    { timestamps: true },
    {
        collection: 'posts',
    },
);

module.exports = mongoose.model('Post', Post);
