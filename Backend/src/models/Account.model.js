const mongoose = require("mongoose");


const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "Account must be associated with a user"],
        index: true
    },
    status: {
    type: String,
    enum: ["active", "inactive", "suspended"],
    default: "active"
},
    currency: {
        type: String,
        required: [true, "Currency is required"],
        default: "INR"
    }
},{
    timestamps: true
}) 

accountSchema.index({ user: 1 , status: 1 }) 

module.exports = mongoose.model("Account", accountSchema);