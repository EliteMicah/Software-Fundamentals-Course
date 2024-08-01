package main

import "fmt"

type Book struct {
	Title  string
	Author string
	Sales  int
}

func main() {

	books := []Book{
		Book{
			Title:  "Book 1",
			Author: "Author 1",
			Sales:  5000,
		},
		Book{
			Title:  "Book 2",
			Author: "Author 2",
			Sales:  10000,
		},
		Book{
			Title:  "Book 3",
			Author: "Author 1",
			Sales:  6000,
		},
		Book{
			Title:  "Book 4",
			Author: "Author 3",
			Sales:  3000,
		},
		Book{
			Title:  "Book 5",
			Author: "Author 1",
			Sales:  2000,
		},
	}

	fmt.Println(topAuthors(books))

}

func topAuthors(books []Book) map[string]int {

	authorSales := make(map[string]int)
	minSales := 10000

	for _, book := range books {
		authorSales[book.Author] += book.Sales
	}

	for author, sales := range authorSales {
		if sales < minSales {
			delete(authorSales, author)
		}
	}

	return authorSales
}
