const mongoose = require('mongoose');
const InerestsSchema = require('./interestsSchema');

const Interest = mongoose.model('interest', InerestsSchema);

module.exports = Interest;