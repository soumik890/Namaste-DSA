const reverseInteger = (number) => {
  let reversed = Math.abs(number).toString().split("").reverse().join("");
  let output;
  if (number < 0) {
    output = -1 * parseInt(reversed);
  } else {
    output = parseInt(reversed);
  }

  return output;
};

const reverseInterger2 = (n) => {
  let rev = 0;
  let number = Math.abs(n);
  while (number > 0) {
    let last = number % 10;
    rev = rev * 10 + last;
    number = Math.floor(number / 10);
  }
  return n < 0 ? -rev : rev;
};

console.log(reverseInterger2(-1234567890));
