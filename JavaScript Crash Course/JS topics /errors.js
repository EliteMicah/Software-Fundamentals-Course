const x = 2;

// Trying a line to see if it breaks
try {
  //x.toUpperCase();
  throw Error("this is an error");
} catch (err) {
  // If try fails, go to catch
  console.log(err.message, err.name);
  //console.log(err);
} finally {
  // function that happens no matter what
  console.log("finally");
}
