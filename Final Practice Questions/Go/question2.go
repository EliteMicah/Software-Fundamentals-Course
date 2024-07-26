package main

import "fmt"

func main() {

	arr1 := []int{7, 3, 9, 4, 2, 1, 5}
	arr2 := []int{10, 15, 3, 7, 8, 2, 12, 17}

	fmt.Println(oddSumMaxPair(arr1))
	fmt.Println(oddSumMaxPair(arr2))

}

func oddSumMaxPair(arr []int) (int, int) {

	largestPair := 0
	num1 := 0
	num2 := 0

	for i := 0; i < len(arr); i++ {
		for k := i + 1; k < len(arr); k++ {
			pairTotal := arr[i] + arr[k]
			if pairTotal >= largestPair && pairTotal%2 != 0 {
				largestPair = (arr[i] + arr[k])
				num1 = arr[i]
				num2 = arr[k]
			}
		}
	}

	return num1, num2
}
