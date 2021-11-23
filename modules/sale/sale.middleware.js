(function () {
    'use strict';

    module.exports = {
        addSale: addSale,
        getSales: getSales,
        getSaleById: getSaleById,
        modifySale: modifySale,
        removeSale: removeSale
    };

    var SaleService = require('./sale.module')().SaleService;

    function addSale(req, res, next) {

        SaleService.createSale(req.body)
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

    function getSales(req, res, next) {

        SaleService.fetchSales()
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

    function getSaleById(req, res, next) {

        SaleService.fetchSaleById(req.params.saleId)
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

    function modifySale(req, res, next) {
        SaleService.updateSale(req.params.saleId, req.body)
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

    function removeSale(req, res, next) {

        SaleService.deleteSale(req.params.saleId)
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
