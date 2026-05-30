const express = require('express');
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const transactionController = require("../controller/transaction.controller");

router.post("/create-transaction", authMiddleware.authUser, transactionController.createTransactionController);
router.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)


module.exports = router;