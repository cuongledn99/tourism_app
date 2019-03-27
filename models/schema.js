var mongoose = require('mongoose');
var schema = require('./schema/index');

module.exports = {
  locations: mongoose.model('locations',schema.locations),
  feedbacks:mongoose.model ('feedbacks',schema.feedbacks)
}