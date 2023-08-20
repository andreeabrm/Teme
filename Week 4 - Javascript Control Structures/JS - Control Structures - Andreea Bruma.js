// display in the console the numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
  
  // display in the console the odd numbers from 1 to 20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  
  // compute the sum of the elements of an array and display it in the console
  const arr1 = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  console.log(sum);
  
  // compute the maximum of the elements of an array and display it in the console 
  const arr2 = [1, 10, 5, 20, 3];
  let max = arr2[0];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
      max = arr2[i];
    }
  }
  console.log(max);
  
  // compute how many times a certain element appears in an array
  const arr3 = [1, 2, 3, 2, 1, 2];
  const target = 2;
  let count = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === target) {
      count++;
    }
  }
  console.log(count);
  
  // using nested for generate the following pattern
  for (let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
      if ((i + j) % 2 === 0) {
        row += '0 ';
      } else {
        row += '1 ';
      }
    }
    console.log(row);
  }
  