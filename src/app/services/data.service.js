// dataservice factory
(function (app) {

    app.factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'storage'];

    function dataservice($http, storage) {

        var url = "https://anem.info/api/";

        return {
            getSlides: getSlides,
            getDocuments: getDocuments
        };

        function getSlides() {
            return $http.get(url + "slides.json")
                .then(function (response) {
                    return response.data.slides;
                });
        };

        function getDocuments() {

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