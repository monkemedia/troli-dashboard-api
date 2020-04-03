const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  customer_id: {
    type: Schema.Types.Mixed,
    default: 0
  },
  status: {
    type: String,
    default: 'Pending'
  },
  status_id: {
    type: Number,
    default: 1
  },
  discount_amount: {
    type: Number,
    default: 0
  },
  subtotal: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  shipping_cost: {
    type: Number,
    default: 0
  },
  payment_method: {
    type: String,
    default: 0
  },
  payment_provider_id: {
    type: String,
    default: 0
  },
  refunded_amount: {
    type: Number,
    default: 0
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  order_is_digital: {
    type: Boolean,
    default: false
  },
  is_email_opt_in: {
    type: Boolean,
    default: false
  },
  comments: {
    type: String,
    default: ''
  },
  staff_notes: {
    type: String,
    default: ''
  },
  billing_address: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    line_1: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    country_code: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  shipping_address: {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    company_name: {
      type: String,
      required: false
    },
    line_1: {
      type: String,
      required: true
    },
    line_2: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    country_code: {
      type: String,
      required: true
    }
  },
  products: [{
    product_id: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }]
}, { versionKey: false })

module.exports = orderSchema