const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@booksearchengine.hk6ucvm.mongodb.net/?retryWrites=true&w=majorityretry`
  ) || 'mongodb://localhost:27017/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
