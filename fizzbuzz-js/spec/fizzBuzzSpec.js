//function = Rspec do..end
describe('fizzbuzz', function() {
  var fizzbuzz;
beforeEach(function(){
  fizzbuzz = new FizzBuzz();

});
// describe = Rspec context
  describe('when number is', function() {
    it('divisible by 3', function() {
  expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);

    });

  });
    describe('when number is NOT', function(){
      it('divisible by 3', function(){
        expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
      });

    });

    describe('when number is', function(){
      it('divisible by 5', function(){
        expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
      });

    });

    describe('when number is NOT', function(){
      it('divisible by 5', function(){
        expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
      });

    });

    describe('when number is', function(){
      it('divisible by 3 and 5', function(){
        expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
      });
    });

    describe('when number is NOT', function(){
      it('divisible by 3 and 5', function(){
        expect(fizzbuzz.isDivisibleByThreeAndFive(11)).toBe(false);
      });
    });

    describe('when playing says', function(){
      it('fizz if a number is divisible by 3', function(){
        expect(fizzbuzz.say(3)).toBe("fizz");

      });

    });

    describe('when playing says',function(){
      it('buzz if a number is divisible by 5',function(){
        expect(fizzbuzz.say(5)).toBe("buzz");
      });

    });

    describe('when playing says', function(){
      it('fizzbuzz if a number is divisible by 3 and 5', function(){
        expect(fizzbuzz.say(15)).toBe("fizzbuzz");
      });
    });

    describe('all other number', function(){
      it('11 for 11', function(){
        expect(fizzbuzz.say(11)).toBe(11);
      });
      it('8 for 8', function(){
        expect(fizzbuzz.say(8)).toBe(8);
      });
    });
});
