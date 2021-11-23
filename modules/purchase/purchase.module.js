(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            PurchaseController: require('./purchase.controller'),
            PurchaseMiddleware: require('./purchase.middleware'),
            PurchaseService: require('./purchase.service'),
            PurchaseModel: require('./purchase.model')
        }
    }

})();