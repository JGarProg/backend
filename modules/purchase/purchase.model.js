(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var PurchaseSchema = new Schema({
        Fecha: {
            type: String,
            required: true
        },
        Factura: {
            type: Number,
            required: true
        },
        Nombre: {
            type: String,
            required: true
        },
        Identificacion: {
            type: String,
            required: true
        },
        IdProd: {
            type: String,
            required: true
        },
        Producto: {
            type: String,
            required: true
        },
        Valor: {
            type: Number,
            required: true
        },
        Cantidad: {
            type: Number,
            required: true
        },
        Total: {
            type: Number,
            required: true
        },
        Compra: {
            type: Number,
            required: true
        }
    });

    module.exports = mongoose.model('purchases', PurchaseSchema);
})();