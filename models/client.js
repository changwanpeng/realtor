const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const ClientSchema = new Schema({
	name: String,
	address: String
});

//create model for todo
const Client = mongoose.model('client', ClientSchema);

module.exports = Client;
