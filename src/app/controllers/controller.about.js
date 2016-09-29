(function (app) {
    "use strict";

    app.controller("controller.about", controller);

    controller.$inject = [ "$routeParams", "$location"];

    function controller( $routeParams, $location) {
        var self = this;
        self.contents  = "/dist";
        console.log("controller.about Start");
        init()


        function init() {
            console.log("init function Start");
        };

    };
}(angular.module("app")));        