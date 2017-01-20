(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = ["dataservice", "config"];

    function controller(dataservice, config) {
        var self = this;
        self.contents = config.DIST;
        self.slides = {
            list: []
        };


        init();
        function init() {
            dataservice.getSlides()
                .then(function (slides) {
                    self.slides.list = slides;
                    $('.carousel').carousel({ interval: 6000 })
                })
        }

    };
} (angular.module("app")));        