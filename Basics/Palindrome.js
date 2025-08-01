const palindromeCheck = (number) => {
  return number.toString() == number.toString().split("").reverse().join("");
};

console.log(palindromeCheck(123));

const palindromeCheck2 = (number) => {
  let numberCopy = number;
  let rev = 0;
  while (number > 0) {
    let rem = number % 10;
    rev = 10 * rev + rem;
    number = Math.floor(number / 10);
  }
  return rev === numberCopy;
};

console.log(palindromeCheck2(121));
