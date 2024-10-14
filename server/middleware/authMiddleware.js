import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) =>{
    const token = req.header("Authorization")

    if(!token){
        return res.status(401).json({message: "Unauthorized request. Token not provided"});
    }
    console.log(token , "token from auth")
}