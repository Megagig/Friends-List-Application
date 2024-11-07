
const registers = (req, res) => {
	//register a new user
	const { username, password, confirm_password } = req.body;
	
	//validate the user input
	if (!username || !password || !confirm_password) {
		return res.status(400).json({
			status: "error",
			message: "All fields are required"
		})
	}
	res.status(201).json({
		status:"success",
		message: "User registered successfully"
	})
}
module.exports = registers

