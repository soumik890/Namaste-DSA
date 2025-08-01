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
