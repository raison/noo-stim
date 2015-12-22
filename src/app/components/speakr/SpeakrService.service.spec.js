(function() {
  'use strict';

  describe('service SpeakerService', function() {
    var SpeakrService;
    var $httpBackend;
    var $log;

    beforeEach(module('nooStim'));
    beforeEach(inject(function(_SpeakrService_, _$httpBackend_, _$log_) {
      SpeakrService = _SpeakrService_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(SpeakrService).not.toEqual(null);
    });

    describe('apiHost variable', function() {
      it('should exist', function() {
        expect(SpeakrService.apiHost).not.toEqual(null);
      });
    });

    describe('getWords function', function() {
      it('should exist', function() {
        expect(SpeakrService.getWords).not.toEqual(null);
      });

      it('should return data', function() {
        $httpBackend.when('GET',  SpeakrService.apiHost).respond(200, [{pprt: 'value'}]);
        var data;
        SpeakrService.getWords(3).then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(String));
        expect(data.length > 3).toBeTruthy();
      });
    });
  });
})();
