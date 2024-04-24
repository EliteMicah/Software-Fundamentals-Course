package main

import "fmt"

type GenericSlice[T any] []T

func (g GenericSlice[T]) Print() {
	for _, value := range g {
		fmt.Println(value)
	}
}

type GenericStruct[T any] struct {
	values T
}

func main() {

	g := GenericSlice[int]{1, 2, 3}
	g.Print()

	st := GenericStruct[string]{values: "string"}
	fmt.Println(st)

	fmt.Printf("\n")
}

// func add[T int | float64 | uint](x T, y T) T {
// 	var sum T = x + y
// 	return sum
// }
// value := add(2, 3)
// value2 := add(uint(2), uint(7))
// value3 := add(34.5, 54.3)

// fmt.Println(value, value2, value3)

// func getValues[K comparable, V any](mp map[K]V) []V {

// 	// Allows us to iterate over a map
// 	values := []V{}

// 	for _, value := range mp {
// 		values = append(values, value)
// 	}

// 	return values
// }
// mp := map[string]int{"a": 100, "b": 5, "c": 1, "d": 5}
// values := getValues(mp)
// fmt.Println(values)

// type Number interface {
// 	int | float64 | uint
// }

// func add[T Number](x T, y T) T {
// 	var sum T = x + y
// 	return sum
// }
