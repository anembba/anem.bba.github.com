(function (app) {
    "use strict";

    app.controller("controller.main", controller);

    controller.$inject = [ "$routeParams", "$location"];

    function controller( $routeParams, $location) {
        var self = this;
        self.contents  = "/dist";
        console.log("controller.main Start");
        init();


        function init() {
            console.log("init function Start");
        };

    };
}(angular.module("app")));        