(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["$routeParams", "$location", "$rootScope", "dataservice"];

    function controller($routeParams, $location, $rootScope, dataservice) {
        var self = this;
        self.slides = {
            list: []
        };

        self.contents = "/dist";
        $rootScope.currentPath = $location.path();

        init();
        function init() {
            dataservice.getSlides()
                .then(function (slides) {
                    self.slides.list = slides;
                    $('.carousel').carousel({
                        interval: 6000 //changes the speed
                    })
                })
        }

    };
} (angular.module("app")));        