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
