// careRecordController.js
const CareRecord = require('../models/careRecordModel.js'); // Adjust path as needed

// Create a new care record
const addCareRecord = async (req, res) => {
  try {
    const { name, location, notes, timestamp } = req.body;
    const newRecord = await CareRecord.create({ name, location, notes, timestamp });
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: 'Error creating care record', error });
  }
};

// Fetch all care records
const getCareRecords = async (req, res) => {
  try {
    const records = await CareRecord.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching care records', error });
  }
};

module.exports = {
  addCareRecord,
  getCareRecords,
};
