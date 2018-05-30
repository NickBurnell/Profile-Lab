"use strict";

const userProfile = {
    template: `
    <div class="profileCont">
        <img src="grant-chirpus.png" alt="Grant Chirpus Logo">
        <section>
            <h1>{{ $ctrl.userData.name }}</h1>
            <h6>{{ $ctrl.userData.contact }}</h6>
            <p>{{ $ctrl.userData.bio }}</p>
            <button ng-click="$ctrl.editProfile(user);">Edit</button>
        </section>
    </div>
    `,
    controller: ["ProfileService", "$location", function(ProfileService, $location) {
        const vm = this;
        vm.userData = ProfileService.getUserProfile();
        // vm.editProfile = ProfileService.edit();
        vm.editProfile = (user) => {
            
           $location.path("/edit-profile");
        }
    }]
};

userProfile.$inject = ["$location"];

angular
    .module("app")
    .component("userProfile", userProfile);