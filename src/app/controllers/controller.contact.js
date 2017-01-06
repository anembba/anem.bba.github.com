(function (app) {
    "use strict";

    app.controller("controller.contact", controller);

    controller.$inject = [ "$location", "$rootScope" ];

    function controller(  $location, $rootScope) {
        
        var self = this;
        self.contents  = "/dist";
        
    };
}(angular.module("app")));        