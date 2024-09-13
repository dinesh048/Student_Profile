import StudentHobbies from "./StudentHobbies"
import StudentInfo from "./StudentInfo"
import StudentBio from "./StudnetBio"
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import usersList from "../data/studentModel"


function StudentDetail(){
  
  const [student, setStudent] = useState({})
  const { id } = useParams()
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/students');
  }
  useEffect(() => {
    const studentDetail = usersList.find((student) => student.id === parseInt(id))
    console.log('student', studentDetail)
    setStudent(studentDetail)
  },[])
    return (
      <>
        <StudentInfo student={student}></StudentInfo>
        <StudentBio  student={student} ></StudentBio>
        <StudentHobbies student={student}></StudentHobbies>
        <button type="button" className="btn btn-secondary m-3" onClick={handleCancel}>Cancel</button>  
      </>
    )
}

export default StudentDetail

//props drilling



