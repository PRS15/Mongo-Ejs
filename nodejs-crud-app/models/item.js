// models/item.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }] // Reference to Category model
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
