(function (app) {
    "use strict";

    app.config(configure);

    // configure.$inject = ["$routeProvider", "$locationProvider"];
    configure.$inject = ["$stateProvider", "$urlRouterProvider"];


    function configure($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "views/main.html",
                controller: "controller.main",
                controllerAs: "vm"
            })
            .state('about', {
                url: '/about',
                templateUrl: "views/about.html",
                controller: "controller.about",
                controllerAs: "vm"
            })
            .state('contact', {
                url: '/contact',
                templateUrl: "views/contact.html",
                controller: "controller.contact",
                controllerAs: "vm"
            })
            .state('download', {
                url: '/download',
                templateUrl: "views/download.html",
                controller: "controller.download",
                controllerAs: "vm"
            });
            };
 

        function configureRoute($routeProvider, $locationProvider) {
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

            $locationProvider.html5Mode(true);

            // ng-storage config
            //  $localStorageProvider.setKeyPrefix('bookstore');

    }

    } (angular.module("app")));