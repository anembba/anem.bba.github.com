(function (app) {
    "use strict";

    app.controller("controller.download", controller);

    controller.$inject = ["$routeParams", "$location", "$rootScope", "$http"];

    function controller($routeParams, $location, $rootScope, $http) {
        var self = this;
        self.title = "Documents à télécharger";
        self.documents = {};
        self.contents = "/dist";
        $rootScope.currentPath = $location.path();

        var url = "https://anem.info/api/documents.json";
        function getFileName(fullPath) {
            var filename = fullPath.replace(/^.*[\\\/]/, '');
            return filename.substring(0, filename.indexOf('.'))

        };

        $http.get(url)
            .then(function (response) {
                angular.forEach(response.data.docs, function (doc) {
                    doc.filename = getFileName(doc.path);
                });
                self.documents = response.data;
            });

    };
} (angular.module("app")));        