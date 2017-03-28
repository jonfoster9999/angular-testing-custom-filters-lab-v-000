describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('Removes all the vowels', function(){
		expect($filter('removeAllVowels')("motorbike")).toBe("mtrbk")
	})

});
