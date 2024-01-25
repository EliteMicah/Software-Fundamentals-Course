export function Post({ title, author, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>By: {author}</h1>
      <p>{content}</p>
    </div>
  );
}
/*
import "./post.css";

export function Post({ title, author, content, following }) {
  const button = !following ? (
    <button>Follow</button>
  ) : (
    <button>Unfollow</button>
  );
  return (
    <div className="card">
      <h1>{title}</h1>
      <h1>By: {author}</h1>
      {button}
      <p>{content}</p>
    </div>
  );
}
/*
      {<button> {following ? "Unfollow" : "Follow"} </button>}
      {Used for 2 different types of button
      following ? <button>Unfollow</button> : <button>Follow</button>}
      {following && <button>Unfollow</button>}
*/

*/
