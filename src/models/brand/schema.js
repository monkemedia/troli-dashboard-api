const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BrandSchema = new Schema({
  store_hash: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  search_keywords: {
    type: String
  },
  status: {
    type: String
  }
}, { versionKey: false })

module.exports = BrandSchema
