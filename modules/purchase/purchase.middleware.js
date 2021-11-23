(function () {
    'use strict';

    module.exports = {
        addPurchase: addPurchase,
        getPurchases: getPurchases,
        getPurchaseById: getPurchaseById,
        modifyPurchase: modifyPurchase,
        removePurchase: removePurchase
    };

    var PurchaseService = require('./purchase.module')().PurchaseService;

    function addPurchase(req, res, next) {

        PurchaseService.createPurchase(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getPurchases(req, res, next) {

        PurchaseService.fetchPurchases()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getPurchaseById(req, res, next) {

        PurchaseService.fetchPurchaseById(req.params.purchaseId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyPurchase(req, res, next) {
        PurchaseService.updatePurchase(req.params.purchaseId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removePurchase(req, res, next) {

        PurchaseService.deletePurchase(req.params.purchaseId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
