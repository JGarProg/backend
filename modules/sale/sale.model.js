(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var SaleSchema = new Schema({
        Fecha: {
            type: String,
            required: true
        },
        Factura: {
            type: String,
            required: true
        },        
        Vendedor: {
            type: String,
            required: true
        },
        Id_Cliente: {
            type: String,
            required: true
        },
        Cliente: {
            type: String,
            required: true
        },
        Producto: {
            type: String,
            required: true
        },
        Precio: {
            type: String,
            required: true
        },        
        Cantidad: {
            type: String,
            default: ''
        },
        Valor: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('sales', SaleSchema);
})();