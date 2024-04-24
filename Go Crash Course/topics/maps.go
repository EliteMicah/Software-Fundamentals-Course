package main

// Output to console

import (
	"fmt"
)

func main() {

	mp := map[uint]uint{}

	n := uint(100)

	for number := uint(1); number <= n; number++ {
		for d := uint(1); d <= 5; d++ {
			if number%d == 0 {
				mp[d]++
			}
		}
	}

	fmt.Println(mp)

	fmt.Printf("\n")
}

// Creating map
//	mp := map[string]int{"a": 1}
//	mp2 := make(map[string]int)

// mpsl := map[string][]int{"a": {1, 2, 3}}
// mpsl["b"] = []int{1, 2, 3} // Adding to the map
// delete(mpsl, "b")          // Deleting from the map

// value, ok := mpsl["b"] // Finding with map

// fmt.Println(value, ok)
