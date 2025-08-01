const digitCounter = (digit) => {
  if (digit == 0) return 1;

  let number = Math.abs(digit);
  let count = 0;

  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  return count;
};

console.log(digitCounter(-259));

//Math.ceil(10.1) ==> 11
//Math.floor(10.9) ==> 10
//Math.round(10.5) ==> 11
//Math.round(10.4) ==> 10
//Math.abs(-10) ==> 10
