describe('file upload directive' , function () {

    var $compile, $rootScope, directiveElem, $parse;

    beforeEach(angular.mock.module('app'));
    beforeEach(function(){

        inject(function(_$compile_, _$rootScope_ , _$parse_){
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $parse = _$parse_;
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var element = angular.element('<input type="file" on-read-file="vm.showContent($fileContent)" />');
        var compiledElement = $compile(element)($rootScope);
        $rootScope.$digest();
        return compiledElement;
    }

    it('should have input element', function () {
        var inputElement = directiveElem.find('input');
        expect(inputElement).toBeDefined();
    });


})
