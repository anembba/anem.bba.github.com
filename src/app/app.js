(function () {
    "use strict";

    angular.module("app", ['ui.router', 'ngStorage'])
        .constant("config", {
            URL: "https://anem.info",
            DIST:"/dist",
            DOCUMENTS: "https://anem.info/api/documents.json",
            SLIDES: "https://anem.info/api/slides.json"
        });

} ());