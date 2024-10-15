export const adminMiddleware = async (req, res) => {
  const token = req.header("Authorization");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(401)
        .json({ message: "Unauthorized request. Invalid token" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Server Error" });
  }
};
