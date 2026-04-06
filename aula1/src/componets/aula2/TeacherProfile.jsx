import "./TeacherProfile.css"

const TeacherProfile = ({name, imgSrc, description, titulacao}) => (
    <div className="teacher-card">
        <div className="tecaher-img">
            <img src={imgSrc} 
            alt={`Foto do professor${name}`} 
            width="150"
            />
        </div>
        <div className="teacher-h2">
           <h2>{name}</h2>
            </div>

            <div className="teacher-titulacao">
           <h3>{titulacao}</h3>
            </div>

        <div className="teacher-description">
            {description}
        </div>
    </div>
);
 
export default TeacherProfile