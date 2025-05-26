function SkillInfo({ skillDetails, updateSkillDetails }) {

    const handleChange = (e) => {
        updateSkillDetails({ ...skillDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="section-card">
            <h2>Skills</h2>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <input
                    name="techSkill"
                    placeholder="Technical Skills (e.g., Java, JavaScript, SQL)"
                    // value={skillDetails.techSkill}
                    onChange={handleChange}
                    required
                />
                <input
                    name="softSkill"
                    placeholder="Soft Skills (e.g., Communication, Teamwork)"
                    // value={skillDetails.softSkill}
                    onChange={handleChange}
                />
                <input
                    name="analyticalSkill"
                    placeholder="Analytical Skills (e.g., Critical Thinking)"
                    // value={skillDetails.analyticalSkill}
                    onChange={handleChange}
                />
                <button type="button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SkillInfo;
