const express = require("express");
const {
  login,
  forgetPassword,
  resetPassword,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/logout", logout);

module.exports = router;
