const Account = require("../models/Account.model");

const createAccountController = async (req, res) => {
    try {
        
        const userId = req.user.userId;

        const account = await Account.create({
            user: userId,
        })

        res.status(200).json({
            success: true,
            message: "Account created successfully.",
            account
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in account create conntroller."
        })
    }
}

module.exports = {
    createAccountController,
}

