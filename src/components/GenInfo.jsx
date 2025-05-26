function GenInfo({ genDetails, updateGenDetails }) {

    const handleChange = (e) => {
        updateGenDetails({ ...genDetails, [e.target.name]: e.target.value });
    };

    return (
        <div className="section-card">
            <h2>General Information</h2>
            <form className="form-group" onSubmit={(e) => e.preventDefault()}>
                <input
                    name="name"
                    placeholder="Full Name"
                    // value={genDetails.name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="email"
                    placeholder="Email Address"
                    // value={genDetails.email}
                    onChange={handleChange}
                    type="email"
                    required
                />
                <input
                    name="phone"
                    placeholder="Phone Number"
                    // value={genDetails.phone}
                    onChange={handleChange}
                    type="tel"
                    required
                />
                <input
                    name="github"
                    placeholder="GitHub Username"
                    // value={genDetails.github}
                    onChange={handleChange}
                />
                <input
                    name="linkedIn"
                    placeholder="LinkedIn Profile URL"
                    // value={genDetails.linkedIn}
                    onChange={handleChange}
                />
                <button type="button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default GenInfo;
