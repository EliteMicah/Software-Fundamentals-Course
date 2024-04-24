package main

// Output to console

import (
	"fmt"
)

func main() {

	sl := []string{"hello", "world", "hi"}
	test(sl)
	fmt.Println(sl)

	fmt.Printf("\n")
}

func test(arr []string) {
	arr[0] = "changed this"
}

// sl := arr[1:3] start at index 1, go to index 3
// slices do modify the array if you change an element in the slice

// arr := [5]int{1, 2, 3, 4, 5}
// sl := arr[1:3]
// sl = sl[:4]

// fmt.Println(sl, len(sl), cap(sl))

// pointer -> points to first element in the array (at the index of sl[:])
// length -> 3
// capacity -> 5

// Making an slice not an array
// sl := []string{"Hello", "world"}

// for x := 0; x < 10; x++ {
// 	sl = append(sl, "tim") // adds element to the slice
// 	fmt.Println(sl, len(sl), cap(sl))
// }

// sl := make([]int, 10) // empty slice with length of 10

// for i, value := range sl {
// 	fmt.Println(i, value)
// }
