(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductSchema = new Schema({
        IdProd: {
            type: String,
            required: true
        },
        Producto: {
            type: String,
            required: true
        },
        Descripcion: {
            type: String,
            default: ''
        },
        Estado: {
            type: String,
            required: true
        },
        Valor: {
            type: String,
            required: true
        }        
    });

    module.exports = mongoose.model('products', ProductSchema);
})();