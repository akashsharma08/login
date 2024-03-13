const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://chaharhimanshu331842:chaharhimanshu331842@cluster0.28ipv4z.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// MongoDB schema and model
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json(user);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
