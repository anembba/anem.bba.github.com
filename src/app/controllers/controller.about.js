(function (app) {
    "use strict";

    app.controller("controller.about", controller);

    controller.$inject = [];
    function controller() {

        var self = this;
        self.contents = "/dist";

    };
} (angular.module("app")));        