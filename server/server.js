const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const User = mongoose.model('User', UserSchema)

app.post('/api/login', async (req, res) => {

  const { username, password } = req.body
   
  const user = await User.findOne({ username })
  

  if (!user) {
    return res.status(400).json({
      message: 'User not found'
    })
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  )

  if (!validPassword) {
    return res.status(400).json({
      message: 'Wrong password'
    })
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET
  )

  res.json({
    token,
    message: 'Login Success'
  })

})

app.get('/', (req, res) => {
  res.send('Backend Running')
})

app.listen(process.env.PORT, () => {
  console.log(`Server Running On ${process.env.PORT}`)
  
})