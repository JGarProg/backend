(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var PurchaseMiddleware = require('./purchase.module')().PurchaseMiddleware;

    router.post('/',
        PurchaseMiddleware.addPurchase,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        PurchaseMiddleware.getPurchases,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:purchaseId',
        PurchaseMiddleware.getPurchaseById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:purchaseId',
        PurchaseMiddleware.modifyPurchase,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:purchaseId',
        PurchaseMiddleware.removePurchase,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();