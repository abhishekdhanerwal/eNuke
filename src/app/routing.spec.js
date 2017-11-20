describe('Testing routes', function() {

    beforeEach(module('app'));

    var location, route, rootScope;

    beforeEach(inject(
        function( _$location_, _$route_, _$rootScope_ ) {
            location = _$location_;
            route = _$route_;
            rootScope = _$rootScope_;
        }));

        it('should go to Marco Polo Question', function() {
            location.path('/MarcoPolo');
            rootScope.$digest();
            expect(route.current.controller).toBe('MarcoPoloController')
        });

        it('should go to user story Question', function() {
            location.path('/UserStory');
            rootScope.$digest();
            expect(route.current.controller).toBe('UserStoryController')
        });

        it('should go to marco polo Question when wego to random url', function() {
            location.path('/abc');
            rootScope.$digest();
            expect(route.current.controller).toBe('MarcoPoloController')
        });
});