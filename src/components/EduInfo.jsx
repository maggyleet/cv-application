function EduInfo({ eduDetails, updateEduDetails }) {

    const handleChange = (e) => {
        updateEduDetails({ ...eduDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="section-card">
            <h2>Educational Experience</h2>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <input
                    name="degName"
                    placeholder="Degree Name (e.g., Bachelor of Science)"
                    // value={eduDetails.degName}
                    onChange={handleChange}
                    required
                />
                <input
                    name="clgName"
                    placeholder="School/College Name"
                    // value={eduDetails.clgName}
                    onChange={handleChange}
                    required
                />
                <input
                    name="year"
                    placeholder="Year of Study (e.g., 2021 - 2025)"
                    // value={eduDetails.year}
                    onChange={handleChange}
                    required
                />
                <button type="button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EduInfo;
