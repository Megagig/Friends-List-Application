const mongoose = require('mongoose');

// setup the Schema
const usersSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, 'firstName is required'],
	},
	lastName: {
		type: String,
		required: [true, 'lastName is required'],
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	confirm_password: {
		type: String,
		required: [true, 'confirm password is required'],
	},
	DOB: {
		type: Date,
		required: [true, 'Date of Birth is required'],
	}
}, {
	timestamps: true,
});

// Create the model
const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;