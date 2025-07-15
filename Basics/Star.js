for (let i = 0; i < 10; i++) {
  let str = "";
  for (let j = 0; j < i + 1; j++) {
    str = str + "*";
  }
  console.log(str);
}

for (let i = 10; i > 0; i--) {
  let str = "";
  for (let j = 10; j > i - 1; j--) {
    str = str + "*";
  }
  console.log(str);
}

console.log("///////////////////////////");

for (let i = 0; i < 10; i++) {
  let str = "";
  for (let j = 10; j > i ; j--) {
    str = str + "*";
  }
  console.log(str);
}

for (let i = 10; i > 0; i--) {
  let str = "";
  for (let j = 0; j < i ; j++) {
    str = str + "*";
  }
  console.log(str);
}
