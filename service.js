"use strict";

function ProfileService($location) {
    let userData = {};

    const getUserProfile = () => {
        return userData;
    };
    const setUserProfile = (user) => {
        userData = user;
        $location.path("/userProfile");
    };
    const editProfile = () => {
        $location.path("/editProfile");
        console.log("should be working")
    }

    return {
        getUserProfile,
        setUserProfile,
        editProfile
    };
}

angular
    .module("app")
    .factory("ProfileService", ProfileService);