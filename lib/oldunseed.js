const mongoose = require('mongoose');

module.exports = async function() {
  await mongoose.connection.db.dropDatabase();
};
