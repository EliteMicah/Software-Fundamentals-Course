export function Post({ title, author, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>By: {author}</h1>
      <p>{content}</p>
    </div>
  );
}
