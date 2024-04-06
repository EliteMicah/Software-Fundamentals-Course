package main

// Output to console

import (
	"errors"
	"fmt"
)

func divide(a int, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("Division by 0")
	}

	return a / b, nil
}

func main() {

	result, err := divide(1, 0)

	if err != nil {
		fmt.Println("Error Occurred")
	} else {
		fmt.Println(result)
	}

	fmt.Printf("\n")
}

// defer // Will run no matter what at the end of the program
// Can be used to close files in case something interupts writing to one

// panic("This caused a crash")

// func defferedFunc() {
// 	r := recover() // Allows us to not crash the program
// 	if r == nil {
// 		fmt.Println("No error")
// 	} else {
// 		fmt.Println(r) // Prints the error
// 	}
// }
