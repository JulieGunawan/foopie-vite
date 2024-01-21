import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [users]);

  return (
    <div>
      <h1>Fetch Data Example</h1>
      <div className="users">
        {users.map((user) => {
          const { id, login } = user;
          return (
            <div key={id}>
              <h3>{login}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fetch;
