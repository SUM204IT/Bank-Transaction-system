const jwt = require("jsonwebtoken");
const Users = require("../models/Users.model");

async function authUser(req, res, next) {
    try {
        const token = req.cookies.token;
        
        if(!token){
            return res.status(404).json({
                success: false,
                message: "Invalid token."
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(404).json({
                success: false,
                message: "Invalid token."
            })
        }

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Unauthorised access."
        })
    }
}

async function authSystemUserMiddleware(req, res, next) {
    const token = req.cookies.token;

    if(!token){
            return res.status(404).json({
                success: false,
                message: "Invalid token."
            })
        }

        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)

            const user = await Users.findById(decoded.userId).select("+systemUser")

            if(!user.systemUser){
                return res.status(403).json({
                    success: false,
                    message: "Forbidden access, not a system user."
                })
            }

            req.user = user;
            return next();
        } catch (error) {
            
            return res.status(401).json({
                success: false,
                message: "Unauthorised access, token is invalid."
            })
        }

}

module.exports = {
    authUser, 
    authSystemUserMiddleware
};