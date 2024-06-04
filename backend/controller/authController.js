const User = require('../models/login')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SignUp = async (req, res) => {
  try {
    // Get the all to body
    const { username, email, password } = req.body

    // Hash password
    const salt = bcrypt.genSaltSync(10)
    const HashPass = bcrypt.hashSync(password, salt)

    // Wait until pass get Hash
    const user = await User.create({ username, email, password: HashPass })
    // if succes send this
    res.json({ user })

  } catch (err) {
    console.log(err)
  }
}
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get the username and email by findOne
    const user = await User.findOne({ email })
    if (!user) return res.sendStatus(401)

    // Compare your pass when you sign up 
    const hashCompare = bcrypt.compareSync(password, user.password)
    if (!hashCompare) return res.sendStatus(401);

    // ADD JWT (Json Web Authetication)

    // Expired with 30s time, token will vanish
    const exp = Math.floor(Date.now() + 10000)
    // Try to get token with jwt.sign
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECURE)

    res.cookie('Authorization', token,
      {
        expires: new Date(exp),
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    // Respond to get the token
    res.sendStatus(200)
  }
  catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}
const Logout = (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
    res.sendStatus(400)
  }
}
const checkAuth = async (req, res) => {
  try {
    console.log(req.user)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
}
const DeleteDatas = async (req, res) => {
  const getId = req.params.id
  await User.deleteMany(getId)
  res.json("Succes")
}

module.exports = {
  SignUp,
  Login,
  Logout,
  checkAuth,
  DeleteDatas,
}