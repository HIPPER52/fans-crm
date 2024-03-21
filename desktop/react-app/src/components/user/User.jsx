import "./user.css";

export default function User({ user }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <div className="postText">{user.name}</div>
          <div>{user.email}</div>
        </div>
      </div>
    </div>
  );
}
