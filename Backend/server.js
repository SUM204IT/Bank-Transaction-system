const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");


connectDB();


app.listen(5000, (req, res) => {
    console.log("App is listening on port 5000.")
})
