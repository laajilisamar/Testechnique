const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const FormModel = mongoose.model('Form', formSchema);

module.exports = FormModel;
