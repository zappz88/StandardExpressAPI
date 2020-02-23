const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('connection', () => console.log('Connected to database.'));

module.exports = db;
