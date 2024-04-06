package main

import "fmt"

func main() {

	fmt.Printf("\n")
}

// x := 0
// y := &x // Pointer to address
// *y = 100
// fmt.Println(x, *y) // *y grabs the value that the address points to

// func change(x *int) {
// 	*x = 100
// }
// a := 10
// change(&a)
// fmt.Println(a)

// type Book struct {
// 	id    int
// 	title string
// }
// func (b *Book) setTitle(title string) {
// 	b.title = title
// }
// b := Book{10, "Old"}
// b.setTitle("New")
// fmt.Println(b)

// x := 0
// y := &x
// z := &y
// fmt.Println(x, *y, **z)
// fmt.Printf("%T", z)
// **z Needs to dereference this twice because it is
// a pointer to a pointer, hence the double **

// func test(pointerSlice *[]*int) { // Pointer to a slice that contains pointers to int objects
// 	values := *pointerSlice

// 	for _, value := range values {
// 		value
// 	}
// }
// a := 1
// b := 2
// values := &[]*int{&a, &b}
// fmt.Println(values)
