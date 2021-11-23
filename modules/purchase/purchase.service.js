(function () {
    'use strict';

    module.exports = {
        createPurchase: createPurchase,
        fetchPurchases: fetchPurchases,
        fetchPurchaseById: fetchPurchaseById,
        updatePurchase: updatePurchase,
        deletePurchase: deletePurchase
    };

    var PurchaseModel = require('./purchase.module')().PurchaseModel;

    function createPurchase(purchase) {
        return PurchaseModel.create(purchase);
    }

    function fetchPurchases() {
        return PurchaseModel.find({})
            .exec();
    }

    function fetchPurchaseById(purchaseId) {
        return PurchaseModel.findById(purchaseId)
            .exec();
    }

    function updatePurchase(purchaseId, purchase) {
        return PurchaseModel
            .findByIdAndUpdate(purchaseId, purchase, {new: true})
            .exec();
    }

    function deletePurchase(purchaseId) {
        return PurchaseModel
            .findByIdAndRemove(purchaseId)
            .exec();
    }

})();