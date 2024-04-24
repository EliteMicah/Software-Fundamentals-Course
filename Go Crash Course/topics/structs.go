package main

// Output to console

import "fmt"

type Sport struct {
	name     string
	position string
}

type Person struct {

	// lowercase - private
	// Uppercase - Public
	name string
	age  uint
	// sports []Sport // Slice of Sport
	favSport Sport
}

func (p Person) getName() string {
	return p.name
}

func (p Person) setName(newName string) {
	p.name = newName
	fmt.Println(p)
}

func main() {

	p1 := Person{name: "Tim", age: 23, favSport: Sport{"Soccer", "D"}}

	fmt.Println(p1.favSport.position)
	// Passes a copy of the struct.
	// Cannot directly change the name without a pointer

	fmt.Printf("\n")
}

// func getName(p Person) string {
// 	return p.name
// }
// getName(p1)

// f    func(string) string
// p1.f = func(x string) string {
// 	return x + "s"
// }
