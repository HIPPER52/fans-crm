import { useEffect, useState } from "react";
import User from "../user/User";
import Toolbar from "../toolbar/Toolbar";
import { getUsers } from "../../http/userAPI";

import "./feed.css";

export default function Feed() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();

      setUsers(data);
    }

    fetchData();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="toolbar">
          <Toolbar />
        </div>
        <div className="posts">
          {users.length ? (
            users.map((user) => <User key={user.id} user={user} />)
          ) : (
            <div className="warning">No users!</div>
          )}
        </div>
      </div>
    </div>
  );
}
