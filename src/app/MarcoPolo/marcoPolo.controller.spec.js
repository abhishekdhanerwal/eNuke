describe('marco polo controlller' , function () {

    var $controller;
    var scope;
    var controller;

    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function(_$controller_ , _$rootScope_){

        $controller = _$controller_;
        scope = _$rootScope_.$new();
        controller = $controller('MarcoPoloController', {
            $scope: scope
        });

    }));

    it('should generate the required string' , function () {

        controller.starting = 10;
        controller.starting = 10;
        controller.ending = 30;
        controller.generateString();
        expect(controller.finalString).toBe('10,11,marco,13,polo,15,marco,17,18,19,marco,polo,22,23,marco,25,26,27,marcopolo,29,30')
        
    });
})