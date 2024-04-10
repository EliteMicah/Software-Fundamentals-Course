package main

import (
	"fmt"
	"sync"
)

type Counter struct {
	value int
	lock  sync.Mutex
}

func count(counter *Counter, wg *sync.WaitGroup) {
	// Lock so that multiple threads aren't accessing it at the same time
	counter.lock.Lock()
	defer counter.lock.Unlock()
	counter.value++
	fmt.Println(counter.value)
	wg.Done() // Waits till true to move on
}

func main() {

	counter := Counter{}

	wg := sync.WaitGroup{}
	wg.Add(100) // Adding 100 go routines to wait for

	for i := 0; i < 100; i++ {
		// wg.Add(1)
		go count(&counter, &wg)
	}

	wg.Wait()

	fmt.Printf("\n")
}

// Anything with "go" routine can run at the same time
// Doesn't wait for another process to finish before running
// func run() {
// 	time.Sleep(2 * time.Second)
// 	fmt.Println("run")
// }
// func run2() {
// 	time.Sleep(2 * time.Second)
// 	fmt.Println("run2")
// }
// func run3() {
// 	time.Sleep(2 * time.Second)
// 	fmt.Println("run3")
// }
// go run()
// go run2()
// go run3()
// time.Sleep(2 * time.Second)
// fmt.Println("Done")

// Blocking operation
//x := <-ch // Waiting for the value to be recieved before moving on
// go add(8, 11, ch)
// x = <-ch
// go add(5, 0, ch)
// x = <-ch
// go add(5, -5, ch)
// x = <-ch

// ch := make(chan int)
// ch2 := make(chan int)
// go add(10, 5, ch, 4)
// go add(20, 15, ch2, 2)
// for i := 0; i < 2; i++ {
// 	select {
// 	case x := <-ch:
// 		fmt.Println(x)
// 	case y := <-ch2:
// 		fmt.Println(y)
// 	}
// }
// func add(x int, y int, ch chan<- int, delay int) {
// 	time.Sleep(time.Duration(delay) * time.Second)
// 	ch <- x + y // Passing a value onto a channel
// }

// ch := make(chan bool, 2) // Buffered channel that can recieve 2 inputs
// ch <- true
// <-ch
// fmt.Println("Done")

// 100 go routines that count to 100
// for i := 0; i < 100; i++ {
// 	go count(&counter, ch)
// }
// 100 recieves for the 100 sends
// for i := 0; i < 100; i++ {
// 	<-ch
// }
// func count(counter *Counter, ch chan<- bool) {
// 	// Lock so that multiple threads aren't accessing it at the same time
// 	counter.lock.Lock()
// 	defer counter.lock.Unlock()
// 	counter.value++
// 	fmt.Println(counter.value)
// 	ch <- true // Waits till true to move on
// }
