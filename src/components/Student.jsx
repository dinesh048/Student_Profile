import StudentDetail from "./StudentDetail";
import StudentList from "./StudentList";
import { useState, useEffect } from "react";
import StudentContext from "../context/StudentContext";
import AddStudent from "./AddStudet";
const usersList = [
  {
    id: 1,
    name: "Prakash",
    email: "prakash@nepalexample.com",
    phone: "+977 123 4567",
    location: "Kathmandu, Nepal",
    hobbies: ["Playing Guitar", "Coding", "Reading Books"],
    bio: "Hi, I'm John, a passionate computer science student with a love for coding and technology. I'm always eager to learn new things and take on challenging projects. In my free time, I enjoy playing guitar, reading, and experimenting with new programming languages.",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Nabin",
    email: "nabin@nepalexample.com",
    phone: "+977 987 6543",
    location: "Pokhara, Nepal",
    hobbies: ["Painting", "Hiking", "Swimming"],
    bio: "Hello, I'm Jane. I'm a creative thinker who loves working on visual projects. I enjoy painting, hiking, and exploring new places. I am always looking for inspiration in nature and art.",
    profilePic: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bibek",
    email: "bibek@nepalexample.com",
    phone: "+977 555 6789",
    location: "Lalitpur, Nepal",
    hobbies: ["Gaming", "Cycling", "Photography"],
    bio: "Hey, I'm Bob. I'm a tech enthusiast and gamer. I love cycling around the city and capturing moments with my camera. My passion for gaming has led me to explore game development as a hobby.",
    profilePic: "https://via.placeholder.com/150",
  },
];

function Student() {
  const [users, setUsers] = useState(usersList);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = selectedUser.name;
  }, [selectedUser]);

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
  const addUser = (e) => {
    e.preventDefault();
    const userData =  new FormData(e.target);

    console.log(userData.get('name'));
    let newUser = {
      id: users.length + 1,
      name: userData.get('name'),
      email: userData.get('email'),
      phone: userData.get('phone')
    }
    usersList.push(newUser);
    setUsers([...usersList]);
    e.target.reset();
  }
  
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-12">
            <AddStudent addUser={addUser}></AddStudent>
        </div>
      </div>
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
      </div>
      <div className="row mt-3">
        <div className="col-md-3">
          <StudentList
            users={users}
            showUserDetails={showUserDetails}
          ></StudentList>
        </div>
        <div className="col-md-6">
          <StudentContext.Provider value={selectedUser}>
           { selectedUser.id && (<StudentDetail></StudentDetail>)}
          </StudentContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Student;
