import "./userstyle.css";

const UserList = () => {
  return (
    <div className="user-list-card">
      <div className="user-profile-list">
        <img src="src\assets\img\sample-user-list.png" alt="" />
        <div className="name-user">
          <h1>Name</h1>
          <p>lalala@gmail.com</p>
        </div>
      </div>
      <div className="role">Role</div>
    </div>
  );
};

export default UserList;
