const Users = require("../models/Users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUserController(req, res) {
    try {
        const {username , email, password} = req.body;

        if(!username || !email || !password){
            return res.status(401).json({
                success: false,
                message: "Please fill all the details."
            })
        }

        const userAlreadyExists = await Users.findOne({email});
        if(userAlreadyExists){
            return res.status(401).json({
                success: false,
                message: "User already registered, Please login."
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await Users.create({
            username,
            email,
            password: hashedPassword
        })

        return res.status(200).json({
            success: true,
            message: "User registered successfully.",
            user: {
                username: user.username,
                email: user.email,
            }
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in registering the user."
        })
    }
}

async function loginUserController(req, res) {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: "Please fill all the details."
            })
        }

        const user = await Users.findOne({email});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User does not exist, please register first."
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(401).json({
                success: false,
                message: "Incorrect password."
            })
        }


        try {
            const token = jwt.sign(
            {
                userId: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )

        // console.log(token)

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "User Logged in successfully.",
            user: {
                userId: user._id,
                username: user.username,
                email: user.email
            }
        })

        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Error in genearting the token."
            })
        }

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Error in user login."
        })
    }
}

async function logoutUserController(req, res) {
    res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}

async function getMeController(req, res) {
    try {
        const userId = req.user.userId;

        // if(!userId){
        //     return res.status(401).json({
        //         success: false,
        //         message: "Unauthorised access"
        //     })
        // }

        const user = await Users.findById(userId);

        return res.status(200).json({
            success: true,
            message: "User details fetched successfully.",
            user: {
                userId: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Error in fetching the user details."
        })
    }
}


module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}