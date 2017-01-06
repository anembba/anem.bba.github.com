(function () {
    "use strict";

    angular.module("app", ['ngRoute', 'ngStorage'])
        .constant("config", {
            URL: "https://anem.info",
            DOCUMENTS: "https://anem.info/api/documents.json",
            SLIDES: "https://anem.info/api/slides.json"
        });

} ());