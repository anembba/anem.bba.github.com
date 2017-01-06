(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["dataservice"];

    function controller(  dataservice) {
        var self = this;
        self.slides = {
            list: []
        };

        self.contents = "/dist";

        init();
        function init() {
            dataservice.getSlides()
                .then(function (slides) {
                    self.slides.list = slides;
                    $('.carousel').carousel({interval: 6000 })
                })
        }

    };
} (angular.module("app")));        