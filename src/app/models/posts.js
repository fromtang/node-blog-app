const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Post = new Schema({
    title: { type: String },
    slug: { type: String, slug: 'title', unipue: true },
    image: { type: String, max: 20 },
    summary: { type: String },
    content: { type: String },
    category_id: { type: Number },
    user_id: { type: Number },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
