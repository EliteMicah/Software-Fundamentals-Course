const code = require("./code")

//code.add(1, 2)

describe("Test add function", () => {
    //describe("Test addition")

    // "test" or "it"
    test("1 + 2 = 3", () => {
        const result = code.add(1, 2);
        expect(result).toEqual(3);
    })
})

// -----------------------------

const code = require("./code");

describe("removeEven", () => {

    // "all" runs before all the testing cases
    // "each" runs before each test case
    beforeAll(() => {
        console.log("Before");
    });

    test("Filters out even numbers from array", () => {
        const numbers = [1,2,3,4,5,6];
        const result = code.removeEven(numbers);
        expect(result).toEqual([1,3,5]);
    });

    afterAll(() => {
        console.log("After");
    });
});
