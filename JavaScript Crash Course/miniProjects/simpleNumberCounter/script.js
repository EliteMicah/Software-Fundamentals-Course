let number = document.getElementById("number");

function buttonPressed(btn) {
  let currentValue = parseInt(number.innerHTML);
  switch (btn) {
    case 1:
      currentValue -= 1;
      break;
    case 0:
      currentValue = 0;
      break;
    case 2:
      currentValue += 1;
      break;
  }

  number.innerHTML = currentValue;
}
