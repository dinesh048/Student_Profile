import StudentList from "./StudentList";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import usersList from "../data/studentModel";


function Student() {
  const [users, setUsers] = useState(usersList);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = selectedUser.name;
  }, [selectedUser]);  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const filteredUsers = usersList.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredUsers.length > 0) {
      setUsers(filteredUsers);
      setSelectedUser(filteredUsers[0]);
    } else {
      setUsers([]);
      setSelectedUser({});
    }
  }, [search]);

  const showUserDetails = (user) => {
    setSelectedUser(user);
  };
  const addUser = (newUser) => {
    usersList.push(newUser);
    setUsers([...usersList]);
  }
  
  return (
    <div className="container mt-5">
      {/* <div className="row mb-5">
        <div className="col-md-12">
          <AddStudent addUser={addUser}></AddStudent>
        </div>
      </div> */}
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="Search Student"
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <Link className="btn btn-primary float-right" to='/student/add'>Add</Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <StudentList
            users={users}
            showUserDetails={showUserDetails}
          ></StudentList>
        </div>
        {/* <div className="col-md-6">
          <StudentContext.Provider value={selectedUser}>
            { selectedUser.id && (<StudentDetail></StudentDetail>)}
          </StudentContext.Provider>
        </div> */}
      </div>
    </div>
  );
}

export default Student;
