const mongoose = require('mongoose');

module.exports = {
  start: async function () {
    await mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    await mongoose.set('debug', true);
  },
};

// module.exports = mongoose.connection;
