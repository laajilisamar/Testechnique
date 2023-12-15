const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TestProjet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
