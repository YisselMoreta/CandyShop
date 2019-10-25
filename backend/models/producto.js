const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema ({
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        imagenPath: String
})

module.exports = mongoose.model('producto', productoSchema);