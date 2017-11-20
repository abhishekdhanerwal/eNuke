(function() {
  'use strict';

  angular
    .module('app')
    .controller('MarcoPoloController', MarcoPoloController);

  MarcoPoloController.$inject = [];

  function MarcoPoloController() {
    var vm = this;

    vm.generateString = function () {
      vm.finalString = "";
      var temp = '';
      for(var index=vm.starting ; index<vm.ending+1 ; index++){
        if(index%4 == 0 && index%7 != 0)
          temp = "marco";
        else if(index%4 != 0 && index%7 == 0)
          temp = "polo";
        else if(index%4 == 0 && index%7 == 0)
          temp = "marcopolo";
        else
          temp = index;

        if(vm.finalString.length > 0){
          vm.finalString = vm.finalString + ',';
        }
        vm.finalString = vm.finalString + temp;
      }
    }
  }
})();
