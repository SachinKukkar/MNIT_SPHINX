const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/patientDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a patient schema
const patientSchema = new mongoose.Schema({
  fullName: String,
  lastName: String,
  whatsappNo: String,
  age: Number,
  gender: String,
  location: String,
});

const Patient = mongoose.model('Patient', patientSchema);

// Define a POST route to save patient details
app.post('/api/patient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient details saved successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving patient details', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
