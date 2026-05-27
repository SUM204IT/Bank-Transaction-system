const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfuly.")
    } catch (error) {
        console.log("Error in db connection!!!", error);
    }
}

module.exports = connectDB;