"use strict";

const editProfile = {
    template: `
        <form ng-submit="$ctrl.updateInfo($ctrl.user)">
            <p class="editIntro">Use the form below to update your profile.<p>
            <label>Name</label>
            <input type="text" placeholder="Name.." ng-model="$ctrl.user.name">
            <label>Contact</label>
            <input type="text" placeholder="Contact.." ng-model="$ctrl.user.contact">
            <label>Bio</label>
            <textarea type="text" class="bio" placeholder="Bio.." ng-model="$ctrl.user.bio" cols="77" rows="10"></textarea>
            <button>Update</button>
        </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.user = angular.copy(ProfileService.getUserProfile());
        vm.updateInfo = (user) => {
            console.log(user);
            ProfileService.setUserProfile(user);
            
        }
    }]
};

angular
    .module("app")
    .component("editProfile", editProfile);

   