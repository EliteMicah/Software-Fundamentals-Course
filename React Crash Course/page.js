/*
function Text({ content, strong }) {
  if (strong) {
    return <strong>{content}</strong>;
  }

  return <p>{content}</p>;
}
*/

import { Post } from "@/components/Post";

export default function Home() {
  return (
    <div>
      <Post
        title="Tim is the best"
        author="Tim"
        content="Tim is the best teacher for everything programming"
      />
    </div>
  );
}
