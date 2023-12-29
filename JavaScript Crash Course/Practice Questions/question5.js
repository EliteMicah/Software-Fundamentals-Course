const userString = "-2|-4|-1|-1";
const arr = userString.split("|");

console.log(arr);

function mathIsFun(stringArr) {
  let maxNum = -Infinity;

  for (let i = 0; i < stringArr.length; i++) {
    let currNum = Number(stringArr[i]);

    for (let k = i + 1; k < stringArr.length; k++) {
      let nextNum = Number(stringArr[k]);

      if (currNum + nextNum >= maxNum) {
        maxNum = currNum + nextNum;
      }
    }
  }
  return maxNum;
}

console.log(mathIsFun(arr));
