/*
const p = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => resolve("It worked!"), 2000);
    } else {
        reject("It failed...");
    }
});

// Waits for the value to be returned before running
p.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

// Prints this before p.then
console.log("waiting");
*/
// ---------------------------------------------
const getFriends = new Promise((resolve, reject) => {
    setTimeout(() => resolve({friends: ["Tim", "Joe", "Sarah"] }), 3000);
});

const getProfile = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve( {
            profile: {
                name: "Tim",
                country: "Canada", 
                username: "timeh" ,
            },
        },
        1000
    )
    );
});

const addFriend = new Promise((resolve, reject) => {
setTimeout(() => resolve({ status: "success" }), 2000);
});

/*
getFriends.then((data) => console.log(data));
getProfile.then((data) => console.log(data));
addFriend.then((data) => console.log(data));
*/
const results = Promise.all([getFriends, getProfile, addFriend]);
results.then((data) => console.log(data));
//console.log(results);
