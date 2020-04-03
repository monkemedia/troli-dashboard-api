const OrderStatus = require('../../../models/order/orderStatus/index.js')

const createOrderStatus = async (req, res) => {
  const data = req.body
  const { type, status_id, name, value } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  if (type && type !== 'order-status') {
    return res.status(401).send({
      message: 'Correct Type is required'
    })
  }

  if (isNaN(status_id)) {
    return res.status(401).send({
      message: 'Status ID is required'
    })
  }

  if (!name) {
    return res.status(401).send({
      message: 'Name is required'
    })
  }

  if (!value) {
    return res.status(401).send({
      message: 'Value is required'
    })
  }

  try {
    const orderStatus = new OrderStatus(data)

    await orderStatus.save()

    res.status(201).send(orderStatus)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getOrderStatuses = async (req, res) => {
  try {
    const orders = await OrderStatus.findOrderStatuses()

    res.status(200).send(orders)
  } catch (err) {
    res.status(400).send(err)
  }
}

const getOrderStatus = async (req, res) => {
  const orderStatus = await OrderStatus.findOne({ status_id: req.params.orderStatusId })

  res.status(200).send(orderStatus)
}

const updateOrderStatus = async (req, res) => {
  const data = req.body
  const statusOrderId = req.params.orderStatusId
  const { type, status_id, name, value } = data

  if (!type) {
    return res.status(401).send({
      message: 'Type is required'
    })
  }

  if (type && type !== 'order-status') {
    return res.status(401).send({
      message: 'Correct Type is required'
    })
  }

  if (isNaN(status_id)) {
    return res.status(401).send({
      message: 'Status ID is required'
    })
  }

  if (!name) {
    return res.status(401).send({
      message: 'Name is required'
    })
  }

  if (!value) {
    return res.status(401).send({
      message: 'Value is required'
    })
  }

  try {
    await OrderStatus.updateOrderStatus(statusOrderId, data)
    const orderStatus = await OrderStatus.findOne({ status_id: orderStatusId })

    res.status(200).send(orderStatus)
  } catch (err) {
    res.status(400).send(err)
  }
}

// const deleteCategory = async (req, res) => {
//   try {
//     // Delete any relationships first
//     const relationships = await ProductCategories.findProductCategories(req.params.categoryId)
//     relationships.map(async relationship => {
//       await ProductCategories.deleteCategory(relationship._id)
//     })

//     await Category.deleteCategory(req.params.categoryId)

//     res.status(200).send({
//       message: 'Category successfully deleted'
//     })
//   } catch (err) {
//     res.status(400).send(err)
//   }
// }

module.exports = {
  createOrderStatus,
  getOrderStatuses,
  getOrderStatus,
  updateOrderStatus
  // deleteCategory
}