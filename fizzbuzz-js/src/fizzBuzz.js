var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleBy = function(number, divisior){
  return (number % divisor === 0);
};

  FizzBuzz.prototype.isDivisibleByThree = function(number, divisior){
    return (number % 3 === 0);
  };

FizzBuzz.prototype.isDivisibleByFive = function(number, divisor){
  return (number % 5 === 0)
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number){
  return (number % 3 === 0 && number % 5 === 0);
};

FizzBuzz.prototype.say = function(number){
  if (this.isDivisibleByThreeAndFive(number)){
    return 'fizzbuzz'
  }
  else if (this.isDivisibleByThree(number)) {
    return 'fizz'
  }
   else if (this.isDivisibleByFive(number)){
    return 'buzz'
  }
  else
  return number
};
