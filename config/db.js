const mongoose = require("mongoose");

async function connectDB() {
	try {
		const connect = await mongoose.connect('mongodb+srv://harsh:harsh8vit@cluster0.mazps.mongodb.net/?retryWrites=true&w=majority');
		console.log(`DB connected: ${connect.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;
