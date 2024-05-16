async function getResult(p) {
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
    await addFriend.then((data) => console.log(data));
    await getProfile.then((data) => console.log(data));
    await getFriends.then((data) => console.log(data));
    */
    const results = Promise.all([getFriends, getProfile, addFriend]);
    console.log(await results);
    console.log(p);
}

async function getMultipleResults() {
    const p1 = getResult();
    const p2 = getResult();

    await p1;
    await p2;
    console.log("Done");
}

getMultipleResults();
