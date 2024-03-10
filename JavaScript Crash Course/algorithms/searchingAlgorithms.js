// Binary Search recursively
function search(arr, target, start, end) {
  // Base Case: Did not find Target after searching everything
  if (start > end) return false;
  console.log(arr.slice(start, end + 1));

  const middle = Math.floor((start + end) / 2);

  // Found element
  if (arr[middle] === target) return true;

  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  } else return search(arr, target, middle + 1, end);
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const target = 15;
// const result = search(arr, target, 0, arr.length - 1);
// console.log(result);

// Depth First Search
const maze = [
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", " ", " "],
  ["#", "#", "#", "#", " ", "#", " ", "#", "#", "#"],
  [" ", " ", " ", " ", " ", " ", " ", "#", " ", " "],
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "#"],
  ["#", "#", "#", "#", " ", "#", "#", "#", " ", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", "#", "#"],
  [" ", "#", "#", "#", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "#", "#", "#", "#", "X"],
];

function getStringPos(pos) {
  return `${pos[0]},${pos[1]}`;
}

function getNeighbors(arr, x, y) {
  const neighbors = [];

  // top
  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1, x]);
  // bottom
  if (y < arr.length - 1 && arr[y + 1][x] !== "#") neighbors.push([y + 1, x]);
  // right
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#")
    neighbors.push([y, x + 1]);
  // left
  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y, x - 1]);

  return neighbors;
}

function dfs(array) {
  const visited = new Set();
  const stack = [[0, 0]]; // y, x

  while (stack.length > 0) {
    const pos = stack.pop();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      stack.push(neighbor);
    }
  }

  return visited;
}

/*
function bfs(array) {
  const visited = new Set();
  const queue = [[0, 0]]; // y, x

  while (queue.length > 0) {
    const pos = queue.shift();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    const strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      queue.push(neighbor);
    }
  }

  return visited;
}
*/

function printMaze(maze) {
  let mazeString = "";
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      mazeString += maze[i][j] + " ";
    }
    mazeString += "\n";
  }
  console.log(mazeString);
}

const path = dfs(maze);
console.log(path);

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = "X";
}

printMaze(maze);
