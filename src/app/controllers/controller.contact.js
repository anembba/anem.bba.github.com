(function (app) {
    "use strict";

    app.controller("controller.contact", controller);

    controller.$inject = [ "$routeParams", "$location", "$rootScope" ];

    function controller( $routeParams, $location, $rootScope) {
        var self = this;
        self.contents  = "/dist";
        $rootScope.currentPath = $location.path();

    };
}(angular.module("app")));        