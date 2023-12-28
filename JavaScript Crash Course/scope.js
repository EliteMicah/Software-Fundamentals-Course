// "let" is local only within current block it's defined in
// "const" acts the same as "let"
// "var" is defined within the most outer scope possible
//    var cannot escape outside it's current function

const x = 5;
function test(x) {
  if (x == 3) {
    console.log("one");
  } else if (x == 4) {
    console.log("two");
  } else {
    console.log("three");
  }
}
// if 'x' is test(x) isn't there, then it would default to the const 'x'

test(3);
