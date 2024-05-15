function add(x, y) {
    return x + y;
}

module.exports = {
    add, 
}

// --------------------------

function removeEven(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}

module.exports = {
    removeEven, 
}
