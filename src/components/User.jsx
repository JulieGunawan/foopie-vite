const User = ({ id, login, avatar_url, removeUser }) => {
  return (
    <section>
      <div className="user">
        <div className="left">
          <h3>{login}</h3>
          <button className="btn" type="button" onClick={() => removeUser(id)}>
            Delete
          </button>
        </div>
        <img className="userImg" src={avatar_url} alt={login} />
      </div>
    </section>
  );
};
export default User;
