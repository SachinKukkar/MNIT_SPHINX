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

// Define a symptom schema
const symptomSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }, // Reference to Patient
  symptoms: [String], // Array of symptoms
});

const Symptom = mongoose.model('Symptom', symptomSchema);

// Define a prescription schema
const prescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }, // Reference to Patient
  prescription: [String], // Array of prescription details
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

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

// Endpoint to add symptoms
app.post('/addSymptoms', async (req, res) => {
  const { patientId, symptoms } = req.body;
  
  try {
    const newSymptoms = new Symptom({ patientId, symptoms });
    await newSymptoms.save();
    res.send('Symptoms added');
  } catch (error) {
    res.status(400).send('Error adding symptoms');
  }
});

// Endpoint to add prescription
app.post('/addPrescription', async (req, res) => {
  const { patientId, prescription } = req.body;

  try {
    const newPrescription = new Prescription({ patientId, prescription });
    await newPrescription.save();
    res.send('Prescription added');
  } catch (error) {
    res.status(400).send('Error adding prescription');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
