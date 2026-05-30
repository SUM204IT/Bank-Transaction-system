const mongoose = require("mongoose");
const { sendRegistrationEmail } = require("../services/email.service");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email" ],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        // select: false
    },
    systemUser: {
        type: Boolean,
        default: false,
        immutable: true,
        select: false
    }
},{
    timestamps: true
});

userSchema.pre("save", async function () {
    await sendRegistrationEmail(this.email);
})

module.exports = mongoose.model("Users", userSchema);