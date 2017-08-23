(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$http', '$timeout'];
    function SearchController($http, $timeout) {
        var vm = this;
        var original = "";
        var firstTwentyFive = "";
        vm.resultSet = [];
        vm.firstResults = [];

        activate();

        ////////////////

        function activate() {
            $.getJSON("HIV_LeftSideRefinements.json", function(leftSideRef) {
                original = JSON.stringify(leftSideRef, null, 4);
                //document.getElementById("daCode").innerHTML = original;
                $timeout(function() {
                    vm.resultSet = $.parseJSON(original);
                    //console.log(vm.resultSet);            
                }, 50);
            })
            $.getJSON("HIV_SearchResults_ClassicRCSB_First25.json", function(searchResults) {
                firstTwentyFive = JSON.stringify(searchResults, null, 4);
                //document.getElementById("daCode").innerHTML = firstTwentyFive;
                $timeout(function() {
                    vm.firstResults = $.parseJSON(firstTwentyFive);
                    console.log(vm.firstResults);            
                }, 50);
            })
        }
        
    }
})();