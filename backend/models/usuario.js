const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const usuarioSchema = new mongoose.Schema ({
    
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
usuarioSchema.methods.toJSON=function (){
    const usuario= this.toObject();
    delete usuario.password;
    delete usuario.tokens;
    delete usuario.__v;
    return usuario;
}

usuarioSchema.pre('save', function(next){
    const usuario = this;
    if (usuario.isModified('password')) {
        bcrypt.hash(usuario.password, 10).then(hash =>{
            usuario.password = hash;
            return next();
        }).catch(err => next(err))
    } else next();
        
    
})

const usuarioModel = mongoose.model('usuario', usuarioSchema);
module.exports = usuarioModel;