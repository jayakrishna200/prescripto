import jwt from "jsonwebtoken";

//Admin Authentication Middleware

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    const aToken=atoken
    console.log("All Headers:", req.headers);
    console.log(`Token at backend: ${aToken}`);
    if (!aToken) {
      return res.json({
        success: false,
        message: "Token Not found Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);
    console.log(token_decode);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(`Error: `, error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
