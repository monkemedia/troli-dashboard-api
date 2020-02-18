const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productVariantSchema = new Schema({
  type: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    unique: true
  },

  options: [{
    type: Schema.Types.ObjectId,
    ref: 'ProductVariantOptions'
  }]
}, { versionKey: false })

module.exports = productVariantSchema
