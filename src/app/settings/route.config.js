(function (app) {
    "use strict";

    app.config(configure);

    configure.$inject = ["$routeProvider"];

    function configure($routeProvider ) {
        $routeProvider
            .when("/about", {
                templateUrl: "views/about.html",
                controller: "controller.main as vm",
                controllerAs: "vm"

            })
            .when("/", {
                templateUrl: "views/main.html",
                controller: "controller.main as vm",
                controllerAs: "vm"

            })
            .when("/contact", {
                templateUrl: "views/contact.html",
                controller: "controller.contact as vm",
                controllerAs: "vm"

            })
            .when("/download", {
                templateUrl: "views/download.html",
                controller: "controller.download as vm",
                controllerAs: "vm"

            })
            .otherwise({ redirectTo: '/' });
        //  $locationProvider.html5Mode(true);

        // ng-storage config
        //  $localStorageProvider.setKeyPrefix('bookstore');

    }
} (angular.module("app")));