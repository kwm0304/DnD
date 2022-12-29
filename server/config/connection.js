const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
);
mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);

module.exports = mongoose.connection;

