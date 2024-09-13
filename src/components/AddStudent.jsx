import { useState } from 'react'
import usersList from "../data/studentModel";
import { useNavigate } from 'react-router-dom'; 

function AddStudent({addUser}){
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    profilePic: "https://via.placeholder.com/150",
    name: '',
    email: '',
    phone: ''
  });
  const handleInputChanges = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent({
      profilePic: "https://via.placeholder.com/150",
      name: '',
      email: '',
      phone: ''
    });
    usersList.push({id:usersList.length, ...student});
    navigate('/students');

  }
  const handleCancel = () => {
    navigate('/students');
  }
    return(
      <div className="card">
        <div className='card-header'>
          <h4> Add Student</h4>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <div  className='row'>
              <div className="col">
                <label> Name</label>
                <input type="text" className="form-control" value={student.name} onChange={handleInputChanges} name="name" placeholder="Name"/>
              </div>
              <div className="col">
                <label> Email</label>
                <input type="text" className="form-control" value={student.email} onChange={handleInputChanges} name="email" placeholder="Email"/>
              </div>
              <div className="col">
                <label> Phone Number</label>
                <input type="text" className="form-control"value={student.phone} onChange={handleInputChanges} name="phone" placeholder="Phone Number"/>
              </div>
            </div>
            <button type="submit" className="btn btn-primary m-3">Add Student</button>
            <button type="button" className="btn btn-secondary m-3" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      </div>
    )
}


export default AddStudent