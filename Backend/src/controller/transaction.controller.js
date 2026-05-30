const Transaction = require("../models/Transaction.model");
const Ledger = require("../models/Ledger.model");
const {sendTransactionEmail} = require("../services/email.service");
const Account = require("../models/Account.model");
const mongoose = require("mongoose");
const Users = require("../models/Users.model");
const  { v7 : uuidv7 } = require("uuid");


//create new transaction
/**
 * * -Create a new transaction
 * The 10 step transfer flow
 * 
 * 1.vallidate request
 * 2.validate idempotency key
 * 3.check account status
 * 4.derive sender balance from ledger
 * 5.create transaction with pending status
 * 6.create debit ledger entry
 * 7.cretae credit ledger entry
 * 8.mark transaction completed
 * 9.commit mongodb session
 * 10.send email notification 
 */

// async function createTransactionController(req, res) {
//     const {fromAccount, toAccount, amount, idempotencyKey} = req.body;

//     if(!fromAccount || !toAccount || !amount || !idempotencyKey){
//         return res.status(400).json({
//             success: false,
//             message: "All fields are required."
//         })
//     }

//     const fromUserAccount = await Account.findOne({
//         _id: fromAccount
//     })

//     const toUserAccount = await Account.findOne({
//         _id: toAccount
//     })

//     if(!fromUserAccount || !toUserAccount){
//         return res.status(400).json({
//             success: false,
//             message: "Invalid account details."
//         })
//     }

//     //validate idempotent key
//     const isTransactionAlreadyExists = await Transaction.findOne({
//         idempotencyKey: idempotencyKey
//     })

//     if(isTransactionAlreadyExists){

//         if(isTransactionAlreadyExists.status==="completed"){
//         return res.status(200).json({
//             message: "Transaction already done.",
//             transaction: isTransactionAlreadyExists
//         })
//     }
//     if(isTransactionAlreadyExists.status==="pending"){
//         return res.status(200).json({
//             message: "Transaction is still processing."
//         })
//     }
//     if(isTransactionAlreadyExists.status==="failed"){
//         return res.status(500).json({
//             message: "Transaction failed,, please try again."
//         })
//     }

//     }

//     //account status
//     if(fromUserAccount.status!=="active" || toUserAccount.status!=="active"){
//         return res.status(400).json({
//             message: "Both from account and to account must be ative for transnaction."
//         })
//     }

//     //derive sender balance from ledger
//     const balance = await fromUserAccount.getBalance();
    
//     if(balance<amount){
//         return res.status(400).json({
//             message: `Insufficient balance. Current balance is ${balance}`
//         })
//     }

//     //create transaction with pending status
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     //iske baadd ya toh sara kaam complete hoga ya phir kuch bhi nhi hoga
//     let transaction = await Transaction.create([{
//         fromAccount,
//         toAccount,
//         amount,
//         idempotencyKey,
//         status: "pending"
//     }], {session})

//     const deditLedgerEntry = await Ledger.create([{
//         account: fromAccount,
//         amount: amount,
//         transaction: transaction._id,
//         type: "debit"
//     }], {session})

//     const creditLedgerEntry = await Ledger.create([{
//         account: toAccount,
//         amount: amount,
//         transaction: transaction._id,
//         type: "credit"
//     }], {session})

//     transaction.status = "completed",
//     await transaction.save({session});

//     await session.commitTransaction()
//     session.endSession();

//     //send email notification
//     await sendTransactionEmail(
//         req.user.email,
//         req.user.username,
//         amount,
//         toAccount
//     )

//     return res.status(200).json({
//         success: true,
//         message: "Transaction comppleted successful",
//         transaction: transaction
//     })

// } 


async function createTransactionController(req, res) {
    const session = await mongoose.startSession();
    let transaction = null;

    try {

        const userId  = req.user.userId;
        // console.log("userId::", userId);
        const account = await Account.findOne({
            user: userId,
        });
        // console.log("Account::", account);
        const fromAccount = account._id;
        // console.log("fromAccount::", fromAccount);

        const idempotencyKey = uuidv7();

        const {
            toAccount,
            amount
        } = req.body;

        // -------------------------
        // Validation
        // -------------------------

        if (
            !fromAccount ||
            !toAccount ||
            !amount ||
            !idempotencyKey
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        if (String(fromAccount) === String(toAccount)) {
            return res.status(400).json({
                success: false,
                message: "Cannot transfer to the same account."
            });
        }

        const numericAmount = Number(amount);

        if (
            Number.isNaN(numericAmount) ||
            numericAmount <= 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid amount."
            });
        }

        // -------------------------
        // Idempotency Check
        // -------------------------

        const existingTransaction =
            await Transaction.findOne({
                idempotencyKey
            });

        if (existingTransaction) {

            switch (existingTransaction.status) {

                case "completed":
                    return res.status(200).json({
                        success: true,
                        message:
                            "Transaction already completed.",
                        transaction: existingTransaction
                    });

                case "pending":
                    return res.status(202).json({
                        success: false,
                        message:
                            "Transaction is currently processing."
                    });

                case "failed":
                    return res.status(409).json({
                        success: false,
                        message:
                            "Previous transaction failed."
                    });

                default:
                    break;
            }
        }

        // -------------------------
        // Account Validation
        // -------------------------

        const [
            fromUserAccount,
            toUserAccount
        ] = await Promise.all([
            Account.findById(fromAccount),
            Account.findById(toAccount)
        ]);

        if (
            !fromUserAccount ||
            !toUserAccount
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid account details."
            });
        }

        if (
            fromUserAccount.status !== "active" ||
            toUserAccount.status !== "active"
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Both accounts must be active."
            });
        }

        // -------------------------
        // Balance Check
        // -------------------------

        const balance =
            await fromUserAccount.getBalance();

        if (balance < numericAmount) {
            return res.status(400).json({
                success: false,
                message:
                    `Insufficient balance. Current balance: ${balance}`
            });
        }

        // -------------------------
        // DB Transaction Start
        // -------------------------

        session.startTransaction();

        transaction = new Transaction({
            fromAccount,
            toAccount,
            amount: numericAmount,
            idempotencyKey,
            status: "pending"
        });

        await transaction.save({
            session
        });

        // Debit
        await Ledger.create(
            [{
                account: fromAccount,
                amount: numericAmount,
                transaction: transaction._id,
                type: "debit"
            }],
            { session }
        );

        // Credit
        await Ledger.create(
            [{
                account: toAccount,
                amount: numericAmount,
                transaction: transaction._id,
                type: "credit"
            }],
            { session }
        );

        transaction.status = "completed";

        await transaction.save({
            session
        });

        await session.commitTransaction();

        // -------------------------
        // Email
        // -------------------------

        // try {
        //     const email = "sumitmaddeshiya99@gmail.com";
        //     const username = req.user.username;
        //     await sendTransactionEmail(
        //         {email,
        //         username,
        //         numericAmount,
        //         toAccount}
        //     );
        // } catch (emailError) {
        //     console.error(
        //         "Email Error:",
        //         emailError.message
        //     );
        // }

        //fetchig the details of the user to whom money is sending
        const receiverAccount = await Account.findOne({
            _id: toAccount
        })
        const receiverUserId = receiverAccount.user;
        const receiverUserDetails = await Users.findOne({
            _id: receiverUserId
        })
        console.log(receiverUserDetails)

        return res.status(200).json({
            success: true,
            message:
                "Transaction completed successfully.",
            transaction: transaction,
            receiverUserDetails: receiverUserDetails
        });

    } catch (error) {

        console.error(
            "Transaction Error:",
            error
        );

        // Abort only if transaction started
        if (session.inTransaction()) {
            try {
                await session.abortTransaction();
            } catch (abortError) {
                console.error(
                    "Abort Error:",
                    abortError
                );
            }
        }

        // Mark failed transaction
        if (transaction?._id) {
            try {
                await Transaction.findByIdAndUpdate(
                    transaction._id,
                    {
                        status: "failed"
                    }
                );
            } catch (updateError) {
                console.error(
                    "Failed status update error:",
                    updateError
                );
            }
        }

        return res.status(500).json({
            success: false,
            message: error.message ||
                "Transaction failed."
        });

    } finally {

        await session.endSession();

    }
}

async function createInitialFundsTransaction(req, res) {
    const {toAccount, amount, idempotencyKey} = req.body;

    if(!toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            success: false,
            message: "toAccount, amount and idempotencyKey are required"
        })
    }

    const toUserAccount = await Account.findOne({
        _id: toAccount,

    })

    if(!toUserAccount){
        return res.status(401).json({
            message: false,
            message: "Invalid account."
        })
    }

    const fromUserAccount = await Account.findOne({
        // systemUser: true,
        user: req.user._id
    })

    if(!fromUserAccount) {
        return res.status(400).json({
            success: false,
            message: "System user account not found."
        })
    }

    const session = await Transaction.startSession();
    session.startTransaction();

    const transaction = new Transaction({
        fromAccount: fromUserAccount._id,
        toAccount,
        amount,
        idempotencyKey,
        status: "pending",
    })

    const debitLedgerEntry = await Ledger.create([{
        account: fromUserAccount._id,
        amount: amount,
        transaction: transaction._id,
        type: "debit"
    }], {session})

    const creditLedgerEntry = await Ledger.create([{
        account: toAccount,
        amount: amount,
        transaction: transaction._id,
        type: "credit"
    }], {session})

    transaction.status = "completed"
    await transaction.save({session})

    await session.commitTransaction()
    session.endSession();

    return res.status(201).json({
        success: true,
        message: "Initial funds transacton completed successfully.",
        transaction: transaction
    })
}

module.exports = {
    createTransactionController,
    createInitialFundsTransaction
}


