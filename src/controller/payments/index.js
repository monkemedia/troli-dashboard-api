
const Payment = require('../../models/payment')
const errorHandler = require('../../utils/errorHandler')

const createAccount = async (req, res) => {
  const data = req.body
  const {
    country,
    business_type,
    client_ip_address
  } = data

  if (!country) {
    return res.status(401).send({
      message: 'Country is required'
    })
  }

  if (!business_type) {
    return res.status(401).send({
      message: 'Business type is required'
    })
  }

  if (!client_ip_address) {
    return res.status(401).send({
      message: 'Client IP address is required'
    })
  }

  try {
    const account = await Payment.createAccount({ 
      client_ip_address,
      country,
      business_type 
    })

    res.status(200).send(account)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const updateAccount = async (req, res) => {
  const data = req.body
  const accountId = req.params.accountId

  try {
    const account = await Payment.updateAccount(accountId, data)

    res.status(200).send(account)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const getAccount = async (req, res) => {
  const accountId = req.params.accountId

  try {
    const account = await Payment.getAccount(accountId)

    res.status(200).send(account)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const createPerson = async (req, res) => {
  const data = req.body
  const accountId = req.params.accountId

  try {
    const person = await Payment.createPerson(accountId, data)

    res.status(200).send(person)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const getPersons = async (req, res) => {
  const accountId = req.params.accountId

  try {
    const person = await Payment.getPersons(accountId)

    res.status(200).send(person)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const getPerson = async (req, res) => {
  const accountId = req.params.accountId
  const personId = req.params.personId

  try {
    const person = await Payment.getPerson(accountId, personId)

    res.status(200).send(person)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const updatePerson = async (req, res) => {
  const data = req.body
  const accountId = req.params.accountId
  const personId = req.params.personId

  try {
    const person = await Payment.updatePerson(accountId, personId, data)

    res.status(200).send(person)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const deletePerson = async (req, res) => {
  const accountId = req.params.accountId
  const personId = req.params.personId

  try {
    const person = await Payment.deletePerson(accountId, personId)

    res.status(200).send(person)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const uploadFile = async (req, res) => {
  const file = req.file
  const purpose = req.body.purpose
  const accountId = req.params.accountId

  if (!purpose) {
    return res.status(401).send({
      message: 'Purpose is required'
    })
  }

  try {
    const image = await Payment.uploadFile(accountId, purpose, file)

    res.status(200).send(image)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const createPayment = async (req, res) => {
  const data = req.body

  try {
    const payment = await Payment.createPayment(data)

    res.status(200).send(payment)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const updateBankAccount = async (req, res) => {
  const data = req.body
  const accountId = req.params.accountId
  const bankAccountId = req.params.bankAccountId

  try {
    const bankAccount = await Payment.updateBankAccount(accountId, bankAccountId, data)

    res.status(200).send(bankAccount)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

const deleteBankAccount = async (req, res) => {
  const accountId = req.params.accountId
  const bankAccountId = req.params.bankAccountId

  try {
    const bankAccount = await Payment.deleteBankAccount(accountId, bankAccountId)

    res.status(200).send(bankAccount)
  } catch (err) {
    res.status(400).send(errorHandler(400, err))
  }
}

module.exports = {
  createAccount,
  updateAccount,
  getAccount,
  createPerson,
  getPersons,
  getPerson,
  deletePerson,
  updatePerson,
  uploadFile,
  createPayment,
  updateBankAccount,
  deleteBankAccount
}
