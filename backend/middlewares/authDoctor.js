import jwt from 'jsonwebtoken'

//Doctor Authentication Middleware

const authDoctor=async (req,res,next)=>{
    try{
        const {dtoken}=req.headers;
        if(!dtoken){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        const token_decode=jwt.verify(dtoken,process.env.JWT_SECRET)
        console.log("doctorTokenDecodeId",token_decode.id) // Getting id
        req.docId=token_decode.id
        next()
    }catch(error){
        console.log(`Error: `,error)
        res.json({success:false,message:error.message})
    }
}

export default authDoctor;
