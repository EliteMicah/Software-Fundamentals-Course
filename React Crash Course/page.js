/*
function Text({ content, strong }) {
  if (strong) {
    return <strong>{content}</strong>;
  }

  return <p>{content}</p>;
}
*/

"use client";
import { Post } from "@/components/Post";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function onCount() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={onCount}>Count Up!</button>
    </>
  );
}

/*
import { Post } from "@/components/Post";

export default function Home() {
  const posts = [
    {
      title: "My Post",
      author: "Tim Ruscica",
      content: "Best Developer",
      following: false,
    },
    {
      title: "My Post 2",
      author: "Tim Ruscica",
      content: "Testing things out",
      following: false,
    },
    {
      title: "My Post 3",
      author: "Tim Ruscica",
      content: "this is another post",
      following: false,
    },
  ];

  return (
    <>
      {posts.map((content, idx) => {
        return <Post {...content} key={idx + Math.random()} />;
      })}
    </>
  );
}
*/
