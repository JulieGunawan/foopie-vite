import User from "./User";

const Users = ({ users, removeUser }) => {
  return (
    <section>
      <h1>All Users</h1>
      <div className="container">
        {users.map((user) => {
          return (
            <User key={user.id} {...user} user={user} removeUser={removeUser} />
          );
        })}
      </div>
    </section>
  );
};
export default Users;
