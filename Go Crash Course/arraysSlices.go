package main

// Output to console

import (
	"fmt"
)

func main() {

	arr := [...][2]int{{1, 2}, {2, 2}, {3, 2}}
	arr[0] = [2]int{10, 11}
	// fmt.Println(len(arr))
	test(arr)
	fmt.Println(arr)

	for _, nested := range arr {
		for _, value := range nested {
			fmt.Println(value)
		}
	}
}

func test(arr [3][2]int) {
	arr[0] = [2]int{100, 100}
}

// Cannot change the size of the array
// Can only change whats inside
// var arr [2]bool
// fmt.Println(arr)
// arr := [2]int{1, 2}

// arr := [...][2]int{{1, 2}, {2, 2}, {3, 2}}
// func test(arr [3][2]int) {}
// test must be [3][2] to match with original array
