(function () {
    "use strict";

    angular.module("app", ['ui.router', 'ngStorage'])
        .constant("config", {
            URL: "https://anem.info",
            DOCUMENTS: "https://anem.info/api/documents.json",
            SLIDES: "https://anem.info/api/slides.json"
        });

} ());