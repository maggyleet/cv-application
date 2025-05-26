function ExpInfo({ expDetails, updateExpDetails }) {

    const handleChange = (e) => {
        updateExpDetails({ ...expDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="section-card">
            <h2>Practical Experience</h2>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <input
                    name="compName"
                    placeholder="Company Name"
                    // value={expDetails.compName}
                    onChange={handleChange}
                    required
                />
                <input
                    name="pos"
                    placeholder="Position Title"
                    // value={expDetails.pos}
                    onChange={handleChange}
                    required
                />
                <input
                    name="startDate"
                    placeholder="Start Date (e.g., 15-02-2025)"
                    type="date"
                    // value={expDetails.startDate}
                    onChange={handleChange}
                    required
                />
                <input
                    name="endDate"
                    placeholder="End Date (e.g., 31-02-2026)"
                    type="date"
                    // value={expDetails.endDate}
                    onChange={handleChange}
                />
                <textarea
                    name="desc"
                    placeholder="Main Responsibilities"
                    // value={expDetails.desc}
                    onChange={handleChange}
                    rows={4}
                    required
                />
                <button type="button">
                    Submit
                </button>
            </form>

        </div>
    );
}

export default ExpInfo;
