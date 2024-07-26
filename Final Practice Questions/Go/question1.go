package main

import (
	"fmt"
	"sort"
)

func main() {

	arr := []int{7, 3, 7, 4, 2, 1, 5}

	twoLargest(arr)

}

func twoLargest(arr []int) {

	// Sorting in descending order
	sort.Slice(arr, func(i, j int) bool {
		return arr[j] < arr[i]
	})

	sl := arr[0:2]
	fmt.Println(sl)
}
