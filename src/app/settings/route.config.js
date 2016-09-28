(function (app) {
    "use strict";

    app.config(configure);

    configure.$inject = ["$routeProvider"];

    function configure($routeProvider ) {
        $routeProvider
            .when("/", {
                templateUrl: "views/main.html",
                controller: "controller.main as vm",
                controllerAs: "vm"

            })
            .otherwise({ redirectTo: '/' });
        //  $locationProvider.html5Mode(true);

        // ng-storage config
        //  $localStorageProvider.setKeyPrefix('bookstore');

    }
} (angular.module("app")));