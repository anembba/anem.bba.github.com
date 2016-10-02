(function (app) {
    "use strict";

    app.controller("controller.contact", controller);

    controller.$inject = [ "$routeParams", "$location", "$rootScope" ];

    function controller( $routeParams, $location, $rootScope) {
        var self = this;
        self.contents  = "/dist";
        $rootScope.currentPath = $location.path();

        console.log("controller.contact Start");
        init()


        function init() {
            console.log("init function Start");
        };

    };
}(angular.module("app")));        