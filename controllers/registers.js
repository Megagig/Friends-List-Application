const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const registers = async (req, res) => {
	const usersModel = mongoose.model('users');
	
	//register a new user
	const { firstName, lastName, email, password, confirm_password, DOB} = req.body;
	
	//validate the user input
	if (!firstName || !lastName || !password || !confirm_password || !DOB || !email) {
		return res.status(400).json({
			status: "error",
			message: "All fields are required"
		})
	}
	// check if the password and confirm password match
	if (password !== confirm_password) {
		return res.status(400).json({
			status: "error",
			message: "Passwords do not match"
		})
	}
	// check if the email is already in use
	const duplicateEmail = await usersModel.findOne({
		email: email
		}
	)
	if (duplicateEmail) {
		return res.status(400).json({
			status: "error",
			message: "Email already in use"
		})
	}
	// parse the DOB field Using Js Date Object
	const [day, month, year] = DOB.split('-');
	const parsedDOB = new Date(year, month - 1, day);
	if (isNaN(parsedDOB.getTime())) {
		return res.status(400).json({
			status: "error",
			message: "Invalid Date of Birth format"
		});
	}
	
	// create a new user
	const newUser = await usersModel.create({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password,
		confirm_password: confirm_password,
		DOB: parsedDOB
	})
	
	// send a response
	
	res.status(201).json({
		status:"success",
		message: "User registered successfully",
		data: newUser
	})
}
module.exports = registers

