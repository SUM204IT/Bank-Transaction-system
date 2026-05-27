const jwt = require("jsonwebtoken");

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

module.exports = {authUser};