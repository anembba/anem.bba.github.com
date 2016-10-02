(function (app) {
    "use strict";

    app.controller("controller.download", controller);

    controller.$inject = [ "$routeParams", "$location"];

    function controller( $routeParams, $location) {
        var self = this;
        self.contents  = "/dist";
        $rootScope.currentPath = $location.path();
        
        console.log("controller.download Start");
        init()


        function init() {
            console.log("init function Start");
        };

    };
}(angular.module("app")));        