import jwt from "jsonwebtoken";
export const SECRET = '123456'
export const auth = (req,res,next)=>{
    let authorization = req.headers.authorization;
    if(authorization){
        let accessToken = req.headers.authorization.split(' ')[1];
        if(accessToken){
            jwt.verify(accessToken,SECRET,(err,payload)=>{
                if(err){
                    res.status(403).json({
                        err : err.message,
                        message : 'bạn không có quyền truy cập'
                    })
                }else {
                    req.decode = payload;
                    next()
                }
            })
        }else {
            res.status(403).json({
                message : 'Bạn không có quyền truy cập'
            })
        }
    }else {
        res.status(403).json({
            message: 'Bạn không có quyền truy cập'
        })
    }

}
