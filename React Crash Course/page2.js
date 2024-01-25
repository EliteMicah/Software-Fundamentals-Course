"use client";
import { Post } from "@/components/Post";
import { useState, useEffect } from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    console.log("run");
  }, []);

  function addPost() {
    const newPost = {
      author: author,
      content: content,
      title: title,
      following: false,
    };

    setPosts([...posts, newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          oncChange={(e) => setTitle(e.target.value)}
          placeholder="Tltle"
        />
        <input
          type="text"
          value={content}
          oncChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input
          type="text"
          value={author}
          oncChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts">
        {posts.map((post, idx) => (
          <Post {...post} key={idx + Math.random()} />
        ))}
      </div>
    </div>
  );
}
