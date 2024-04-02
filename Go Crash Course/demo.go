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

// GO COMMANDS
// Mac Go Command
// go run demo.go
// go build demo.go
// ./demo

// VARIABLES
// int Positive numbers
// uint Negative numbers & positive
// float64 Floating point value - decimal
// rune = int32
// bool true or false
// string ""
// char ''
// nill undefined or null

// PRINTING
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

// VARIABLE TYPES
// x := uint8(7)
// y := 1000
// z := x + uint8(y)
// Wrong, should always convert small type or number to larger, not vice versa
// z := int(x) + (y)
// correct

// SPRINT
// 	str1 := "hi"
//	str2 := 2
//	both := str1 + fmt.Sprint(str2)
//	fmt.Println(both)

// STRING CONVERSION
//fmt.Println(math.Ceil(4.25))
// 	x := "1111011"
//	y, err := strconv.ParseInt(x, 2, 0)

// IF STATEMENT
// 	x := 2
//	if x < 3 {
//		fmt.Println(x)
//	} else if x > 4 {
//		fmt.Println("Greater than")
//	} else {
//		fmt.Println("Hi")
//	}

// SWITCH STATEMENT
// a := 1
// switch {
// case a < 1:
// 	fmt.Println("one")
// 	fallthrough // Automatically goes to next case
// case a > 2:
// 	fmt.Println("two")
// default:
// 	fmt.Println("defualt")
// }
