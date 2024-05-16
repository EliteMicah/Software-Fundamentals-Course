import fetch from "node-fetch"

async function getData() {
    const results = await fetch("http://localhost:8080/books").then((data) => data.json()).then((data) => console.log(data));
    
    for (const result of results) {
        console.log(result);
    }
}

async function createBook(id, author, title, quanitity) {

    const data = {
        id,
        author,
        title,
        quanitity,
    };


    const result = await fetch("http://localhost:8080/books", {
        method: "POST", // PATCH, DELETE
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((data) => data.json())
    .then((data) => console.log(data));
    console.log(result);
}

createBook("4", "Test", "Tim", 1).then(() => getData());
