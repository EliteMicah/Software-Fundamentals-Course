package main

import "fmt"

type Store struct {
	Name      string
	Inventory map[string]int // maps from item names to quantity
}

type Transaction struct {
	ItemName string
	Quantity int // quantity can be positive or negative
}

func main() {

	s := &Store{
		Name: "Store 1",
		Inventory: map[string]int{
			"Item 1": 10,
			"Item 2": 20,
		},
	}
	t := Transaction{
		ItemName: "Item 1",
		Quantity: -5,
	}

	success := updateInventory(s, t)
	fmt.Println("Transaction success:", success)
	fmt.Println("Updated inventory:", s.Inventory)

}

func updateInventory(s *Store, t Transaction) bool {

	if currentQuantity, exists := s.Inventory[t.ItemName]; exists {
		newQuantity := currentQuantity + t.Quantity
		if newQuantity < 0 {
			newQuantity = 0
		}
		s.Inventory[t.ItemName] = newQuantity
		return true
	}
	return false
}
