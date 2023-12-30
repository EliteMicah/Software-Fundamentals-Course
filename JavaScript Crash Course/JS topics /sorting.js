/*
const num = [1, 2, 3, 4, 5, 2, 1, 2, 60, 56, 23];
// const sortedNums = num.sort(); // sorts the strings. Doesn't work for double digit ints
const sortedNums = num.sort((a, b) => a - b); // Sorts by numbers
console.log(sortedNums);
*/

const objs = [
  { year: 2012, make: "Ford" },
  { year: 2017, make: "Porsche" },
  { year: 1999, make: "Volvo" },
  { year: 2022, make: "Chevy" },
];

// Sorts by year
const sortedObjs = objs.sort((a, b) => {
  const diffInYear = b.year - a.year;

  if (diffInYear == 0) {
    if (a.make > b.make) {
      return 1;
    } else if (a.make < b.make) {
      return -1;
    } else {
      return 0;
    }
  }

  return diffInYear;
});
console.log(sortedObjs);
console.log(sortedObjs.reverse()); // reverses it but doesn't copy it
console.log([...sortedObjs].reverse()); // reverses it and copies it
