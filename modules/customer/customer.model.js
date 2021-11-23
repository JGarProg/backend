(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        Identificacion: {
            type: String,
            required: true
        },
        Nombre: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        Direccion: {
            type: String,
            required: true
        },
        Estado: {
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('customers', CustomerSchema);
})();