import StudentProfile from "./StudentProfile"

const StudenteProfileList = () => {

    const StudentDataBase = [
        {name:"Julia", description:"ahihajak", imgSrc:"https://i.pinimg.com/1200x/83/a0/94/83a094616d1b2d02c734ddb7c1395d04.jpg"},
        {name:"Samuel", description:"ahihajak", imgSrc:"https://i.pinimg.com/736x/a4/21/96/a42196d60bce77c7d7dfae3c856d5cce.jpg"}
    ]

    return(
        <>
        {
            StudentDataBase.map(
                (student) => <StudentProfile
                name={student.name}
                imgSrc={student.imgSrc}
                description={student.description}
             
                />
            ) 
        }
        </>

    )
}

export default StudenteProfileList
