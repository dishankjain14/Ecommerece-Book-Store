const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
 title: String,
 quantity: String,
  },
);

const order = mongoose.model('order', OrderSchema);

module.exports = order;
