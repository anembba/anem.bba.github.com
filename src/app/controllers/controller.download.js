(function (app) {
    "use strict";

    app.controller("controller.download", controller);

    controller.$inject = ["$routeParams", "$location", "$rootScope", "dataservice"];

    function controller($routeParams, $location, $rootScope, dataservice) {
        var self = this;
        self.title = "Documents à télécharger";
        self.documents = {};
        self.contents = "/dist";
        $rootScope.currentPath = $location.path();
        
        dataservice.getDocuments()
            .then(function (response) {
                self.documents = response;
            });

    };
} (angular.module("app")));        