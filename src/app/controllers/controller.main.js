(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["$routeParams", "$location", "$rootScope", "$http", "$interval"];

    function controller($routeParams, $location, $rootScope, $http, $interval) {
        var self = this;
        self.slides = {
            list: []
        };

        self.contents = "/dist";
        $rootScope.currentPath = $location.path();
        var slideUrl = "https://anem.info/api/slides.json"

        init();

        function init() {

            $http.get(slideUrl)
                .then(function (response) {
                    self.slides.list = response.data.slides;
                    $('.carousel').carousel({
                        interval: 5000 //changes the speed
                    })

                });

        };

    };
} (angular.module("app")));        