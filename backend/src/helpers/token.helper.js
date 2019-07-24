const jwt = require('jsonwebtoken');

const helper = {};

helper.token = (req, res)=>{
    const token = req.headers['authorization'];
    var decode;
    if(!token){
        decode = null;
        return decode;
    }

    jwt.verify(token, process.env.SECRET_JWT, (err, response)=>{
        if(err){
            decode = false;
            return decode;
        }
        decode = response;
    });

    return decode;
}

module.exports = helper;