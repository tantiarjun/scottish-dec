const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

// Load environment variables from .env file
dotenv.config();

// Define the Admin schema
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// Pre-save hook to hash the password
adminSchema.pre('save', async function (next) {
  const admin = this;
  if (admin.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
  }
  next();
});

// Create the Admin model
const Admin = mongoose.model('Admin', adminSchema);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Create the admin user
const createAdmin = async () => {
  const username = 'admin2@shf.com'; // Admin's email as username
  const password = 'shf123'; // Admin's password

  try {
    await connectDB();
    const admin = new Admin({ username, password });
    await admin.save(); // Save the admin to the database
    console.log('Admin user created');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect(); // Disconnect from the database
  }
};

// Run the createAdmin function
createAdmin();
