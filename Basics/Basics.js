console.log("Hello JS");

// odd even

let arr = [1, 2, 4, 5, 6, 7, 8, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("even", arr[i]);
  } else if (arr[i] % 2 == 1) {
    console.log("odd", arr[i]);
  }
}

let i = 0;

while (i < 5) {
  console.log("Print in while", i);
  i++;
}
