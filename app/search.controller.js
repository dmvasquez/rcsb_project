(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$http', '$timeout'];
    function SearchController($http, $timeout) {
        var vm = this;
        var original = "";
        vm.resultSet = [];

        activate();

        ////////////////

        function activate() {
            $.getJSON("HIV_LeftSideRefinements.json", function(leftSideRef) {
            original = JSON.stringify(leftSideRef, null, 4);
            //document.getElementById("daCode").innerHTML = original;
            $timeout(function() {
                vm.resultSet = $.parseJSON(original);
                console.log(vm.resultSet);            
            }, 50);
        })
         }
        
    }
})();