const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
  UUID: {type: String, required: true
  },
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  remember: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
  date: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model('Note', NotesSchema);

module.exports = Note;