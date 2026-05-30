const express = require("express");
const router = express.Router();

const accountController = require("../controller/account.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create", authMiddleware.authUser, accountController.createAccountController);
router.get("/get-account", authMiddleware.authUser, accountController.getUserAccountController);
router.get("/balance/:balanceId", authMiddleware.authUser, accountController.getAccountBalanceController)

module.exports = router;
