(function (app) {
    "use strict";

    app.controller("controller.download", controller);

    controller.$inject = ["dataservice"];

    function controller(dataservice) {
        var self = this;
        self.title = "Documents à télécharger";
        self.documents = {};
        self.contents = "/dist";

        dataservice.getDocuments()
            .then(function (response) {
                self.documents = response;
            });

    };
} (angular.module("app")));        