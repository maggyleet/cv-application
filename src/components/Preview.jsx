import '../styles/Preview.css';

function Preview({ genDetails, eduDetails, skillDetails, expDetails }) {
    return (
        <div className="cv-sheet">
            <div className="gen-info">
                <h2>{genDetails.name}</h2>
                <p className="center-line">
                    Github: {genDetails.github} | {genDetails.email}
                </p>
                <p className="center-line">
                    {genDetails.phone} | {genDetails.linkedIn}
                </p>
            </div>

            <div className="section edu-info">
                <h4>Education</h4>
                <p>{eduDetails.degName}, {eduDetails.clgName}</p>
                <p>{eduDetails.year}</p>
            </div>

            <div className="section skill-info">
                <h4>Skills</h4>
                <p><strong>Technical:</strong> {skillDetails.techSkill}</p>
                <p><strong>Soft:</strong> {skillDetails.softSkill}</p>
                <p><strong>Analytical:</strong> {skillDetails.analyticalSkill}</p>
            </div>

            <div className="section exp-info">
                <h4>Experience</h4>
                <p><strong>Company:</strong> {expDetails.compName}</p>
                <p><strong>Duration:</strong> {expDetails.startDate} - {expDetails.endDate}</p>
                <p><strong>Role:</strong> {expDetails.pos}</p>
                <p>{expDetails.desc}</p>
            </div>
        </div>
    );
}

export default Preview;
