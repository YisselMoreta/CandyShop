const usuarioModel = require('../models/usuario');
const jwt = require('jsonwebtoken');
const {SECRET_JWT} = require('../config/password');

const isAuthenticated = async (req, res, next) =>{
    const token = req.headers.authorization;
    try {
        jwt.verify(token, SECRET_JWT);
        const usuario = await usuarioModel.findOne({tokens: token});
        if(!usuario) throw new Error('no autorizado');
        req.usuario = usuario;
        next();
    }catch(err){
        console.log(err);
        if (err.message === 'jwt expired') usuarioModel.findOneAndUpdate({tokens: token}, {$pull:{tokens: token}}).exec()
        res.status(401).send(err.message)
    }
}

module.exports = isAuthenticated;