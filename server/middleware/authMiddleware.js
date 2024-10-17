import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) =>{
    const token = req.cookies.auth_token;
    if(!token){
        return res.status(401).json({message: "Unauthorized request. Token not provided"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized request. Invalid token"});
    }
}
