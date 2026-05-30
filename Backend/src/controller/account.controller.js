const Account = require("../models/Account.model");

const createAccountController = async (req, res) => {
    try {
        
        const userId = req.user.userId;

        const alreadyAccount = await Account.findOne({user:userId});

        if(alreadyAccount){
            return res.status(401).json({
                success: false,
                message: "Account already created."
            })
        }

        const account = await Account.create({
            user: userId,
        })

        res.status(200).json({
            success: true,
            message: "Account created successfully.",
            account: account
        })

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in account create conntroller."
        })
    }
}

const getUserAccountController = async (req, res) => {
    try {
        const account = await Account.find({user:req.user.userId});

        res.status(200).json({
            success: true,
            message: "Account fetched successfully",
            account
        })
    } catch (error) {
        return res.status(401).json({
            success:  true,
            message: "Error in fetching account details.",
        })
    }
}

const getAccountBalanceController = async (req, res) => {
    try {
        // const {accountId} = req.body;
        const account = await Account.findOne({
            // _id: accountId,
            user: req.user.userId
        })
        const balance = await account.getBalance();
        return res.status(200).json({
            success: true,
            message: "Balance fetched successfully",
            balance: balance
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in fetching account balance, please try again later."
        })
    }
}

module.exports = {
    createAccountController,
    getUserAccountController,
    getAccountBalanceController
}

