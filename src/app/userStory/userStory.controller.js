(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserStoryController', UserStoryController);

    UserStoryController.$inject = [];

    function UserStoryController() {
        var vm = this;
        vm.currentString = "";
        vm.finalResult = [];

        vm.showContent = function($fileContent){
            vm.content = $fileContent;

            for(var index=0 ; index < vm.content.length ; index=index+4){
                for(var flag=0; flag< 26 ; flag++){
                    if(vm.content[index][flag+1] != undefined){
                        findInteger(flag , index);
                    }
                    else{
                        break;
                    }
                    flag = flag+2;
                }

                if(vm.currentString.length == 9){
                    vm.finalResult.push(vm.currentString);
                }
                     vm.currentString = "";
            }
            console.log(vm.finalResult)
        };

        function findInteger(flag , index) {
            if(vm.content[index][flag+1] == " "){
                if(vm.content[index+1][flag] == "|")
                    vm.currentString = vm.currentString + "4";
                else
                    vm.currentString = vm.currentString + "1";
            }
            else  {
                if(vm.content[index+1][flag] == " "){
                    if(vm.content[index][flag+(28*2)] == "|")
                        vm.currentString = vm.currentString + "2";
                    else {
                        if(vm.content[index+1][flag+1] == "_")
                            vm.currentString = vm.currentString + "3";
                        else
                            vm.currentString = vm.currentString + "7";
                    }
                }
                else {
                    if(vm.content[index+1][flag+1] == " ")
                        vm.currentString = vm.currentString + "0";
                    else {
                        if(vm.content[index+2][flag] == "|"){
                            if(vm.content[index+1][flag+2] == " ")
                                vm.currentString = vm.currentString + "6";
                            else
                                vm.currentString = vm.currentString + "8";
                        }
                        else {
                            if(vm.content[index+1][flag+2] == " ")
                                vm.currentString = vm.currentString + "5";
                            else
                                vm.currentString = vm.currentString + "9";
                        }
                    }
                }
            }
        }
    }
})();
