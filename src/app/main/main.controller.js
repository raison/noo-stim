(function() {
  'use strict';

  angular
    .module('nooStim')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.speakrs=[];
    vm.addMantra = function(){
      vm.speakrs.push({});
    }
  }
})();
