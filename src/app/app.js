(function () {
    "use strict";

    angular.module("app", ['ui.router', 'ngStorage'])
        .constant("config", {
            URL: "https://anem.info",
            DIST:"/dist",
            DOCUMENTS: "/api/documents.json",
            SLIDES: "/api/slides.json"
        });

} ());