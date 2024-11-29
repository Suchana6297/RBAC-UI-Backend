const express = require("express");
const { check } = require("express-validator");
const { register, login, getMe, logout } = require("../controller/authController.js");
const { protect } = require("../middleware/auth.js");

const router = express.Router();

router.post('/register', [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
], register);

router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], login);

router.post("/logout", protect, logout);

router.get('/me', protect, getMe);

module.exports = router;