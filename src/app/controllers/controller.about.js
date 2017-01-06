(function (app) {
    "use strict";

    app.controller("controller.about", controller);

    controller.$inject = [  "$location", "$rootScope" ];
    function controller(  $location, $rootScope) {
        var self = this;
        self.contents  = "/dist";
        $rootScope.currentPath = $location.path();
    };
}(angular.module("app")));        