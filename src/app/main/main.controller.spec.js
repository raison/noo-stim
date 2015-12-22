(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('nooStim'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('should have a speakrs array', function() {
      expect(vm.speakrs).toEqual(jasmine.any(Array));
    });

    it('should add a speakr when vm.addMantra is invoked', function() {
      vm.addMantra();
      expect(vm.speakrs.length).toEqual(1);
    });

  });
})();
