"use strict";

angular
    .module("app", ['ngRoute'])
    .config(($routeProvider) => {
        $routeProvider
            .when("/userProfile", {
                template: "<user-profile></user-profile>"
            })
            .when("/edit-profile", {
                template: "<edit-profile></edit-profile>"
            })
            .otherwise({ redirectTo: "/userProfile" });
    });