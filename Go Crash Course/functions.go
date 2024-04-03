package main

// Output to console

import (
	"fmt"
)

func main() {

	fmt.Printf("\n")
}

// value, str := add(1, 2)
// 2nd () is the return statement
// func add(num1 int, num2 int) (int, string) {
// 	return num1 + num2, "hello"
// }

// func callFunc(callable func(int) int) int {
// 	return callable(10)
// }

// function with no name, kinda like arrow function
// value := callFunc(func(x int) int {
// 	return x + 1
// })

// func doubleNumber(num int) int {
// 	return 2 * num
// }

// func getFunc(str string) func(string) string {
// 	return func(str2 string) string {
// 		return str + str2
// 	}
// }

// Variadic function
// Accepting any number of integers
// Also labeling return values
// func sum(nums ...int) (s int, s2 int) {

// 	for _, value := range nums {
// 		s += value
// 	}
// 	return
// }
// s, s2 := sum([]int{1, 2, 3, 4, 5}...)
// fmt.Println(s, s2)
