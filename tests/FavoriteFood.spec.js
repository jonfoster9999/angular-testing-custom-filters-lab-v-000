describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

    beforeEach(inject(function ($injector) {
        $filter = $injector.get('$filter');
    }));

	it('should filter favorite foods', function(){
		var mockedList = [{
				name: "George",
				favoriteFood: "Pizza"
			}, {
				name: "Jonathan",
				favoriteFood: "Burgers"
			}, {
				name: "Jasmine",
				favoriteFood: "Chicken"
			}	
		]

		var results = $filter('favoriteFood')(mockedList, "Burgers");
		
		expect(results.length).toBe(1);
		expect(results[0].name).toBe("Jonathan")
	});	
});
