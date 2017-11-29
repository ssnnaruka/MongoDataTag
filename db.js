require('./config/config')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

console.log(process.env.MONGODB_URI + ":" + process.env.DB_PORT + "/" +  process.env.DB_NAME);
mongoose.connect(process.env.MONGODB_URI + ":" + process.env.DB_PORT + "/" +  process.env.DB_NAME, {'useMongoClient' : true});

module.exports = mongoose