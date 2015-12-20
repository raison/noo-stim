(function() {
  'use strict';

  angular
    .module('nooStim')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
