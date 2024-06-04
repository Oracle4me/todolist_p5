const User = require('../models/login')
const jwt = require('jsonwebtoken')

const requireAuth = async (req, res, next) => {
  try {
    // Baca token dari request cookies
    const token = req.cookies.Authorization;
    // Decode kodenya
    const decode = jwt.verify(token, process.env.SECURE)
    // find user and decode
    const user = await User.findById(decode.sub)
    if (!user) return res.sendStatus(404);

    req.user = user;

    next()
  } catch (err) {
    console.log(err)
    res.sendStatus(404)
  }
}

module.exports = requireAuth;