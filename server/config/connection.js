const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://coleleg:zN4u9KGuegYM3rwo@cluster0.ites=true&w=msmi5o.mongodb.net/book-search?retryWrajority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
