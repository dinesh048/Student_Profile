function StudentBio({student}){
    return(
      <div className="card mt-5">
        <div className='card-header'>
          <h4>Student Bio</h4>
        </div>
        <div className='card-body'>
          <p>{student.bio}</p>
        </div>
      </div>
    )
}

export default StudentBio