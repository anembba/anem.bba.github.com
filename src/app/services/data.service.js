// dataservice factory
(function (app) {
    
    app.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'storage'];

    function dataservice($http, storage) {

        var url = "https://anem.info/api/";

        return {
            getSlides: getSlides
        };
        

        function getSlides() {
        };

        function getOneComplete(response) {
            return response.data;
        };

        function getAllComplete(response) {
            return response.data;
        };

        function getAllFailed(error) {
            logger.error('XHR Failed .' + error.data);
        };
    }
} (angular.module('app')));