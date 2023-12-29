// I gave an honest attempt but I got stuck. I knew what to do but not how
// to do it. I knew each person needed a points system but I was thinking 
// of doing a map for that instead of a new object. My attempt is in the block comment
// The correct way is below mine.

/*
const people = [
  { firstName: "Tim", friends: ["John", "Sally"] },
  { firstName: "John", friends: ["Tim", "Mike"] },
  { firstName: "Mike", friends: [] },
  { firstName: "Sally", friends: ["Tim"] },
];

function friends(peopleObj) {
  let mostLoyal = "";
  const friendMap = new Map();

  // Giving each person a points based system
  for (const value of peopleObj) {
    friendMap.set(value.firstName, 0);
  }

  for (let i = 0; i < peopleObj.length; i++) {
    for (let k = i + 1; k < peopleObj.length; k++) {
      if (peopleObj[k].friends.length == 0) {
        continue;
      } else {
        for (let j = 0; j < peopleObj[i].friends.length; j++) {
          if (
            peopleObj[i].firstName == peopleObj[k].friends[j] &&
            peopleObj[k].firstName == peopleObj[i].friends[j]
          ) {
          }
        }
      }
    }
  }
  return mostLoyal;
}
console.log(friends(people));
*/

function friends(people) {
  if (people.length == 0) {
    return undefined;
  }

  // we'll start by creating a new object that stores the persons name as a property/key
  // this allows us to more easily lookup with person has which friends
  const newPeople = {};
  for (const person of people) {
    newPeople[person.name] = { friends: person.friends, loyalFriends: 0 };
  }

  // we'll use the newPeople object to store the number of loyal friends
  for (const person of people) {
    for (const friend of person.friends) {
      const isFriend = newPeople[friend].friends.includes(person.name);
      if (isFriend) {
        newPeople[person.name].loyalFriends += 1;
      }
    }
  }

  // now we can see who has the most loyal friends
  let maxFriendsPerson = undefined;
  for (const [name, values] of Object.entries(newPeople)) {
    if (maxFriendsPerson === undefined) {
      maxFriendsPerson = name;
      continue;
    }

    if (values.loyalFriends > newPeople[maxFriendsPerson].loyalFriends) {
      maxFriendsPerson = name;
    }
  }

  return maxFriendsPerson;
}

const people = [
  { name: "Tim", friends: ["John", "Sally"] },
  { name: "John", friends: ["Tim", "Mike"] },
  { name: "Mike", friends: [] },
  { name: "Sally", friends: ["Tim"] },
];
const result = friends(people);
console.log(result);
