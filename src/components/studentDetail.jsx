
function StudentDetail({selectedUser}){
    return(
        <div className="card">
                    <div className='card-header'>
                        <h4>Student Details</h4>
                    </div>
                    <div className='card-body'>
                        <div className='text-center'>
                            <img src={selectedUser.profilePic} alt={selectedUser.name} className='img-fluid rounded-circle' style={{width: '150px'}} />
                        </div>
                        <h3 className='text-center'>{selectedUser.name}</h3>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Phone:</strong> {selectedUser.phone}</p>
                        <p><strong>Location:</strong> {selectedUser.location}</p>
                        <h4>Hobbies</h4>
                        <ul>
                            {selectedUser.hobbies.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                        <p>{selectedUser.bio}</p>
                    </div>
              </div>
    )
}

export default StudentDetail
