const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Car = new Schema({
  car_make: {
    type: String
  },
  car_model: {
    type: String
  },
  color: {
    type: String
  },
  subjects: {
    type: Array
  },
  car_trim: {
    type: String
  },
  car_year: {
    type: Date
  }
}, {
  collection: 'cars'
})

module.exports = mongoose.model('Car', Car)