import {Link} from "react-router-dom";

function StudentList({users}){
    return(
      <div className="card">
        <div className='card-header'>
          <h4>Students </h4>
        </div>
        <div className='card-body'>
        
          {users.map((user) => (
            <div  className='row' key={user.id}>
              <div className="col-md-3" >
                {user.name}
              </div>
              <div className="col-md-3" >
                {user.email}
              </div>
              <div className="col-md-3" >
                {user.phone}
              </div>
              <div className="col-md-3">
                <div>
                  <Link className="btn btn-primary float-right mt-1" to={`/student/${user.id}`} >View</Link>
                </div>
              </div>
            </div>
          ))}
        
        </div>
      </div>
    )
}

export default StudentList