const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    category: {
      type: String,
      required: true,
      enum: ["starter", "main", "dessert", "drink"]
    },

    isAvailable: {
      type: Boolean,
      default: true
    }
});

module.exports = mongoose.model('Menu',menuSchema);