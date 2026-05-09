const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const User = mongoose.model('User', UserSchema)

async function createUser() {

  const hashedPassword = await bcrypt.hash(
    'sau123',
    10
  )

  const user = new User({
    username: 'sauuu',
    password: hashedPassword,
  })

  await user.save()

  console.log('User Created Successfully')

  mongoose.disconnect()
}

createUser()