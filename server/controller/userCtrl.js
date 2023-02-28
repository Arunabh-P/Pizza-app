const userModel = require('../model/userModel');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

const registerUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error('User already exists');
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0].id,
      };
      res.status(200).send(currentUser);
    } else {
      res.status(400).json({
        message: 'Login Failed',
      });
    }
  } catch (error) {
    res.status(404).json({
      message: 'Something went wrong',
    });
  }
});
module.exports = {
  registerUser,
  login,
};
