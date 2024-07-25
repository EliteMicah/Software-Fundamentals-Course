/*
Write a Go function that accepts an array of integers and returns the largest integer present in
that array.
*/

package main

import (
	"fmt"
)

func main() {
	arr := []int{-7, -3, -9, -4, -2, -1, -2, -3}

	largestInteger(arr)
}

func largestInteger(numbers []int) int {

	if len(numbers) == 0 {
		return 0
	}

	largest := numbers[0]

	for _, num := range numbers {
		if num > largest {
			largest = num
		}
	}

	fmt.Println(largest)
	return largest
}
