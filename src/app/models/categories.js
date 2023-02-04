const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Category = new Schema({
    name: { type: String, max: 20 },
    slug: { type: String, slug: 'name', unipue: true },
});

module.exports = mongoose.model('Category', Category);
