const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: [true, "From account is required"],
        index: true
    },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
        required: [true, "To account is required"],
        index: true
    },
    status: {
        type: String,
        enum: {
            values: ["pending", "completed", "failed", "reverse"]
        },
        default: "pending"
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [0, "Transaction amount must be a positive number"]
    },
    idempotencyKey: {
        type: String,
        required: [true, "Idempotency key is required"],
        index: true,
        unique: true
    }
},{
    timestamps: true

})


module.exports = mongoose.model("Transaction", transactionSchema);