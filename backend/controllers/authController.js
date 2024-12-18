const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Admin = require("../models/admin");

// Admin login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).json({ message: "Admin Not Found" });

    // Check if password matches
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).send({ message: "Invalid Credentials" });

    // Create JWT token
    const payload = { adminId: admin._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send token to client
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server Error", details: error.message });
  }
};

// Forget Password
exports.forgetPassword = async (req, res) => {
  const { username } = req.body;

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(404).send({ message: "Admin Not Found" });

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    admin.resetPasswordToken = resetToken;
    admin.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await admin.save();

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      to: admin.username,
      from: process.env.EMAIL_USER,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your admin account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://localhost:3000/reset/${resetToken}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    // Send email
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) return res.status(500).send({ message: "Error sending email" });
      res.status(200).send({ message: "Password reset email sent" });
    });
  } catch (error) {
    res.status(500).send({ message: "Server Error", details: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { password } = req.body;

  try {
    // Find admin by reset token and check if token is not expired
    const admin = await Admin.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!admin)
      return res
        .status(400)
        .send({ message: "Password reset token is invalid or has expired" });

    // Update password and clear reset token fields
    admin.password = password;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpires = undefined;

    await admin.save();

    res.status(200).send({ message: "Password Reset Successful" });
  } catch (error) {
    res.status(500).send({ message: "Server Error", details: error.message });
  }
};

// Logout
exports.logout = async (req, res) => {
  res.status(200).send({ message: "Logout successful" });
};
