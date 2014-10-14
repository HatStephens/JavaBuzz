describe('JavaBuzz', function () {

	var javabuzz;

	beforeEach(function(){
		javabuzz = new JavaBuzz();
	});

	describe('knows when a number is divisible by', function() {

		it('three', function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('five', function() {
			expect(javabuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('three and five', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
		});

	});

	describe('knows when a number is not divisible by', function() {

		it('three', function() {
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('five', function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('three and five', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
		});

	});

	describe('should say', function() {

		it('"number" if the number is not divisible by three or five', function() {
			expect(javabuzz.playGame(1)).toEqual(1);
		});

		it('"Java" if the number is divisible by three', function() {
			expect(javabuzz.playGame(3)).toEqual("Java");
		});

		it('"Buzz" if the number is divisible by five', function() {
			expect(javabuzz.playGame(5)).toEqual("Buzz");
		});

		it('"JavaBuzz" if the number is divisible by three and five', function() {
			expect(javabuzz.playGame(15)).toEqual("JavaBuzz");
		});

	});

});