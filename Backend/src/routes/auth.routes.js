const express = require("express");
const router = express.Router();

const authContoller = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", authContoller.registerUserController);
router.post("/login", authContoller.loginUserController);
router.get("/profile", authMiddleware.authUser, authContoller.getMeController);
router.get("/logout", authContoller.logoutUserController);


module.exports = router;

