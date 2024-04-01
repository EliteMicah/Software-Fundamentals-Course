package main

// Output to console
import "fmt"

func main() {

	var x uint8 = 8
	fmt.Println(x)

}

// implicit assignment operator
// x := -9
// y := uint64(x)
// fmt.Println(x, y)

// Mac Go Command
// go run demo.go
// go build demo.go
// ./demo

// int Positive numbers
// uint Negative numbers & positive
// float64 Floating point value - decimal
// rune = int32
// bool true or false
// string ""
// char ''
// nill undefined or null

// x := 7  = variable creation
// fmt.Println  = print line
// ex. fmt.Println("Hello world", x)
// fmt.Printf  = print formatted where 1st var is formatted
// ex. fmt.Printf("The value of x is: %v\n", x)
// %T  = variable type, %d  = integer
// %b  = binary, %e  = scientific notation
// %f = float, %s  = string rep
// %.2f  = 2 levels of precision rounded
// %10.2f  = 10 chars spaced with 2 precision
// fmt.Sprintf("%10.2f%%", x)  = formats a string
// ex. fmt.Println(y, y, y)
