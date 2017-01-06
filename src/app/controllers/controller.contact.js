(function (app) {
    "use strict";

    app.controller("controller.contact", controller);

    controller.$inject = [];

    function controller() {

        var self = this;
        self.contents = "/dist";

    };
} (angular.module("app")));        