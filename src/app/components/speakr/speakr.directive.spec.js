(function() {
  'use strict';

  describe('directive speakr', function() {
    var $log;
    var vm;
    var el;

    beforeEach(module('nooStim'));
    beforeEach(inject(function($compile, $rootScope, $q, _$log_) {
      $log = _$log_;

      el = angular.element('<speakr></speakr>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object', function() {
      expect(vm).toEqual(jasmine.any(Object));

    });

    it('should log some info', function() {
      expect($log.info.logs).toEqual(jasmine.stringMatching('Activated Speakr Directive'));
    });
  });
})();
