const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  id: Number,
  name: String,
  country_id: Number,
  country_code: String,
  country_name: String,
  state_code: String,
  type: String, // You can change this to the appropriate data type if you have specific types for states
  latitude: String,
  longitude: String,
});
stateSchema.index({ "country_id": 1});
const State = mongoose.model('State', stateSchema);

module.exports = State;
