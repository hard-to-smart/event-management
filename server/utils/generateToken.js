import jwt from "jsonwebtoken";
import "dotenv";
export function generateToken(user){
    return jwt.sign({
        userId: user._id,
        userEmail: user.email,
        userRole: user.role,
        isVerified: true, 
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h"}
);
}
