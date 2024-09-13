function StudentHobbies({student}){ 
    return(
      <div className="card mt-5">
        <div className='card-header'>
          <h4>Hobbies</h4>
        </div>
        <div className='card-body'>
          <ul>
            {student?.hobbies?.map((hobby, index) => (
              <li key={index}>{hobby}</li>
         
                            ))}
          </ul>
        </div>
      </div>
    )
    
}
export default StudentHobbies