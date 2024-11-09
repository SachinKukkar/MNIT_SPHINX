const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB for patientDB
mongoose.connect('mongodb://localhost:27017/patientDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to patientDB'))
  .catch(err => console.log('Error connecting to patientDB:', err));

// Connect to a separate MongoDB for doctorDB
const doctorDb = mongoose.createConnection('mongodb://localhost:27017/doctorDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

doctorDb.on('connected', () => {
  console.log('Connected to doctorDB');
});

// Define patient schema and model (for patientDB)
const patientSchema = new mongoose.Schema({
  fullName: String,
  lastName: String,
  whatsappNo: String,
  age: Number,
  gender: String,
  location: String,
});

const Patient = mongoose.model('Patient', patientSchema);

// Define symptom schema and model (for patientDB)
const symptomSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  symptoms: [String],
});

const Symptom = mongoose.model('Symptom', symptomSchema);

// Define prescription schema and model (for patientDB)
const prescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  prescription: [String],
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

// Define doctor schema and model (for doctorDB)
const doctorSchema = new mongoose.Schema({
  fullName: String,
  specialty: String,
  contactNumber: String,
  email: String,
  password: String, // Consider hashing this password in production
});

const Doctor = doctorDb.model('Doctor', doctorSchema);

// Routes for patient

// POST route to save patient details
app.post('/api/patient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient details saved successfully', patientId: newPatient._id });
  } catch (error) {
    res.status(400).json({ message: 'Error saving patient details', error });
  }
});

// POST route to add symptoms
app.post('/api/addSymptoms', async (req, res) => {
  const { patientId, symptoms } = req.body;

  try {
    const newSymptoms = new Symptom({ patientId, symptoms });
    await newSymptoms.save();
    res.status(201).json({ message: 'Symptoms added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding symptoms', error });
  }
});

// POST route to add prescription
app.post('/api/addPrescription', async (req, res) => {
  const { patientId, prescription } = req.body;

  try {
    const newPrescription = new Prescription({ patientId, prescription });
    await newPrescription.save();
    res.status(201).json({ message: 'Prescription added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding prescription', error });
  }
});

// Routes for doctor

// POST route to save doctor profile in the doctorDB
app.post('/api/doctor', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json({ message: 'Doctor profile created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error creating doctor profile', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
